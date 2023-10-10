db:
	docker compose up -d --build --force-recreate

fclean:
	docker stop $$(docker ps -a -q);
	docker rm $$(docker ps -a -q);
	docker rmi $$(docker images -q);
	docker volume rm $$(docker volume ls -q);
	docker network rm $$(docker network ls -q)
