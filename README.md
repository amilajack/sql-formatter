# SQL Formatter

This is a simple SQL formatter that handles formatting whitespace and capitalization of keywords. It was built for
two reasons:

- To learn Elm
- To provide a SQL formatter that does not send queries to an unknown server

The main [Elm architecture](https://guide.elm-lang.org/architecture/) for the app is in [App.elm](elm/App.elm) and
the logic for formatting SQL strings is in [SQLFormatter.elm](elm/SQLFormatter.elm).

## Development

### Install

```bash
npm install
$(npm bin)/elm-package install
```

### Run

Run the Webpack dev server:

```bash
npm run dev
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Build for production

```bash
npm run dist
```

## Deployment

Deployment to GitHub pages is automated via Travis CI on builds on the master branch.
