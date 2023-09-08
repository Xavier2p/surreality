# FROM rust:latest as builder
# WORKDIR /app
# COPY . .
# RUN cargo build --release

# FROM alpine:latest as base
# WORKDIR /
# COPY --from=builder /app/target/release/surreality-api .

# CMD ["./surreality-api"]


FROM messense/rust-musl-cross:aarch64-musl as builder
WORKDIR /app
COPY . .
RUN cargo build --release --target aarch64-unknown-linux-musl

FROM scratch
COPY --from=builder /app/target/aarch64-unknown-linux-musl/release/surreality-api /surreality-api
ENTRYPOINT ["/surreality-api"]