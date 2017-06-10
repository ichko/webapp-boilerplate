# WebApp Boilerplate
Express api and vue.js front-end in separate docker containers.

Usage
```
cd api
npm install
cd ../client
npm install
cd ..

docker-compose up
```

Stop all docker containers
```
docker stop $(docker ps -aq)
```