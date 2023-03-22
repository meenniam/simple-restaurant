# Getting started

- first of all, running docker container start.

`docker-compose up -d`

please waiting it to pull and create docker image for a while at the firs time.

- after finished, please exec into container to run php command.

`docker-compose exec -u root app bash`

- please create .env by copy from .env.example.
Note that don't forget to put your google api key at GOOGLE_MAP_API_KEY in the .env file. 

- after that please running these commands below.

`
composer install
`

`
php artisan key:generate
`

when you've done, please type `exit` to exit container.

- after that please install dependencies using

`npm install`

- to run vue while development

`npm run watch`


I was using node version 14.18.0 while development.
