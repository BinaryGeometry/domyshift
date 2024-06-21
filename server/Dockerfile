# FROM python:3.10

# # Set unbuffered output for python
# ENV PYTHONUNBUFFERED 1

# # Create app directory
# WORKDIR /app

# # Install app dependencies
# COPY requirements.txt .
# RUN pip install -r requirements.txt

# # Bundle app source
# COPY . .

# # Expose port
# EXPOSE 8000

# # # entrypoint to run the django.sh file
# # ENTRYPOINT ["/app/django.sh"]

# FROM ubuntu:bionic
# ARG DEBIAN_FRONTEND=noninteractive
# RUN apt-get update && apt-get -y install \
#     python3 python3-dev python3-dev python3-pip python3-venv python3-wheel \
#     mysql-client libsqlclient-dev libssl-dev default-libmysqlclient-dev

# ARG USER=root
# USER $USER
# RUN python3 -m venv venv
# WORKDIR /app
# COPY requirements.txt requirements.txt
# RUN /venv/bin/pip install -r requirements.txt

# COPY . .
# EXPOSE 5000
# RUN chmod +x /app/start.sh
# ENTRYPOINT ["./start.sh"]

# pull official base image
# FROM python:3.11.4-slim-buster
FROM python:3.10


# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Install system dependencies for psycopg
RUN apt-get update \
    && apt-get -y install build-essential libpq-dev \
    && apt-get clean
    
# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]