# instagram-api-toolkit

Instagram Private API generator toolkit - A single source of truth for generated SDKs

As far as we know, there are 3 main base api for instagram:

- instagram api v1
- instagram api v2
- instagram-facebook graphql

## Goal

The goal is a two-step way:

1. We need to define a schema of the private instagram api using the [OpenAPI Specs](https://github.com/OAI/OpenAPI-Specification)

2. Then we can use this language-agnostic schema to generate automatically an SDK/Client for every language or framework we want (unless we have generators we can create the SDK) using an [OpenAPI Generators](https://openapi-generator.tech/docs/generators)

## Contribute to this project

If you want to contribute to this (**huge**) project, you can:

- **UPDATE** and **Mantain** the endpoints/params in [*API.md*](/API.md) and in [*instagram.yaml Schema*](/instagram.yaml)
- **ADD** more configs helper to generate more SDKs
- **GENERATE** new and update existing SDKs already released
- **CONTRIBUTE** creating documentations, tools, issues, generators, sdks and more
