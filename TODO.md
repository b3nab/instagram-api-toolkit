# TODO

The main plan is to create the schema and extend it or update it in future time then release sdk/client-api packages for supported languages.

## PLAN

### A. The Schema

1. API.md
   1. [x] list all endpoints
   2. [ ] list all method for endpoints (add a simple GET, POST, DELETE, PUT near the endpoint)
   3. [ ] list all parameters used in endpoints
2. instagram.yaml
   1. [ ] set correct server url
   2. [ ] reference parameters to parameters.yaml
   3. [ ] setup `security` for login user to instagram and get token
   4. [ ] add all endpoints in form:

  > GET

      ```yaml
        /path/of/thing:
          get:
            parameters: $ref '#/parameters.yaml#thing-id'
      ```
  > POST

    ```yaml
    /path/of/thing:
      post:
        parameters: $ref '#/parameters.yaml#thing-id'
    ```

### B. The SDK(s)

  1. [ ] explore all the generators avaible from openapi-generators.tech
  2. [ ] deploy the first auto-generated sdk for the instagram private api
  3. [ ] test the beta python package

### C. Enjoy

  > It speaks for itself