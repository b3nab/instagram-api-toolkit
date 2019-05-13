# coding: utf-8

"""
    Instagram API

    The Instagram Private API in OpenAPI specs.v3.0  # noqa: E501

    OpenAPI spec version: 0.0.1
    GitHub repo: https://github.com/instagrambot/instagram-api-toolkit
"""

from setuptools import setup, find_packages  # noqa: H301

NAME = "private_instagram_sdk"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.15", "requests", "six >= 1.10", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="Instagram API",
    author_email="",
    url="https://github.com/instagrambot/instagram-api-toolkit",
    keywords=["OpenAPI", "OpenAPI-Generator", "Instagram API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    The Instagram Private API in OpenAPI specs.v3.0  # noqa: E501
    """
)
