# Phase 3: Lists, Groups, Recommendations, and Categories/Likes/Ratings/Comments (3 days)

## Rails
### Models
* List
* Category
* Categorization
* Like
* Rating
* Review

### Controllers
* Api::ListsController (create, destroy, index, show, update)

### Views
* lists/index.json.jbuilder
* lists/show.json.jbuilder
* groups/index.json.jbuilder
* groups/show.json.jbuilder
* recommendations/index.json.jbuilder
* categories/show.json.jbuilder

## Flux
### Views (React Components)
* ListsIndex
  - ListIndexItem
* ListForm
* SearchIndex

### Stores
* List
* Category
* Recommendation

### Actions
* ApiActions.receiveAllLists -> triggered by ApiUtil
* ApiActions.receiveSingleList
* ApiActions.deleteList
* ListActions.fetchAllLists -> triggers ApiUtil
* ListActions.fetchSingleList
* ListActions.createList
* ListActions.editList
* ListActions.destroyList

### ApiUtil
* ApiUtil.fetchAllLists
* ApiUtil.fetchSingleList
* ApiUtil.createList
* ApiUtil.editList
* ApiUtil.destroyList

## Gems/Libraries
