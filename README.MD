# IT Logger

# Initial Set up

## React & JSON-Server Setup

```zsh
npx create-react-app .
```

## Install Dev dependencies

```zsh
npm i -D json-server concurrently
```

## Install Materialize

```zsh
npm i materialize-css
```

## Install Moment package and React-Moment

```zsh
npm i moment react-moment
```

## Install redux, react-redux, redux-thunk, redux-devtools-extension

- redux is a state managment library that has nothing to do with React itself.
- we need react-redux to implement Redux in React
- redux-thunk is a piece of middleware for redux, that allows us to make asynchronous functions inside of our actions so that we can wait for responses to come back and then dispatch to our reducer.
- redux-devtools-extension helps us to deal with the code we need for implementing the redux devtools in a cleaner way.

```zsh
npm i redux react-redux redux-thunk redux-devtools-extension
```
