use crate::tools::responses;
use rocket::{http, serde::json::Json};

pub mod posts;
mod reacts;
mod users;

#[get("/health")]
pub fn health() -> Result<Json<responses::Message>, http::Status> {
    const MESSAGE: &str = "Surreality API is running.";

    let response: responses::Message = responses::Message {
        status: 200,
        message: MESSAGE.to_string(),
    };

    Ok(Json(response))
}
