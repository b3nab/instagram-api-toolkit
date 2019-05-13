# coding: utf-8

# flake8: noqa

"""
    Instagram API

    The Instagram Private API in OpenAPI specs.v3.0  # noqa: E501

    OpenAPI spec version: 0.0.1
    GitHub repo: https://github.com/instagrambot/instagram-api-toolkit
"""

from __future__ import absolute_import

__version__ = "1.0.0"

# import apis into sdk package
from private_instagram_sdk.api.Auth import AuthApi
from private_instagram_sdk.api.User import UserApi
# import ApiClient
from private_instagram_sdk.api_client import ApiClient
from private_instagram_sdk.configuration import Configuration
from private_instagram_sdk.exceptions import OpenApiException
from private_instagram_sdk.exceptions import ApiTypeError
from private_instagram_sdk.exceptions import ApiValueError
from private_instagram_sdk.exceptions import ApiKeyError
from private_instagram_sdk.exceptions import ApiException
# import models into model package
from private_instagram_sdk.models.User import User
from private_instagram_sdk.models.Error import Error
from private_instagram_sdk.models.JsonObject import JsonObject
from private_instagram_sdk.models.AuthBody import AuthBody
