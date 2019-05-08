# Developers only

If you want to contribute to this project there are some things you have to do before start pushing your edits.

Make sure you have on your system this packages/libs/tools:

- git
- NodeJS + npm
- yarn
- Python (v3.7 is suggested but *any* version will be fine)

## Quickstart

1. First you need to `git clone` this repo.
2. After that you need to install some node/npm packages running: `yarn install` inside this folder
3. Now you can start using the package command like `yarn generate` or `yarn viewer`

## Following

### Create a NEW sdk

If you want to create a new sdk using the openapi-generator you need to follow this mini-tutorial:

1. Check the generator you want to use and keep its name in mind (you can find a list here > [OpenAPI Generator - Generators List](https://openapi-generator.tech/docs/generators))
2. Create a new config inside the *./configs* folder including the options from the command `openapi-generator config-help -g GENERATOR_NAME`
   1. if you want to copy all CONFIG OPTIONS inside the file and then edit it, you can run the command `openapi-generator config-help -g GENERATOR_NAME >> ./configs/GENERATOR_NAME.yaml`
   2. another option is to use the toolkit and the file will be auto-formatted in yaml syntax with `yarn toolkit` and follow the wizard (WIP)