//! Main entry point for the API server.
mod tools;
use crate::tools::responses;
use rocket::{get, http, serde::json::Json};

#[macro_use]
extern crate rocket;

/// The root path of the API.
#[get("/health")]
fn health() -> Result<Json<responses::Simple>, http::Status> {
    const MESSAGE: &str = "Surreality API is running.";

    let response: responses::Simple = responses::Simple {
        status: 200,
        message: MESSAGE.to_string(),
    };

    Ok(Json(response))
}

/// The main entry point for the API server.
#[launch]
fn rocket() -> _ {
    rocket::build().mount("/api", routes![health])
}
