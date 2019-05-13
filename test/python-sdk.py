from __future__ import print_function
import time
import hmac
import json
import hashlib
import uuid as uuid_library
import six.moves.urllib as urllib
import private_instagram_sdk
from private_instagram_sdk.rest import ApiException
from private_instagram_sdk.api_client import ApiClient
from pprint import pprint

USERNAME, PASSWORD = 'username', 'password'
IG_SIG_KEY = '99e16edcca71d7c1f3fd74d447f6281bd5253a623000a55ed0b60014467a53b1'

def hex_digest(*args):
    m = hashlib.md5()
    m.update(b''.join([arg.encode('utf-8') for arg in args]))
    return m.hexdigest()

def generate_device_id(seed):
    volatile_seed = "12345"  # Important ! :) :)
    m = hashlib.md5()
    m.update(seed.encode('utf-8') + volatile_seed.encode('utf-8'))
    return 'android-' + m.hexdigest()[:16]

phone_id = str(uuid_library.uuid4())
uuid = str(uuid_library.uuid4())
device_id = generate_device_id(hex_digest(USERNAME, USERNAME))
data = json.dumps({
    'phone_id': phone_id,
    'device_id': device_id,
    'guid': uuid,
    'username': USERNAME,
    'password': PASSWORD,
})

DEVICE = {
    'instagram_version': '26.0.0.10.86',
    'android_version': 24,
    'android_release': '7.0',
    'dpi': '640dpi',
    'resolution': '1440x2560',
    'manufacturer': 'HUAWEI',
    'device': 'LON-L29',
    'model': 'HWLON',
    'cpu': 'hi3660'
}

USER_AGENT_BASE = (
    'Instagram {instagram_version} '
    'Android ({android_version}/{android_release}; '
    '{dpi}; {resolution}; {manufacturer}; '
    '{device}; {model}; {cpu}; en_US)'
)

user_agent = USER_AGENT_BASE.format(**DEVICE)  # just insert params

# create an instance of the API class and add User-Agent
api_client = private_instagram_sdk.ApiClient()
api_client.user_agent = user_agent

ig_auth = private_instagram_sdk.AuthApi(api_client)
ig_users = private_instagram_sdk.UserApi(api_client)

ig_sig_key_version = 4  # int |  (optional)
signed_body = hmac.new(IG_SIG_KEY.encode('utf-8'), data.encode('utf-8'), hashlib.sha256).hexdigest() + '.' + urllib.parse.quote(data)  # str |  (optional)

print('user-agent:\n', user_agent)
body = 'ig_sig_key_version=4&signed_body={body}'.format(body=signed_body)
print('body:\n', body)

try:
    # Login user to Instagram
    api_response = ig_auth.login(body)
    r = api_response
    # pprint(api_response)
    # print('Request sent from session is: ', r.request)
    # print('url: ', r.request.url)
    # # print('headers: ', r.request.headers)
    # print('body: ', r.request.body)

    # print('Response from session is: ', r)
    # print('url: ', r.url)
    # print('status_code: ', r.status_code)
    # # print('headers: ', r.headers)
    # print('text: ', r.text)
    # # print('cookies: ', r.cookies)

    logged_in_user = r.json()
    print(type(logged_in_user))
    print(logged_in_user)
    # if logged_in_user['logged_in_user']:
    #     print('logged_in_user!')
    # if logged_in_user['logged_in_user']['pk']:
    #     print('WE HAVE PK for current User!')
    me_id = logged_in_user['logged_in_user']['pk']
    print('me_id: {}'.format(me_id))
    # get me (current logged in user)
    me = ig_users.getUser(me_id)
    # print('Request sent from session is: ', me.request)
    # print('url: ', me.request.url)
    # print('headers: ', me.request.headers)
    # print('body: ', me.request.body)

    print('Response from session is: ', r)
    print('url: ', me.url)
    print('status_code: ', me.status_code)
    print('headers: ', me.headers)
    print('text: ', me.text)
    print('cookies: ', me.cookies)
    
except Exception as e:
        print("Exception bad thing: %s\n" % e)
