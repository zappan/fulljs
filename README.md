# Application base prototype for a Backbone.js app, Node.js/Sinatra backend and MongoDB

This is a base prototype demo for setting up an infrastructure for a Backbone.js application, with a Node.js or Sinatra backend API talking to MongoDB

There's a live preview available, running on Node.js backend, at: http://fulljs.nodester.com/


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

#### Configuring Node.js application

Before the first run, there are several configuration steps that need to be done:

##### 1) Symlink 'public' folder from node's root.

From application's directory in console, type the following:

  cd node
  ln -s ../public public

##### 2) Set up MongoDB

Then open (create if missing) `node/data/_db.config` in the text editor and fill in the database credentials, using the following file format:

    var dbConfig = {
            name : "<db-name>"
          , host : "<host-address>"
          , port : <port>
          , user : "<username>"
          , pass : "<password>"
        };

    // exports credentials
    module.exports = { dbConfig : dbConfig }

You may grab a free cloud instance of MongoDB for testing at http://www.mongolab.com/ or http://www.mongohq.com/

##### 3) Install Node.js application dependencies

Before the first run, Node application dependencies have to be installed by running the following from '/node' directory:

    npm install -d

The same procedure is used for future dependencies updates.


#### Starting Node.js backend

To start Node.js backend app, open the console, and from '/node' directory run:

    node app.js

Visit the webserver at:

    http://localhost:3000


## Running Specs

##### Symlink 'public/tests' to Backbone/tests/

From application's directory in console, type the following:

    cd public
    ln -s ../Backbone/tests tests

(The above symlinking will break whenever a repo is pulled from GitHub so it needs to be repeated.)


##### Running Specs

See all specs at:

    http://localhost:3000/tests/SpecRunner.html
