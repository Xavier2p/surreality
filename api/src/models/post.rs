// use crate::models::{comment::Comment, exif::Exif, user::User};
use serde::Serialize;

#[derive(Serialize)]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub description: String,
    // pub exif: Exif,
    pub image_url: String,
    pub posted_at: String,
    pub likes: i32,
    // pub comments: Vec<Comment>,
    // pub author: User,
    pub hidden: bool,
    pub author: String,
}

#[allow(dead_code)]
impl Post {
    fn add_like(&mut self) {
        self.likes += 1;
    }

    fn remove_like(&mut self) {
        self.likes -= 1;
    }

    fn toggle_hide(&mut self) {
        self.hidden = !self.hidden;
    }

    // fn add_comment(&mut self, comment: Comment) {
    // self.comments.push(comment);
    // }
}
