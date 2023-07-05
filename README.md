#INFOS
The interesting part of the NestJS code for the database connection is in these 2 files in ./backend/src/ : app.module.ts and orm.config.ts

#PREREQUIS
- Docker installed
- TypeOrm and pg npm lib have been installed with the command:
npm install @nestjs/typeorm typeorm pg

- Add an .env file in the ./docker_db/ directory with the necessary variables defined

#RUN
- in the ./docker_db dir, run :
docker volume create postgres
docker-compose up -d

- in the ./backend dir, run :
npm run start:dev

If there are no errors the backend is connected to the database successfully.