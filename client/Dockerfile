FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "servve", "--watch" "--poll",  "500" "--disable-host-check", "--host", "0.0.0.0"]