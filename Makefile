SHELL  := /bin/bash
PATH   := node_modules/.bin:$(PATH)
DIST_CMS   := boldr
KNEX_FILE ?= ./packages/boldr-api/config/knexfile.js
TEST_DB ?= POSTGRES_CONN_URI=postgres://postgres:password@localhost:5432/boldr_test
CI_DB ?= POSTGRES_CONN_URI=postgres://ubuntu@127.0.0.1:5432/circle_test

.PHONY: clean

flow:
	./node_modules/.bin/flow check

test-ci:
	NODE_ENV=test CI=true jest -w 2

build-cms:
	npm run build

create-dist:
	mkdir ./boldr/bin && cp bin/boldr.js boldr/bin/ && cp package.json boldr/package.json && cp .env boldr/.env

build: build-cms create-dist

migrate-ci:
	NODE_ENV=test $(CI_DB) ./node_modules/.bin/knex --knexfile $(KNEX_FILE) migrate:latest

migrate-test:
	NODE_ENV=test $(TEST_DB) ./node_modules/.bin/knex --knexfile $(KNEX_FILE) migrate:latest

seed-ci:
	NODE_ENV=test $(CI_DB) ./node_modules/.bin/knex --knexfile $(KNEX_FILE) seed:run

seed-test:
	NODE_ENV=test $(TEST_DB) ./node_modules/.bin/knex --knexfile $(KNEX_FILE) seed:run

setup-db:
	make migrate-ci
	make seed-ci

test-ci:
	NODE_ENV=test BABEL_ENV=test $(CI_DB) TOKEN_SECRET=bbbbaaaasss jest -w 2

test:
	NODE_ENV=test $(TEST_DB) npm run test
