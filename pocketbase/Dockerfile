FROM alpine:latest

ARG PB_VERSION=0.22.13

RUN apk add --no-cache unzip ca-certificates wget

RUN wget -q https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip \
    -O /tmp/pb.zip && \
    unzip /tmp/pb.zip -d /pb/ && \
    rm /tmp/pb.zip

WORKDIR /pb

COPY pb_migrations/ pb_migrations/

EXPOSE 8080

# Use Railway's $PORT if set, otherwise fall back to 8080
CMD /pb/pocketbase serve --http=0.0.0.0:${PORT:-8080} --dir=/pb/pb_data
