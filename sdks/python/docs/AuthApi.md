# private_instagram_sdk.AuthApi

All URIs are relative to *https://i.instagram.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_login_post**](AuthApi.md#accounts_login_post) | **POST** /accounts/login | Login user to Instagram


# **accounts_login_post**
> InlineResponse200 accounts_login_post(ig_sig_key_version=ig_sig_key_version, signed_body=signed_body)

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
ig_sig_key_version = 56 # int |  (optional)
signed_body = 'signed_body_example' # str |  (optional)

try:
    # Login user to Instagram
    api_response = api_instance.accounts_login_post(ig_sig_key_version=ig_sig_key_version, signed_body=signed_body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuthApi->accounts_login_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ig_sig_key_version** | **int**|  | [optional] 
 **signed_body** | **str**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

