# Blogasaurus

- This blog is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
- Content is managed by [forestry.io](https://forestry.io/), a Git-backed CMS (content management system) for websites.
- Hosted on [GitHub pages](https://blog.palashsh.me)

## Installation

```console
git clone git@github.com:BattleOfPlassey/blogasaurus.git
cd <repo_name>
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

### For windows
``` 
cmd /C "set "GIT_USER=battleofplassey" && yarn deploy"
```
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
