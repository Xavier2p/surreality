use crate::models;
use rocket::{http, serde::json::Json};
use serde::Serialize;

#[derive(Serialize)]
pub struct Post {
    pub data: models::post::Post,
    pub status: u16,
    pub message: String,
}

#[derive(Serialize)]
pub struct Message {
    pub status: u16,
    pub message: String,
}

#[allow(dead_code)]
impl Message {
    pub fn new(status: http::Status, message: String) -> Json<Message> {
        Json(Message {
            status: status.code,
            message,
        })
    }
}

#[derive(Serialize)]
pub struct Data<T> {
    pub data: T,
    pub status: u16,
    pub message: String,
}

#[allow(dead_code)]
impl<T> Data<T> {
    pub fn new(status: http::Status, message: String, data: T) -> Json<Data<T>> {
        Json(Data {
            status: status.code,
            message,
            data,
        })
    }
}
