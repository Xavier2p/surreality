use crate::responses;
use rocket::{http, serde::json::Json, Request};

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
