![Blogasaurus-logo](https://raw.githubusercontent.com/BattleOfPlassey/blogasaurus/master/static/img/blogasaurus_dark.svg)

[![Build Status](https://github.com/BattleOfPlassey/blogasaurus/actions/workflows/deploy.yml/badge.svg)](https://github.com/BattleOfPlassey/blogasaurus/actions/workflows/deploy.yml)
### [Link](https://blog.palashsh.me)

## Features
- Personal blog built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
- Hosted on [GitHub pages](https://blog.palashsh.me)
- CI/CD using [GitHub Actions](https://github.com/BattleOfPlassey/blogasaurus/actions)
- [Algolia](https://www.algolia.com/) for search.
- Content Management by [TinaCMS](https://tina.io/docs)

## Search Index Rebuild
```
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```

## WIP 🚧
- Email news-letter.
