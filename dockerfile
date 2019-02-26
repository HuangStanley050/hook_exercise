FROM node:latest
RUN mkdir /app
WORKDIR /app
EXPOSE 3000
CMD npm install && npm start