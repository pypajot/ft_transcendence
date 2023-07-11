DB_PATH=./docker_db/docker-compose.yml

db:
	sudo docker compose -f $(DB_PATH) up -d --build --force-recreate