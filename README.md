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

## Dev

A contributor can:

- **UPDATE** and **Mantain** the endpoints/params in [*API.md*](/API.md) and in [*instagram.yaml Schema*](/instagram.yaml)
- **ADD** more configs helper to generate more SDKs
- **GENERATE** new and update existing SDKs already released
- **CONTRIBUTE** creating documentations, tools, issues, generators, sdks and more

**Useful resources for endpoints and parameters**

- https://github.com/ping/instagram_private_api/blob/master/COMPAT.md
- https://github.com/ping/instagram_private_api/tree/master/instagram_private_api/endpoints
- https://github.com/mgp25/Instagram-API/blob/master/src/Instagram.php
- https://github.com/dilame/instagram-private-api/tree/master/src


An old version of the public instagram api, as a swagger 2.0 yaml is here:
https://github.com/apiaryio/swagger-zoo/blob/master/fixtures/examples/swagger/instagram.yaml