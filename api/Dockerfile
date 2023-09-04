FROM rust:latest as builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM alpine:latest as base
WORKDIR /
COPY --from=builder /app/target/release/surreality-api .

CMD ["./surreality-api"]