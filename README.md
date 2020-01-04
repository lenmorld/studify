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

## Start UI server (webpack-dev-server)

```bash
$ npm run install # do this once
$ npm run dev
```

# API v1

## Cards

Fields in db/payload:

```
{
    question: text,
    answer: text
}
```


| Verb | Path | Payload | Description |
| ---- | ---- | --------| ------------|
| GET | `/cards` | - | Get all cards |
| GET | `/cards/:id` | - | Get one card specified by id |
| POST | `/cards` | payload above | Creates a new card |
| PUT | `/cards/:id` | payload above | Updates an exisiting card specified by id, with given payload |
| DELETE | `/cards/:id` | - | Delete an existing card specified by id |

# UI V1

- Webpack 4 with dev server for hot-reloading
- Babel 7 with react presets

Rails views and layouts can include React app directly
as long as it is mounted in a div that exists in the `.erb`
and a webpack entry in `webpack.config.js` covers the `jsx`

### Current webpack setup

- source:  `public/javascript/index.js` as the entry
- output: `dist/bundle.js`

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
