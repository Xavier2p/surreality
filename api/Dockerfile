FROM rust:latest as builder
WORKDIR /app
RUN USER=root cargo new surreality-api

WORKDIR /app/surreality-api
COPY Cargo.toml Cargo.lock ./
RUN cargo build --release

COPY src ./src
RUN cargo install --path .

FROM scratch as base
COPY --from=builder /usr/local/cargo/bin/surreality-api .
EXPOSE 3001

CMD ["./surreality-api"]