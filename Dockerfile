FROM docker

WORKDIR /root
COPY . .
RUN docker-compose up

EXPOSE 8001
EXPOSE 8002
