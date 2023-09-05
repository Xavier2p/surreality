use crate::models::user::User;
use serde::Serialize;

#[derive(Serialize)]
pub struct Comment {
    id: i32,
    post_id: i32,
    comment: String,
    posted_at: String,
    author: User,
}

impl Comment {}
