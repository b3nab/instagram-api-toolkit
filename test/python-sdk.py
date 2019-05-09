from __future__ import print_function
import time
import hmac
import json
import hashlib
import uuid as uuid_library
import six.moves.urllib as urllib
import private_instagram_sdk
from private_instagram_sdk.rest import ApiException
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

# create an instance of the API class
api_instance = private_instagram_sdk.AuthApi(private_instagram_sdk.ApiClient())
# user_agent = 'user_agent_example'  # str | the User-Agent used by the Instagram App (be carefull in generation of a new one) 
ig_sig_key_version = 4  # int |  (optional)
signed_body = hmac.new(IG_SIG_KEY.encode('utf-8'), data.encode('utf-8'), hashlib.sha256).hexdigest() + '.' + urllib.parse.quote(data)  # str |  (optional)

try:
    # Login user to Instagram
    api_response = api_instance.accounts_login_post(user_agent, ig_sig_key_version=ig_sig_key_version, signed_body=signed_body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuthApi->accounts_login_post: %s\n" % e)
