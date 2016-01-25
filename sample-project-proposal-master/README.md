# GoodEats

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

GoodEats is a web application inspired by GoodReads built using Ruby on Rails
and React.js. GoodEats allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete edibles
- [ ] Rate and review edibles
- [ ] Organize edibles within lists
- [ ] Tag edibles with multiple category tags and search edibles by category
- [ ] Friend other users
- [ ] View a newsfeed of their friends' recent activity
- [ ] Join groups based on interest
- [ ] Get recommendations based on their favorite edibles

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, edible Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt), including the option to sign in through Facebook. There will be a basic 
landing page after signup that will contain the container for the application's 
root React component. Before building out the front end, I will begin by setting 
up a full JSON API for edibles.

[Details][phase-one]

### Phase 2: Flux Architecture and edible CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a edible store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the edibles `Index`, `IndexItem` and `Form`. At the end of Phase 2,
edibles can be created, read, edited and destroyed in the browser. edibles should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Lists, Groups, and Categories/Likes/Ratings/Comments (3 days)

Phase 3 adds organization to the edibles. Edibles belong to a list, which has
its own `Index` view. Create JSON API for lists. Users can join a group, which
can be found on the groups `Index` view and which has its `IndexItem` view
Edibles can also now be tagged with multiple categories. Users can bring up edibles 
in a separate `SearchIndex` view by searching for their category tags. Once the tag search 
is implemented, I will extend this to a fuzzy search through every edible's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in edibles (1 day)

Using the react-quill library (based on Quill.js), allow for complex styling of
edibles.

[Details][phase-four]

### Phase 5: Reminders (1 day)

Phase 5 introduces two new features. First, users can set reminders on edibles
which will at the time they are set for prompt the user to review and edit the
given edible.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the edibleForm).

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for edibles
- [ ] Pagination / infinite scroll for edibles Index
- [ ] Multiple sessions
- [ ] Users can take eating challenges and record their progress

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
