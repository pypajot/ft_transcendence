#!/bin/bash

cd backend
npx prisma migrate dev --name init
npx prisma studio &
exec npm run start:prod
