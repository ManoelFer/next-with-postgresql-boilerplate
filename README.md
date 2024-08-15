# Boilerplate Next 14 with Postgress connection

This template shows an example of a Next 14 CRUD with the PostgreSQL DBMS using best practices. Give this template a ⭐ if you like it, so you can save it and use it later.

# Notes Manager

The note manager is a very simple project in which you can register, update and delete a note, with a form validator [ZOD](https://zod.dev/?id=introduction), local database [PG](https://www.postgresql.org/download/) and very fast web browsing with [Next 14](https://nextjs.org/blog/next-14). The main focus is to start a project with the structure already defined, with the best practices as soon as possible.

![alt text](https://github.com/ManoelFer/next-with-postgresql-boilerplate/blob/main/readme-files/notes-management-2024-8-15.gif "Web example gif")

### Technologies used

- [ZOD](https://zod.dev/?id=introduction)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Next 14](https://nextjs.org/blog/next-14)
- [Husky](https://typicode.github.io/husky/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Tailwind](https://tailwindcss.com/)

## Before the start

Before you start, make sure you have all this installed and working:

- IDE - I'm using [VSCode](https://code.visualstudio.com/download)
- PostgreSQL - we need to have it installed and connected
- [Node](https://nodejs.org/en/download/package-manager/current) - Version: v20.12.2 or higher

## How to start ✅

Execute the queries in your postgress connection: 
⚠️ If you don't know how to do this, watch the [video](https://www.youtube.com/watch?v=L_2l8XTCPAE)!

```
CREATE DATABASE nexttests;

CREATE TABLE notes(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  note VARCHAR(200) NOT NULL,
  date VARCHAR(12) NOT NULL
);
```

Depois, rode o seguinte comando:

```
Comando 2
```
