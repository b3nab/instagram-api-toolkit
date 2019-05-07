# API Endpoints

## Table Example

This is an example of a table of endpoints, use this as a reference.

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /path/to | par1, par2, test | Description for this endpoint explaining the action it does |

  >
    Following there are all endpoints with method and parameters.
    The tables will explain for itself, just read the description to understand what is the endpoint's action it does.

## Auth Flow and API requests

The auth flow is simple, it will generate a token that you will use in every request done to private api.
Doing a **POST** request to `/api/v1/accounts/login` with its parameters (check the table below, it's the first endpoint).

*Every* request need a modified `Headers`.
Check the file [login.py](https://github.com/reliefs/instagramapi/blob/master/login.py)

### account Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **POST** | /accounts/login | device_id, guid, adid, phone_id, _csrftoken, username, password, login_attempt_count: '0' |  |
| **POST** | /accounts/edit_profile | username, gender: int(gender), phone_number, first_name, biography, external_url, email |  |
| **POST** | /accounts/change_profile_picture | photo_data: string of image |  |
| **POST** | /accounts/remove_profile_picture |  |  |
| **POST** | /accounts/current_user |  |  |
| **POST** | /accounts/set_private |  |  |
| **POST** | /accounts/set_public |  |  |
| **POST** | /accounts/logout | phone_id, _csrftoken, guid, device_id, _uuid |  |

### Upload/configure Media Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **POST** | /upload/photo |  |  |
| **POST** | /upload/video |  |  |

### Configure Media Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **POST** | /media/configure | caption, |  |
| **POST** | /media/configure_to_story |  |  |
| **POST** | /media/configure_sidecar |  |  |

### collections

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /feed/collection/{collection-id}/ |  |  |
| **GET** | /collections/{collection-id}/edit |  |  |
| **GET** | /collections/{collection-id}/delete |  |  |

### Discover Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /discover |  |  |
| **GET** | /discover/channels_home |  |  |
| **GET** | /discover/chaining |  |  |
| **GET** | /discover/top_live |  |  |
| **GET** | /discover/top_live_status |  |  |

### Feed Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /feed |  |  |
| **GET** | /feed/liked |  |  |
| **GET** | /feed/saved |  |  |
| **GET** | /feed/only_me_feed |  |  |
| **GET** | /feed/timeline |  |  |
| **GET** | /feed/popular |  |  |
| **GET** | /feed/reels_tray |  |  |
| **GET** | /feed/reels_media |  |  |
| **GET** | /feed/tag/{tag} |  |  |
| **GET** | /feed/location/{location-id} |  |  |
| **GET** | /feed/user/{user-id} |  |  |
| **GET** | /feed/user/{user-name}/username |  |  |
| **GET** | /feed/user/{user-id}/reel_media |  |  |
| **GET** | /feed/user/{user-id}/story |  |  |

### Friendships endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /friendships |  |  |
| **GET** | /friendships/autocomplete_user_list |  |  |
| **GET** | /friendships/{user-id}/following |  |  |
| **GET** | /friendships/{user-id}/following |  |  |
| **GET** | /friendships/pending |  |  |
| **GET** | /friendships/show/{user-id} |  |  |
| **GET** | /friendships/show_many |  |  |
| **GET** | /friendships/create/{user-id} |  |  |
| **GET** | /friendships/destroy/{user-id} |  |  |
| **GET** | /friendships/block/{user-id} |  |  |
| **GET** | /friendships/unblock/{user-id} |  |  |
| **GET** | /friendships/block_friend_reel/{user-id} |  |  |
| **GET** | /friendships/unblock_friend_reel/{user-id} |  |  |
| **GET** | /friendships/set_reel_block_status |  |  |
| **GET** | /friendships/blocked_reels |  |  |
| **GET** | /friendships/favorite/{user-id} |  |  |
| **GET** | /friendships/unfavorite/{user-id} |  |  |
| **GET** | /friendships/ignore/{user-id} |  |  |
| **GET** | /friendships/remove_follower/{user-id} |  |  |

### For endpoints in ``/highlights/`` or related to the highlights feature

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /highlights |  |  |
| **GET** | /highlights/create_reel |  |  |
| **GET** | /highlights/{user-id}/highlights_tray |  |  |
| **GET** | /highlights/{highlight-id}/edit_reel |  |  |
| **GET** | /highlights/{highlight-id}/delete_reel |  |  |

### For endpoints in ``/igtv/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /igtv/channel |  |  |
| **GET** | /igtv/search |  |  |
| **GET** | /igtv/tv_guide |  |  |

### For endpoints in ``/live/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /live/get_suggested_broadcasts |  |  |
| **GET** | /live/{broadcast-id}/info |  |  |
| **GET** | /live/{broadcast-id}/like |  |  |
| **GET** | /live/{broadcast-id}/comment |  |  |
| **GET** | /live/{broadcast-id}/get_comment |  |  |
| **GET** | /live/{broadcast-id}/get_like_count |  |  |
| **GET** | /live/{broadcast-id}/get_post_live_likes |  |  |
| **GET** | /live/{broadcast-id}/get_post_live_comments |  |  |
| **GET** | /live/{broadcast-id}/heartbeat_and_get_viewer_count |  |  |

### For endpoints related to location functionality

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /locations/{location-id}/info |  |  |
| **GET** | /locations/{location-id}/related |  |  |
| **GET** | /locations/{location-id}/sections |  |  |

### For endpoints in ``/media/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /media/seen |  |  |
| **GET** | /media/{story-pk}/list_reel_media_viewer |  |  |
| **GET** | /media/{comment-id}/comment_like |  |  |
| **GET** | /media/{comment-id}/comment_unlike |  |  |
| **GET** | /media/{comment-id}/comment_likers |  |  |
| **GET** | /media/{media-id}/{only_me} |  |  |
| **GET** | /media/{media-id}/info |  |  |
| **GET** | /media/{media-id}/infos |  |  |
| **GET** | /media/{media-id}/like |  |  |
| **GET** | /media/{media-id}/unlike |  |  |
| **GET** | /media/{media-id}/likers |  |  |
| **GET** | /media/{media-id}/likers_chrono |  |  |
| **GET** | /media/{media-id}/save |  |  |
| **GET** | /media/{media-id}/unsave |  |  |
| **GET** | /media/{media-id}/permalink |  |  |
| **GET** | /media/{media-id}/edit_media |  |  |
| **GET** | /media/{media-id}/delete |  |  |
| **GET** | /media/{media-id}/enable_comments |  |  |
| **GET** | /media/{media-id}/disable_comments |  |  |
| **GET** | /media/{media-id}/comment |  |  |
| **GET** | /media/{media-id}/comment/bulk_delete |  |  |
| **GET** | /media/{media-id}/comment/{comment-id}/child_comments |  |  |
| **GET** | /media/{media-id}/comments |  |  |
| **GET** | /media/{media-id}/comments/{comment-id}/child_comments |  |  |
| **GET** | /media/{media-id}/comments/{comment-id}/inline_child_comments |  |  |

### For miscellaneous functions

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /qe/expose |  |  |
| **GET** | /oembed |  |  |
| **GET** | /news |  |  |
| **GET** | /news/inbox |  |  |
| **GET** | /language/bulk_translate |  |  |
| **GET** | /fbsearch/topsearch |  |  |
| **GET** | /direct_v2/ranked_recipients |  |  |
| **GET** | /direct_share/recent_recipients |  |  |

### For endpoints in ``/tags/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /tags/sarch |  |  |
| **GET** | /tags/suggested |  |  |
| **GET** | /tags/follow/{hashtag} |  |  |
| **GET** | /tags/unfollow/{hashtag} |  |  |
| **GET** | /tags/{tag}/info |  |  |
| **GET** | /tags/{tag}/related |  |  |
| **GET** | /tags/{tag}/sections |  |  |

### For endpoints in ``/users/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /users/self |  |  |
| **GET** | /users/search |  |  |
| **GET** | /users/check_username |  |  |
| **GET** | /users/blocked_list |  |  |
| **GET** | /users/reel_settings |  |  |
| **GET** | /users/set_reel_settings |  |  |
| **GET** | /users/{user-id}/info |  |  |
| **GET** | /users/{user-id}/full_detail_info |  |  |
| **GET** | /users/{user-name}/usernameinfo |  |  |

### For endpoints in ``/usertags/``

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /usertags/{user-id}/feed |  |  |
| **GET** | /usertags/{media-id}/remove |  |  |
