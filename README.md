## Fresh start

Run the following `docker-compose up -d`

Run `sh ./scripts/provision.sh`

## To run the dashboard locally

Enter the node container

```
docker-compose exec node /bin/bash 
```

Install the npm dependencies

```
npm install 
```

Start the Vite dev server

```
npm run dev
```

Navigate to the URL below (http we don't have a cert)

<http://localhost/>

The public and secret keys, used to log in, are in the database. It should have one pre-populated for dev

## To run unit tests

Enter the php container

```
docker-compose exec php /bin/bash 
```

Run current unit tests

```
php artisan test
```

## Frontend devs

We are using eslint with several plugins. Please configure your IDE to use our .eslintrc.js file. You should fix all
warning/errors before submitting code for review.

- VS Code - requires this plugin https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- PhpStorm - You just need to configure the settings to look for our eslintrc file.

You can also run eslint from the cli.

Enter the node container

```
docker-compose exec node /bin/bash 
```

Go to the code directory

```
cd /var/www/
```

To see the lint errors

```
npm run lint
```

To see the lint errors and automatically fix what can be fixed

```
npm run lint:fix
```
