from __future__ import print_function
import time
import private_instagram_sdk
from private_instagram_sdk.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = private_instagram_sdk.AuthApi(private_instagram_sdk.ApiClient())
username = 'username'  # str | the username (or nickname)  (optional)
password = 'password'  # str | the password to use for authentication  (optional)

try:
    # Login user to Instagram
    api_response = api_instance.accounts_login_post(username=username, password=password)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuthApi->accounts_login_post: %s\n" % e)
