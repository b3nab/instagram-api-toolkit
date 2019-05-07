# API Endpoints

## Table Example

This is an example of a table of endpoints, use this as a reference.

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /path/to | par1, par2, test | Description for this endpoint explaining the action it does |

  >
    Following there are all endpoints with method and parameters.
    The tables will explain for itself, just read the description to understand what is the endpoint's action it does.

### Upload/configure Media Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **POST** | /upload/photo |  |  |
| **POST** | /upload/video |  |  |

### Configure Media Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **POST** | /media/configure | caption:string, |  |
| **POST** | /media/configure_to_story |  |  |
| **POST** | /media/configure_sidecar |  |  |

### account Endpoints

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /accounts/login | device_id': self.device_id,guid': self.uuid,adid': self.ad_id,phone_id': self.phone_id,_csrftoken': self.csrftoken,username': self.username,password': self.password,login_attempt_count': '0', |  |
| **POST** | /accounts/edit_profile | username': self.authenticated_user_name,gender': int(gender),phone_number': phone_number or '',first_name': first_name or '',biography': biography or '',external_url': external_url or '',email': email, |  |
| **POST** | /accounts/change_profile_picture | photo_data: string of image |  |
| **POST** | /accounts/remove_profile_picture |  |  |
| **POST** | /accounts/current_user |  |  |
| **POST** | /accounts/set_private |  |  |
| **POST** | /accounts/set_public |  |  |
| **POST** | /accounts/logout | phone_id': self.phone_id,_csrftoken': self.csrftoken,guid': self.uuid,device_id': self.device_id,_uuid': self.uuid |  |

### collections

| METHOD | Endpoint | Parameters | Description |
| ------ | -------- | ---------- | --- |
| **GET** | /feed/collection/{collection-id!s}/ |  |  |
| **GET** | /collections/{collection-id!s}/edit |  |  |
| **GET** | /collections/{collection-id!s}/delete |  |  |

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
| **GET** | /feed/tag/{tag!s} |  |  |
| **GET** | /feed/location/{location-id!s} |  |  |
| **GET** | /feed/user/{user-id!s} |  |  |
| **GET** | /feed/user/{user-name!s}/username |  |  |
| **GET** | /feed/user/{user-id!s}/reel_media |  |  |
| **GET** | /feed/user/{user-id!s}/story |  |  |

### Friendships endpoints

    /friendships/
    friendships/autocomplete_user_list
    friendships/{user_id!s}/following/
    friendships/{user_id!s}/following/
    friendships/pending/
    friendships/show/{user_id!s}/
    friendships/show_many/
    friendships/create/{user_id!s}/
    friendships/destroy/{user_id!s}/
    friendships/block/{user_id!s}/
    friendships/unblock/{user_id!s}/
    friendships/block_friend_reel/{user_id!s}/
    friendships/unblock_friend_reel/{user_id!s}/
    friendships/set_reel_block_status/
    friendships/blocked_reels/
    friendships/favorite/{user_id!s}/
    friendships/unfavorite/{user_id!s}/
    friendships/ignore/{user_id!s}/
    friendships/remove_follower/{user_id!s}/

### For endpoints in ``/highlights/`` or related to the highlights feature

    /highlights/
    highlights/{user_id!s}/highlights_tray/
    highlights/create_reel/
    highlights/{highlight_id!s}/edit_reel/
    highlights/{highlight_id!s}/delete_reel/

### For endpoints in ``/igtv/``

    igtv/channel/
    igtv/tv_guide/
    igtv/search/

### For endpoints in ``/live/``

    live/{broadcast_id!s}/like/
    live/{broadcast_id!s}/get_like_count/
    live/{broadcast_id!s}/get_comment/
    live/{broadcast_id!s}/heartbeat_and_get_viewer_count/
    live/{broadcast_id!s}/comment/
    live/{broadcast_id!s}/info/
    live/get_suggested_broadcasts/
    live/{broadcast_id!s}/get_post_live_comments/
    live/{broadcast_id!s}/get_post_live_likes/

### For endpoints related to location functionality

    locations/{location_id!s}/info/
    locations/{location_id!s}/related/
    locations/{location_id!s}/sections/
    locations/{location_id!s}/sections/

### For endpoints in ``/media/``

    media/{media_id!s}/info/
    media/{media_id!s}/infos/
    media/{media_id!s}/permalink/
    media/{media_id!s}/comments/
    media/{media_id!s}/comments/{comment_id!s}/child_comments/
    media/{media_id!s}/comments/{comment_id!s}/inline_child_comments/
    media/{media_id!s}/edit_media/
    media/{media_id!s}/delete/
    media/{media_id!s}/comment/
    media/{media_id!s}/comment/{comment_id!s}/delete/
    media/{media_id!s}/comment/bulk_delete/
    media/{media_id!s}/likers/
    media/{media_id!s}/likers_chrono/
    media/{media_id!s}/like/
    media/{media_id!s}/unlike/
    media/seen/
    media/{comment_id!s}/comment_like/
    media/{comment_id!s}/comment_likers/
    media/{comment_id!s}/comment_unlike/
    media/{media_id!s}/save/
    media/{media_id!s}/unsave/
    media/{media_id!s}/disable_comments/
    media/{media_id!s}/enable_comments/
    media/{media_id!s}/{only_me!s}/
    media/{story_pk!s}/list_reel_media_viewer/

### For miscellaneous functions

    qe/expose/
    direct_v2/ranked_recipients/
    direct_share/recent_recipients/
    news/
    news/inbox/
    oembed/
    language/bulk_translate/
    fbsearch/topsearch/

### For endpoints in ``/tags/``

    tags/{tag!s}/info/
    tags/{tag!s}/related/
    tags/search/
    tags/suggested/
    tags/follow/{hashtag!s}/
    tags/unfollow/{hashtag!s}/
    tags/{tag!s}/sections/

### For endpoints relating to upload functionality

     upload/video/
     upload/photo/

### For endpoints in ``/users/``

    users/self
    users/{user_id!s}/info/
    users/{user_name!s}/usernameinfo/
    users/{user_id!s}/full_detail_info/
    users/search/
    users/check_username/
    users/blocked_list/
    users/reel_settings/
    users/set_reel_settings/

### For endpoints in ``/usertags/``

    usertags/{user_id!s}/feed/
    usertags/{media_id!s}/remove/