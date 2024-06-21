https://docs.docker.com/engine/security/rootless/
https://blog.jitendrapatro.me/migrating-rootful-docker-containers-to-rootless-docker/#install-packages-and-create-a-rootless-docker-user

https://dev.to/francescoxx/python-crud-rest-api-using-django-postgres-docker-and-docker-compose-4nhe

https://medium.com/@kesaralive/diving-deeper-into-docker-networking-with-docker-compose-737e3b8a3c8c
https://medium.com/@kesaralive/diving-deeper-into-docker-networking-with-docker-compose-737e3b8a3c8c
https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/

### docker cli commands
docker compose down -v
docker compose build --no-cache
docker compose up


https://dragonprogrammer.com/angular-app-production-docker/

  rabbitmq:
    image: 
      rabbitmq:3-management-alpine #image to be pulled from dockerhub during building
    container_name: rabbitmq # container name
    volumes: # assign static storage for rabbitmq to run
      rabbitmq: - ./.docker/rabbitmq/etc/:/etc/rabbitmq/
        - ./.docker/rabbitmq/data/:/var/lib/rabbitmq/
    rabbitmq_logs:  - ./.docker/rabbitmq/logs/:/var/log/rabbitmq/
    environment: # environment variables from the referenced .env file
      RABBITMQ_ERLANG_COOKIE: ${RABBITMQ_ERLANG_COOKIE}
         # auth cretendials
      RABBITMQ_DEFAULT_USER: ${RABBITMQ_DEFAULT_USER} 
      RABBITMQ_DEFAULT_PASS: ${RABBITMQ_DEFAULT_PASS}
    ports: # map external ports to this specific container's internal ports
      - 5672:5672
      - 15672:15672

https://betterstack.com/community/guides/scaling-python/dockerize-django/