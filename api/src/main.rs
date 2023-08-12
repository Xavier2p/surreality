//! Main entry point for the API server.
#[macro_use]
extern crate rocket;

/// The root path of the API.
#[get("/")]
fn world() -> &'static str {
    "hello, world"
}

/// The main entry point for the API server.
#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let _rocket = rocket::build().mount("/", routes![world]).launch().await?;

    Ok(())
}
