mod models;
mod routers;
mod tools;
use crate::tools::{catcher, responses};
use rocket::{http, serde::json::Json, State};
use sqlx::{mysql, MySql, Pool};
use std::env;

#[macro_use]
extern crate rocket;

#[post("/config")]
async fn config(pool: &State<Pool<MySql>>) -> Result<Json<responses::Message>, http::Status> {
    let _res = sqlx::query!(
        r#"
    CREATE TABLE
    IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
        "#
    )
    .execute(&**pool)
    .await
    .expect("error");
    let response: responses::Message = responses::Message {
        status: 200,
        message: "Config retrieved.".to_string(),
    };

    Ok(Json(response))
}

#[post("/reset")]
async fn reset(pool: &State<Pool<MySql>>) -> Result<Json<responses::Message>, http::Status> {
    let _res = sqlx::query!("DROP TABLE IF EXISTS users;")
        .execute(&**pool)
        .await
        .expect("error");
    let response: responses::Message = responses::Message {
        status: 200,
        message: "Config retrieved.".to_string(),
    };

    Ok(Json(response))
}

#[rocket::main]
async fn main() -> anyhow::Result<()> {
    let database_url: String = env::var("DATABASE_URL")?;

    let pool: sqlx::Pool<sqlx::MySql> = mysql::MySqlPool::connect(&database_url).await?;

    rocket::build()
        .mount(
            "/api/posts",
            routes![routers::posts::get_all, routers::posts::get_one],
        )
        .mount("/api", routes![routers::health, config, reset])
        .register("/api/posts", catchers![catcher::post_not_found])
        .register("/api", catchers![catcher::not_found])
        .register("/", catchers![catcher::not_in_api, catcher::internal_error])
        .manage(pool)
        .launch()
        .await?;
    Ok(())
}
