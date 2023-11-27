# 📦 React Vite Assignment

<div align="center">

![ts](https://img.shields.io/badge/TypeScript%20-%23F7DF1E.svg?logo=typescript&logoColor=white&color=3178C6)
![react](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)
![redux-saga](https://img.shields.io/badge/Redux%20Saga-86D46B?logo=redux%20saga&logoColor=white&color=74C417)
![mui](https://img.shields.io/badge/Material%20UI-007FFF?logo=mui&logoColor=white)

</div>

<div align="center">

[Create React App](https://github.com/facebook/create-react-app)
with [Typescript](https://www.typescriptlang.org/), [Redux Toolkit](https://redux-toolkit.js.org/),
[Redux Saga](https://redux-saga.js.org/), [React Hook Form](https://react-hook-form.com/)
, [React-i18next](https://react.i18next.com/) and [Material UI](https://mui.com/).

</div>

## 🗂 Table of Content

<!-- toc -->

- [About](#about)
  - [Features](#features)
  - [Project Structure](#project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
  - [Lint](#lint)

<!-- tocstop -->

### 🗂 Features

1. [React.js](https://reactjs.org/) with Redux Saga.
2. [Typescript](https://www.typescriptlang.org/) for type safety
3. Core libraries
   - [Redux](https://redux.js.org/)
   - [Redux Toolkit](https://redux-toolkit.js.org/)
   - [Redux Saga](https://redux-saga.js.org/)
   - [Redux First History](https://github.com/salvoravida/redux-first-history)
   - [Redux Logger](https://github.com/LogRocket/redux-logger)
   - [React Router](https://reactrouter.com/)
   - [React Hook Form](https://react-hook-form.com/)
   - [Yup](https://github.com/jquense/yup)
   - [Axios](https://github.com/axios/axios)
   - [React-i18next](https://react.i18next.com/)
   - [MUI - Material UI](https://mui.com/)
   - [Styled Components](https://styled-components.com/)
4. Other tools/libraries
   - [ESLint](https://eslint.org/), [Prettier](https://eslint.org/)
     , [Lint-staged](https://github.com/okonet/lint-staged), [Pretty Quick](https://github.com/azz/pretty-quick)
   - [Husky](https://typicode.github.io/husky/#/)
5. Opinionated folder structure
6. Internationalization for react app using [React-i18next](https://react.i18next.com/)
7. Material UI
8. dummyJSON (https://dummyjson.com/docs/products)

### 🗂 Project Structure

```shell
./src
├── App.tsx # Application entrypoint
├── assets # assets folder contains all the static files (images, fonts, etc).
├── components # shared components
├── config # global configuration, env variables etc.
│   ├── Env.ts
│   └── i18n
├── features
│   ├── feature # 'feature'
│   │   ├── api # API folder contains http service calls
│   │   ├── assets # 'feature' assets folder
│   │   ├── components # 'feature' components
│   │   ├── hooks # 'feature' hooks
│   │   ├── index.ts # entry point for 'feature' public API
│   │   ├── store # 'feature' state stores contains slices, sagas, etc.
│   │   └── types # 'feature' typescript types
│   └── another_feature # 'another_feature'
├── hooks # shared hooks
├── libs # libraries imported or exported that can be used in different projects
│   ├── core
│   └── ui
├── pages  # contains all application pages
├── routes # routes configuration
├──  store # root store and store settings

```

## 👨‍💻 Getting Started

### Prerequisites

<details>
  <summary><a href="https://github.com/nvm-sh/nvm">nvm</a></summary>

```shell
brew install nvm
```

</details>
<details>
  <summary><a href="https://nodejs.org/en/">Node.js v18</a></summary>

```shell
nvm install v18.12.0
```

</details>
<details>
  <summary><a href="https://pnpm.io/">Pnpm</a></summary>

```shell
npm install -g pnpm
```

</details>

</details>
<details>
  <summary><a href="https://www.docker.com/products/docker-desktop/">Docker</a></summary>

```shell
Docker Desktop Download
```

</details>

## ✅ Installation

Requires Node >=14.x

Install NPM packages:

```shell
pnpm install
```

### 🗂 Development

To start the application in the development mode run:

```shell
pnpm dev
```

### 🗂 Build

To build the application for production, run:

```shell
pnpm build
```

### 🗂 Lint

To lint the application run:

```shell
pnpm lint
```

### 🗂 Docker

To docker the application build:

```shell
pnpm docker:prod:build
```

To docker the application start:

```shell
pnpm docker:prod:start
```

To docker the application stop:

```shell
pnpm docker:prod:stop
```
