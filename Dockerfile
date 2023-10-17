FROM node:bookworm

WORKDIR app/
COPY backend backend
COPY frontend frontend
COPY .env backend
COPY .env frontend
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh

RUN apt update -y
RUN apt install vim iputils-ping -y

RUN npm update --prefix backend
RUN npm update --prefix frontend
RUN npx prisma generate

RUN npm run build --prefix backend
RUN npm run build --prefix frontend

CMD npm run start:prod --prefix backend

ENTRYPOINT /bin/docker-entrypoint.sh
