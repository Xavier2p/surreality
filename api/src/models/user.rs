use serde::Serialize;

#[derive(Serialize)]
pub struct User {
    id: i32,
    name: String,
    avatar_url: String,
}

impl User {}
