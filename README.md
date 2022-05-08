# full stack template

Full stack template with:

- Docker
- Django
- Django ninja
- Postgres
- Vue2
- axios
- Travis CI
- Traefik

## Table of Contents

- [Structure](#structure)
- [Setup for development](#setup-for-development)
- [Setup for deployment](#setup-for-deployment)

## Structure

This project consists of 4 main containers:

- **backend** - api built with django and django-ninja.
- **db** - postgreSQL database container.
- **pgadmin** - admin panel for postgreSQL.
- **frontend** - frontend application built with Vue2 and axios.

## Setup for development

build and run for development

```bash
docker-compose up -d --build
```

- the api server will be available in http://localhost:8000
- the frontend application will be available in http://localhost:8080

## Setup for deployment

1 - Setup traefik - follow this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04)

2 - edit `docker-compose.prod.yml` traefik domain settings with your domain(s).

3 - add `.env` file in the main directory (copy from .env.dev)
4 - build and run for production

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```
