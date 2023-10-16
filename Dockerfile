FROM node:bookworm

COPY backend backend
COPY frontend frontend
COPY .env backend
COPY .env frontend
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh

RUN apt update -y
RUN apt install vim iputils-ping -y

RUN npm install --prefix backend
RUN npm install --prefix frontend
RUN npx prisma generate

RUN npm run build --prefix backend
RUN npm run build --prefix frontend

CMD npm run start:prod --prefix backend

ENTRYPOINT /bin/docker-entrypoint.sh
