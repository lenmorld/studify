<<<<<<< HEAD
# React boilerplate with webpack dev server

## Dev

```
$ npm install
$ npm run dev
```

> `webpack-dev-server` runs on 4001 with  hot-reloading

## Deploy

```
$ npm install
$ npm run build
```

> builds `bundle.js`

## Components

- webpack 4
- babel 7 with react preset

## Nice-to-haves

- [Cheap source maps](https://lennythedev.com/webpack/prettify_devtools/)
=======
# Studify

a Rails app for studying

# README

This README would normally document whatever steps are necessary to get the
application up and running.

# Dev Setup

## Create and init. database

```
$ bin/rails db:migrate
$ bin/rails db:seed
```

## Start server

```
$ bin/rails server
```

# API v1

## Cards

Fields in db/payload:

{
    question: text,
    answer: text
}


| Verb | Path | Payload | Description |
| ---- | ---- | --------| ------------|
| GET | `/cards` | - | Get all cards |
| GET | `/cards/:id` | - | Get one card specified by id |
| POST | `/cards` | payload above | Creates a new card |
| PUT | `/cards/:id` | payload above | Updates an exisiting card specified by id, with given payload |
| DELETE | `/cards/:id` | - | Delete an existing card specified by id |


# Rails info

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
>>>>>>> eb4950f6635e3e0d3f18c41f3ba597779ccc5a98
