use serde::Serialize;

#[derive(Serialize)]
pub struct Exif {
    camera: String,
    lens: String,
    focal_length: String,
    aperture: String,
    shutter_speed: String,
    iso: String,
    date_time: String,
    location: String,
    latitude: f64,
    longitude: f64,
}
