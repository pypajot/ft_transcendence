FROM node:bookworm

COPY backend backend
COPY frontend frontend
COPY .env backend
COPY .env frontend
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh

RUN npm install --prefix backend
RUN npm install --prefix frontend
RUN npm run build --prefix backend
RUN npm run build --prefix frontend

CMD npm run start:prod --prefix backend
ENTRYPOINT /bin/docker-entrypoint.sh