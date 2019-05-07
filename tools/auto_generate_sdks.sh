#!/bin/zsh
cd sdks

# create the python sdk
# cd python
openapi-generator generate -i ../instagram.yaml -g python -o python --config ../configs/python.yaml