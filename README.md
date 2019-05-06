# instagram-api-toolkit
Instagram Private API generator toolkit - A single source of truth for generated SDKs

As far as we know, there are 3 main base api for instagram:

. instagram api v1
. instagram api v2
. instagram-facebook graphql

# Goal
The goal is a two-step way:

1. We need to define a schema of the private instagram api using the [OpenAPI Specs](https://github.com/OAI/OpenAPI-Specification)

2. Then we can use this language-agnostic schema to generate automatically an SDK/Client for every language or framework we want (unless we have generators we can create the SDK) using an [OpenAPI Generators](https://openapi-generator.tech/docs/generators)