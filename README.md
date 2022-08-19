# Deezer React Application

> A React app created with vite, using TS, Tailwindcss, React, Redux; Jest testing
>
> Link: [https://deezer-vite-react.herokuapp.com/](https://deezer-vite-react.herokuapp.com/)
>
> ![badge](https://github.com/manuelgeek/deezer-vite-react-ts/workflows/Lint%20and%20Test%20CI/badge.svg)

## Set up

```bash
# install dependencies
yarn install

# dev command
yarn dev
#or
vite

# testing
yarn test
#or
vitest
# update snapshot
yarn test -u

```

## Tools used

- Vite
- React
- TypeScript
- Vitest for test with jest
- Redux for store
- Tailwindcss
- Eslint
- Prettier
- Husky for pre-commit hooks
- Github actions for CI/CD , Heroku Deploy

## Features done

- Search Artists
- List artis results
- Infinite scroll for searched artists
- Clear search field
- Keep Search Term in store
- Display list of search artists
- Single artist view with fans, top tracks

### Dev

Hosted on heroku through Github Actions, trigger is done on `main` branch for demo purposes, an Ideal development environment will have different dedicated branches

Github actions used for Running Tests and Lints

I've also use pre commit hooks to prevent un formatted code from being pushed upstream

.env file is commited for ease of testing, not ideal in normal developments
