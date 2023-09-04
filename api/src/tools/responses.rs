use serde::Serialize;

#[derive(Serialize)]
pub struct Simple {
    pub status: u16,
    pub message: String,
}
