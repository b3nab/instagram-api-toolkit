# private_instagram_sdk.AuthApi

All URIs are relative to *https://i.instagram.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_login_post**](AuthApi.md#accounts_login_post) | **POST** /accounts/login | Login user to Instagram


# **accounts_login_post**
> User accounts_login_post()

Login user to Instagram

Login to Instagram with username/password

### Example

```python
from __future__ import print_function
import time
import private_instagram_sdk
from private_instagram_sdk.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = private_instagram_sdk.AuthApi()

try:
    # Login user to Instagram
    api_response = api_instance.accounts_login_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuthApi->accounts_login_post: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

