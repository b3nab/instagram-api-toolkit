# coding: utf-8

"""
    Instagram API

    The Instagram Private API in OpenAPI specs.v3.0  # noqa: E501

    OpenAPI spec version: 0.0.1
    GitHub repo: https://github.com/instagrambot/instagram-api-toolkit
"""

from __future__ import absolute_import

import unittest

import private_instagram_sdk
from Error.clsError import Error  # noqa: E501
from private_instagram_sdk.rest import ApiException


class TestError(unittest.TestCase):
    """Error unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testError(self):
        """Test Error"""
        # FIXME: construct object with mandatory attributes with example values
        # model = private_instagram_sdk.models.clsError.Error()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
