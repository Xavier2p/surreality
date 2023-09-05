use crate::responses;
use rocket::{http, serde::json::Json, Request};

#[catch(404)]
pub fn not_in_api(req: &Request) -> Json<responses::Message> {
    responses::Message::new(
        http::Status::NotFound,
        format!("'{}' is not in the /api namespace.", req.uri()),
    )
}

#[catch(404)]
pub fn not_found(req: &Request) -> Json<responses::Message> {
    responses::Message::new(http::Status::NotFound, format!("'{}' not found", req.uri()))
}

#[catch(404)]
pub fn post_not_found(req: &Request) -> Json<responses::Message> {
    responses::Message::new(
        http::Status::NotFound,
        format!(
            "Post {} not found",
            req.uri().to_string().split('/').last().unwrap()
        ),
    )
}

#[catch(500)]
pub fn internal_error() -> Json<responses::Message> {
    responses::Message::new(
        http::Status::InternalServerError,
        "ALL IS BROKEN, PLEASE CONTACT FBI".to_string(),
    )
}
