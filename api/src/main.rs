mod db;
mod models;
mod routers;
mod tools;
use crate::tools::responses;
use rocket::{get, http, serde::json::Json, State};
use sqlx::{mysql, MySql, Pool};
use std::env;

#[macro_use]
extern crate rocket;

#[get("/health")]
fn health() -> Result<Json<responses::Message>, http::Status> {
    const MESSAGE: &str = "Surreality API is running.";

    let response: responses::Message = responses::Message {
        status: 200,
        message: MESSAGE.to_string(),
    };

    Ok(Json(response))
}

// #[get("/posts/<id>")]
// async fn get_post(id: i32) -> Result<Json<responses::Simple>, http::Status> {
//     let response: responses::Simple = responses::Simple {
//         status: 200,
//         message: format!("Post {} retrieved.", id),
//     };
//
//     Ok(Json(response))
// }

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
            "/api",
            routes![health, routers::posts::get_one, config, reset],
        )
        .register("/api/posts", catchers![tools::catcher::post_not_found])
        .register("/api", catchers![tools::catcher::not_found])
        .manage(pool)
        .launch()
        .await?;
    Ok(())
}
