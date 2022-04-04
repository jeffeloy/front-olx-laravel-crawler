FROM node:16.13.1

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . /app

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]

RUN yarn dev

ENV PORTDOCKER=3000
EXPOSE 3000