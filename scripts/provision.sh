#!/bin/bash


printf "\nInstalling composer dependencies\n\n"

docker compose exec php php -d memory_limit=-1 /usr/bin/composer install

printf "\nRunning database migrations\n\n"

docker compose exec php php artisan migrate:fresh
docker compose exec php php artisan db:seed

printf "\nCompleted database setup\n\n"
