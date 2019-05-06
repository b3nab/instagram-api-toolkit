# API Endpoints

  ### Upload/configure Media Endpoints ###
    /upload/photo:
    /upload/video:

### Configure Media Endpoints ###
  /media/configure:
    caption:
      type: string
      description: Configure media caption
  
  /media/configure_to_story:
  /media/configure_sidecar:
  /history:
    get:
      tags:
      - User
      summary: User Activity
      description: The User Activity endpoint returns data about a user's lifetime
        activity with Instagram. The response will include pickup locations and times,
        dropoff locations and times, the distance of past requests, and information
        about which products were requested.<br><br>The history array in the response
        will have a maximum length based on the limit parameter. The response value
        count may exceed limit, therefore subsequent API requests may be necessary.
      parameters:
      - name: offset
        in: query
        description: Offset the list of returned results by this amount. Default is
          zero.
        schema:
          type: integer
          format: int32
      - name: limit
        in: query
        description: Number of items to retrieve. Default is 5, maximum is 100.
        schema:
          type: integer
          format: int32
      responses:
        200:
          description: History information for the given user
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Activities'
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'


### account Endpoints ###
  /accounts/
    accounts/change_profile_picture/

### collections ###
    feed/collection/{collection_id!s}/
    collections/{collection_id!s}/edit/
    collections/{collection_id!s}/delete/

### Discover Endpoints ###
    /discover/
    discover/channels_home/
    discover/chaining/
    discover/top_live/
    discover/top_live_status/

### Feed Endpoints ###
    /feed/
    feed/liked/
    feed/timeline/
    feed/popular/
    feed/user/{user_id!s}/
    feed/user/{user_name!s}/username/
    feed/reels_tray/
    feed/user/{user_id!s}/reel_media/
    feed/reels_media/
    feed/tag/{tag!s}/
    feed/user/{user_id!s}/story/
    feed/location/{location_id!s}/
    feed/saved/
    feed/only_me_feed/

### Friendships endpoints ###

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

 ### For endpoints in ``/highlights/`` or related to the highlights feature. ###
    /highlights/
    highlights/{user_id!s}/highlights_tray/
    highlights/create_reel/
    highlights/{highlight_id!s}/edit_reel/
    highlights/{highlight_id!s}/delete_reel/

### For endpoints in ``/igtv/``. ###
    igtv/channel/
    igtv/tv_guide/
    igtv/search/

### For endpoints in ``/live/``. ###
    live/{broadcast_id!s}/like/
    live/{broadcast_id!s}/get_like_count/
    live/{broadcast_id!s}/get_comment/
    live/{broadcast_id!s}/heartbeat_and_get_viewer_count/
    live/{broadcast_id!s}/comment/
    live/{broadcast_id!s}/info/
    live/get_suggested_broadcasts/
    live/{broadcast_id!s}/get_post_live_comments/
    live/{broadcast_id!s}/get_post_live_likes/

### For endpoints related to location functionality. ###
    locations/{location_id!s}/info/
    locations/{location_id!s}/related/
    locations/{location_id!s}/sections/
    locations/{location_id!s}/sections/

### For endpoints in ``/media/``. ###
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

### For miscellaneous functions. ###
    qe/expose/
    direct_v2/ranked_recipients/
    direct_share/recent_recipients/
    news/
    news/inbox/
    oembed/
    language/bulk_translate/
    fbsearch/topsearch/
    
### For endpoints in ``/tags/`` ###
    tags/{tag!s}/info/
    tags/{tag!s}/related/
    tags/search/
    tags/suggested/
    tags/follow/{hashtag!s}/
    tags/unfollow/{hashtag!s}/
    tags/{tag!s}/sections/
    
### For endpoints relating to upload functionality. ###
     upload/video/
     upload/photo/
    
### For endpoints in ``/users/``. ###
    users/self
    users/{user_id!s}/info/
    users/{user_name!s}/usernameinfo/
    users/{user_id!s}/full_detail_info/
    users/search/
    users/check_username/
    users/blocked_list/
    users/reel_settings/
    users/set_reel_settings/

###  For endpoints in ``/usertags/``. ###
    usertags/{user_id!s}/feed/
    usertags/{media_id!s}/remove/