FROM node:12-alpine
WORKDIR /opt/app
RUN apk update && apk add bash
COPY wait-for-it.sh wait-for-it.sh
EXPOSE 3000