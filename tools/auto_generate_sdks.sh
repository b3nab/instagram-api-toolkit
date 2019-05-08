#!/bin/zsh
cd sdks

# create the python sdk
# cd python
# openapi-generator generate -i ../api/instagram.yaml -g python -o python --config ../configs/python.yaml
openapi-generator generate -i ../instagram-api.bundle.json -g python -o python --config ../configs/python.yaml --skip-validate-spec