FROM node:14.8.0
ARG name=aula_dev_lab
ENV HOST=0.0.0.0 PORT=8080
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
LABEL version=0.1
RUN npm install
EXPOSE 8080