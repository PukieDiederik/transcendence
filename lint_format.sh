#!/bin/sh

npm run lint --prefix ./backend
npm run format --prefix ./backend

npm run lint --prefix ./frontend
npm run format --prefix ./frontend