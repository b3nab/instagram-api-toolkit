# Developers only (contributors)

## Contribute to this project

If you want to contribute to this (**huge**) project, you can:

- **UPDATE** and **Mantain** the endpoints/params in [*API.md*](/API.md) and in [*api/instagram.yaml* schema](/api/instagram.yaml)
- **ADD** more configs helper to generate more SDKs
- **GENERATE** new and update existing SDKs already released
- **CONTRIBUTE** creating documentations, tools, issues, generators, sdks and more

---

## Prepare your environment

If you want to contribute to this project there are some things you have to do before start pushing your commits.

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

### toolkit

If you run the `toolkit` automatically will start a wizard that will help contributors from the creation of a new configuration files to the code generation of a new sdk, just run the command:

```sh
yarn toolkit
```

### Create a NEW sdk -- ^^ use the `toolkit` instead ^^

If you want to create a new sdk using the openapi-codegen you need to follow this mini-tutorial:

1. Create a new config inside the *./generators* folder with command `openapi-generator config-help -g GENERATOR_NAME`
   1. if you want to copy all CONFIG OPTIONS inside the file and then edit it, you can run the command `openapi-generator config-help -g GENERATOR_NAME >> ./configs/GENERATOR_NAME.yaml`
   2. another option is to use the toolkit and the file will be auto-formatted in yaml syntax with `yarn toolkit` and follow the wizard (WIP)

If you want to create a new sdk using the openapi-generator you need to follow this mini-tutorial:

1. Check the generator you want to use and keep its name in mind (you can find a list here > [OpenAPI Generator - Generators List](https://openapi-generator.tech/docs/generators))
2. Create a new config inside the *./configs* folder including the options from the command `openapi-generator config-help -g GENERATOR_NAME`
   1. if you want to copy all CONFIG OPTIONS inside the file and then edit it, you can run the command `openapi-generator config-help -g GENERATOR_NAME >> ./configs/GENERATOR_NAME.yaml`
   2. another option is to use the toolkit and the file will be auto-formatted in yaml syntax with `yarn toolkit` and follow the wizard (WIP)

---

## Resources

### **Useful resources for endpoints and parameters**

- https://github.com/ping/instagram_private_api/blob/master/COMPAT.md
- https://github.com/ping/instagram_private_api/tree/master/instagram_private_api/endpoints
- https://github.com/mgp25/Instagram-API/blob/master/src/Instagram.php
- https://github.com/dilame/instagram-private-api/tree/master/src

### **OLD** swagger 2.0 version of the public instagram api

An old version of the public instagram api, as a swagger 2.0 yaml is here:
https://github.com/apiaryio/swagger-zoo/blob/master/fixtures/examples/swagger/instagram.yaml