# Application base prototype for a Backbone.js app, Node.js/Sinatra backend and MongoDB

This is a base prototype demo for setting up an infrastructure for a Backbone.js application, with a Node.js or Sinatra backend API talking to MongoDB


## USAGE

#### Building the Backbone.js application

To combine source javascript and CSS files into single application files, as well as copy assets to the target directory for web server to serve them, from application root run:

    rake build


#### Starting Sinatra backend

To start Sinatra backend app, from repository root run:

    rake server

Visit the webserver at:

    http://localhost:9292

_NOTE: Sinatra backend currently has no working API code_

#### Starting Node.js backend

Before the first run after cloning the repo, there's a need to symlink 'public' folder from node's root, and set up MongoDB.

From application's directory in console, type the following:

	cd node
	ln -s ../public public

Then open `node/data/_dbConfig.js` in the text editor and fill in the database credentials. You may grab a free cloud instance of MongoDB for testing at http://www.mongolab.com/ or http://www.mongohq.com/

To start Node.js backend app, open the console, and from '/node' directory run:

    node app.js

Visit the webserver at:

    http://localhost:3000

