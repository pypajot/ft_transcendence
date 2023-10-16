#!/bin/bash

cd backend
npx prisma migrate dev --name init
exec npm run start:prod
