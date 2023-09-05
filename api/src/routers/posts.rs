use crate::models::post::Post;
use crate::responses;
use rocket::{get, http, serde::json::Json};

fn generate_post(id: i32) -> Post {
    Post {
        id,
        title: "Title of the post".to_string(),
        description: "description of the post".to_string(),
        image_url: "url of image".to_string(),
        posted_at: "date of posting".to_string(),
        likes: 0,
        hidden: false,
        author: "me".to_string(),
    }
}

#[get("/<id>")]
pub async fn get_one(id: i32) -> Result<Json<responses::Data<Post>>, http::Status> {
    if id < 10 {
        Err(http::Status::NotFound)
    } else {
        let post: Post = generate_post(id);

        let response: responses::Data<Post> = responses::Data {
            status: http::Status::Ok.code,
            message: "Post found".to_string(),
            data: post,
        };

        Ok(Json(response))
    }
}

#[get("/")]
pub async fn get_all() -> Result<Json<responses::Data<Vec<Post>>>, http::Status> {
    let mut posts: Vec<Post> = Vec::new();

    for i in 0..10 {
        posts.push(generate_post(i));
    }

    let response: responses::Data<Vec<Post>> = responses::Data {
        status: http::Status::Ok.code,
        message: "Posts found".to_string(),
        data: posts,
    };

    Ok(Json(response))
}
