![Blogasaurus-logo](https://raw.githubusercontent.com/BattleOfPlassey/blogasaurus/master/static/img/blogasaurus_dark.svg)

[![Build Status](https://app.travis-ci.com/BattleOfPlassey/blogasaurus.svg?branch=master)](https://app.travis-ci.com/BattleOfPlassey/blogasaurus)
### [Link](https://blog.palashsh.me)

## Features
- Personal blog built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 
- Content is managed by [forestry.io](https://forestry.io/), a Git-backed CMS (content management system) for websites.
- Hosted on [GitHub pages](https://blog.palashsh.me)
- CI/CD using [Travis CI](https://www.travis-ci.com/)
- [Algolia](https://www.algolia.com/) for search.

## Search Index Rebuild
```
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```

## WIP 🚧
- Email news-letter.
