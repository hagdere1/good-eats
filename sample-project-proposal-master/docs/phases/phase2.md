# Phase 2: Flux Architecture and Edible CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ListIndex
  - ListIndexItem
* EdibleForm

### Stores
* Edible

### Actions
* ApiActions.receiveAllEdibles -> triggered by ApiUtil
* ApiActions.receiveSingleEdible
* ApiActions.deleteEdible
* EdibleActions.fetchAllEdibles -> triggers ApiUtil
* EdibleActions.fetchSingleEdible 
* EdibleActions.createEdible
* EdibleActions.editEdible
* EdibleActions.destroyEdible

### ApiUtil
* ApiUtil.fetchAllEdibles
* ApiUtil.fetchSingleEdible
* ApiUtil.createEdible
* ApiUtil.editEdible
* ApiUtil.destroyEdible

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
