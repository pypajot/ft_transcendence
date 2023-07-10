#INFOS
The interesting part of the NestJS code for the database connection is in these 2 files in ./backend/src/ : app.module.ts and orm.config.ts

#PREREQUIS
- Docker installed
- TypeOrm and pg npm lib have been installed with the command:
npm install @nestjs/typeorm typeorm pg

- Add an .env file in the ./docker_db/ directory with the necessary variables defined

#RUN
- in the ./docker_db dir, run :
`docker volume create postgres`
`docker-compose up -d`

- in the ./backend dir, run :
`npm install`
`npm run start:dev`

- in the ./frontend dir, run :
`npm install`
`npm run start`

Check :
`localhost:8000/message` : you should see {message: "Hello World!"} from server.

`localhost:3000` : you should see "Hello World!", fetched by client from server.