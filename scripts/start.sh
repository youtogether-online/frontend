#!/bin/bash

cd /app
# Inject environment variables to index.html
./import-meta-env-alpine -x .env.sample -p index.html || exit 1

nginx