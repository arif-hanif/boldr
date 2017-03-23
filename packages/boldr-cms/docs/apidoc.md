# boldr v0.0.0

boldr api documentation

- [Activity](#activity)
	- [List all activities](#list-all-activities)
	
- [AdminGroup](#admingroup)
	- [List statistics](#list-statistics)
	
- [AttachmentGroup](#attachmentgroup)
	- [Delete attachment](#delete-attachment)
	- [List all attachments](#list-all-attachments)
	- [Get specific attachment](#get-specific-attachment)
	- [Update attachment](#update-attachment)
	- [Upload attachment](#upload-attachment)
	
- [AuthGroup](#authgroup)
	- [Authentication check](#authentication-check)
	- [Login](#login)
	- [Signup](#signup)
	- [Verify user](#verify-user)
	
- [Comment](#comment)
	- [Comment Reply](#comment-reply)
	- [Delete comment](#delete-comment)
	- [Edit Comment](#edit-comment)
	
- [MenuDetails](#menudetails)
	- [Create menu detail](#create-menu-detail)
	- [Delete detail](#delete-detail)
	- [List all menu items](#list-all-menu-items)
	- [Get menu detail](#get-menu-detail)
	- [Update menu detail](#update-menu-detail)
	
- [Menu](#menu)
	- [Create menu](#create-menu)
	- [List all menus](#list-all-menus)
	- [Get menu](#get-menu)
	- [Update menu](#update-menu)
	- [Update menu](#update-menu)
	
- [Pages](#pages)
	- [Get all pages](#get-all-pages)
	
- [Post](#post)
	- [Comment on post](#comment-on-post)
	- [Add a tag to the post](#add-a-tag-to-the-post)
	- [Create a new post](#create-a-new-post)
	- [Delete post by id](#delete-post-by-id)
	- [Get post by id](#get-post-by-id)
	- [Get post by slug](#get-post-by-slug)
	- [List all posts](#list-all-posts)
	- [Update post by id](#update-post-by-id)
	
- [Role](#role)
	- [Get specific role](#get-specific-role)
	- [Get users for role](#get-users-for-role)
	- [List all roles](#list-all-roles)
	
- [Settings](#settings)
	- [Add an additional setting](#add-an-additional-setting)
	- [Get a specific setting](#get-a-specific-setting)
	- [Get all settings objects](#get-all-settings-objects)
	- [Update a specific setting](#update-a-specific-setting)
	
- [Tag](#tag)
	- [Create tag](#create-tag)
	- [Delete tag permanently](#delete-tag-permanently)
	- [Get specific tag](#get-specific-tag)
	- [Get related posts from tag id](#get-related-posts-from-tag-id)
	- [Get tag by name with related posts](#get-tag-by-name-with-related-posts)
	- [List all tags](#list-all-tags)
	- [Relate tag to post](#relate-tag-to-post)
	- [Update tag](#update-tag)
	
- [Token](#token)
	- [Send forgot password email](#send-forgot-password-email)
	- [Reset password](#reset-password)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Get user](#get-user)
	- [Get user profile](#get-user-profile)
	- [List all users](#list-all-users)
	- [Update user](#update-user)
	


# Activity

## List all activities

<p>Return all activities from all admin users. Null or undefined values will not be returned.</p>

	GET /activities

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Content-Type			| String			|  <p>Content-Type: application/json</p>							|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

# AdminGroup

## List statistics



	GET /stats


# AttachmentGroup

## Delete attachment



	DELETE /attachments/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## List all attachments



	GET /attachments


### Examples

Example usage:

```
curl -i https://staging.boldr.io/api/v1/attachments
```

## Get specific attachment



	GET /attachments/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| String			|  <p>The attachment's id (uuid)</p>							|

### Examples

Example usage:

```
curl -i https://staging.boldr.io/api/v1/attachments/1
```

## Update attachment



	PUT /attachments/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## Upload attachment



	POST /attachments


# AuthGroup

## Authentication check



	GET /auth/check

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## Login



	POST /auth/login

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer {token}</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User email address</p>							|
| password			| String			|  <p>User password</p>							|

### Success Response

Success-Response:

```

HTTP/1.1 200 OK
Vary: Origin
Access-Control-Allow-Credentials: true
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYjA",
  "user": {
  "id": "1b062e26-df71-48ce-b363-4ae9b966e7a0",
  "email": "admin@boldr.io",
  "first_name": "Joe",
  "last_name": "Gray",
  "username": "Joey",
  "avatar_url": "https://boldr.io/images/unknown-avatar.png",
  "verified": true,
  "role": [{
        "id": 3,
        "name": "Admin",
        "image": null,
        "description": "Complete control over the CMS",
        "created_at": "2016-11-21T19:49:59.653Z",
        "updated_at": "2016-11-21T19:49:59.653Z"
        }]
   }
 }
```
## Signup



	POST /auth/signup


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User email address</p>							|
| password			| String			|  <p>User password</p>							|
| first_name			| String			|  <p>First name of the user</p>							|
| last_name			| String			|  <p>Last name of the user</p>							|
| username			| String			|  <p>The user's display name</p>							|
| avatar_url			| String			|  <p>Url for the user's avatar</p>							|

## Verify user



	GET /auth/verification/:verifToken


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| verification			| String			|  <VerificationToken>							|

# Comment

## Comment Reply



	POST /:id/reply


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| String			|  <p>The id (uuid) of the comment</p>							|

## Delete comment



	DELETE /:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| String			|  <p>The id (uuid) of the comment</p>							|

## Edit Comment



	PUT /:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| String			|  <p>The id (uuid) of the comment</p>							|

# MenuDetails

## Create menu detail



	POST /menu-details

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## Delete detail



	DELETE /menu-details/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the detail</p>							|

## List all menu items



	GET /menu-details


## Get menu detail



	GET /menu-details/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the detail</p>							|

## Update menu detail



	PATCH /menu-details/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the detail</p>							|

# Menu

## Create menu



	POST /menus

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## List all menus



	GET /menus


## Get menu



	GET /menus/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the menu</p>							|

## Update menu



	PATCH /menus/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the link</p>							|

## Update menu



	PUT /menus/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the menu</p>							|

# Pages

## Get all pages



	GET /pages


# Post

## Comment on post



	POST /posts/:id/comments


## Add a tag to the post



	POST /posts/:id


## Create a new post



	POST /posts

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Content-Type			| String			|  <p>Content-Type: application/json</p>							|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| String			|  <p>The title of the post</p>							|
| slug			| String			|  <p>The slug of the post which is the title, normalized for url use.</p>							|
| excerpt			| String			|  <p>A short description or snippet of the post</p>							|
| content			| String			|  <p>The content of the post as html</p>							|
| raw_content			| Object			|  <p>Raw, unprocessed rich content blocks</p>							|
| feature_image			| String			|  <p>The URL for an image to use with the post</p>							|
| background_image			| String			|  <p>The URL for a background image to use in the post</p>							|
| tags			| String[]			|  <p>Array of tag names</p>							|
| published			| Boolean			|  <p>Whether the post is published for public display</p>							|
| meta			| Object			|  <p>Meta data for the post</p>							|
| attachments			| Object			|  <p>Post attachments</p>							|

## Delete post by id



	DELETE /posts/:id


## Get post by id



	GET /posts/:id


## Get post by slug



	GET /posts/slug/:slug

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Content-Type			| String			|  <p>Content-Type: application/json</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| slug			| String			|  <p>The slug of the post</p>							|

## List all posts



	GET /posts

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Content-Type			| String			|  <p>Content-Type: application/json</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| include			| String[]			|  <p>Include related properties of the object. This is an alternative way to fetch a relevant data in a single call. ?include=[relationship]</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|

## Update post by id



	PUT /posts/:id


# Role

## Get specific role



	GET /roles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>the role id</p>							|

## Get users for role



	GET /roles/:id/users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>the role id</p>							|

## List all roles



	GET /roles


# Settings

## Add an additional setting



	POST /settings

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| key			| String			|  <p>The setting's key</p>							|
| value			| String			|  <p>The data related to the setting</p>							|
| description			| String			|  <p>What the setting is for</p>							|

## Get a specific setting



	GET /settings/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the setting requested.</p>							|

## Get all settings objects



	GET /settings


## Update a specific setting



	PUT /settings/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| key			| String			|  <p>The setting's key</p>							|
| value			| String			|  <p>The data related to the setting</p>							|
| description			| String			|  <p>What the setting is for</p>							|

# Tag

## Create tag



	POST /tags

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>{token}</p>							|

## Delete tag permanently



	DELETE /tags/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The tag id</p>							|

## Get specific tag



	GET /tags/:id


## Get related posts from tag id



	GET /tags/posts/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The tag id</p>							|

## Get tag by name with related posts



	GET /tags/:name/posts


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The tag name</p>							|

## List all tags



	GET /tags


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| include			| String			|  <p>Return the posts with tags</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|

## Relate tag to post



	GET /tags/:id/relate/:postid

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The tag id</p>							|
| postid			| String			|  <p>the id (uuid) of the post to relate</p>							|

## Update tag



	PUT /tags/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The tag id</p>							|

# Token

## Send forgot password email



	POST /tokens/forgot-password


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Reset password



	POST /tokens/reset-password/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>New account password</p>							|

# User

## Create user



	POST /users

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email address.</p>							|
| password			| String			|  <p>User's password.</p>							|

## Delete user



	DELETE /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

## Get user



	GET /users/:id


## Get user profile



	GET /users/:username/profile


## List all users



	GET /users


## Update user



	PATCH /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer JSONWEBTOKEN</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			| **optional** <p>User's email.</p>							|
| password			| String			| **optional** <p>User's password.</p>							|


