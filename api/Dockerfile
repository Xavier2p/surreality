FROM rust:1-alpine3.18 as builder
WORKDIR /usr/src/app
COPY . .
RUN cargo install --path .

FROM alpine:3.18
COPY --from=builder /usr/local/cargo/bin/api /usr/local/bin/api
CMD ["api"]
