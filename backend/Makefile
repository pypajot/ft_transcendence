db:
	sudo docker compose up -d --build --force-recreate

fclean:
	sudo docker stop $$(sudo docker ps -a -q);
	sudo docker rm $$(sudo docker ps -a -q);
	sudo docker rmi $$(sudo docker images -q);
	sudo docker volume rm $$(sudo docker volume ls -q);
	sudo docker network rm $$(sudo docker network ls -q)