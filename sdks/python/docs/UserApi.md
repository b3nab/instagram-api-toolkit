# private_instagram_sdk.UserApi

All URIs are relative to *https://i.instagram.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_self_get**](UserApi.md#users_self_get) | **GET** /users/self | User Profile


# **users_self_get**
> InlineResponse200 users_self_get()

User Profile

The User Profile endpoint returns information about the Instagram user that has authorized with the application.

### Example

```python
from __future__ import print_function
import time
import private_instagram_sdk
from private_instagram_sdk.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = private_instagram_sdk.UserApi()

try:
    # User Profile
    api_response = api_instance.users_self_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->users_self_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

