# Schema Information

## edibles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null

## list_items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
edible_id   | integer   | not null, foreign key (references edibles), indexed
list_id     | integer   | not null, foreign key (references edibles), indexed
rating      | integer   | not null

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
edible_id   | integer   | not null, foreign key (references edibles), indexed
title       | string    | not null

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
stars       | float     | not null
user_id   | integer   | not null, foreign key (references users), indexed, unique [edible_id]
edible_id   | integer   | not null, foreign key (references edibles), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
edible_id   | string    | not null, foreign key (references users), indexed

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## groupings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [group_id]
group_id    | integer   | not null, foreign key (references groups), indexed
title       | string    | not null

## reminders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
list_id     | integer   | not null, foreign key (references edibles), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## categorizations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
edible_id   | integer   | not null, foreign key (references edibles), indexed, unique [category_id]
category_id | integer   | not null, foreign key (references categories), indexed

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
commentable_id  | integer   | not null
commentable_type| string    | not null
body            | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed, unique [edible_id]
edible_id   | integer   | not null, foreign key (references edibles), indexed

## reviews
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
edible_id   | integer   | not null, foreign key (references edibles), indexed

## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed, unique [friend_id]
friend_id       | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
