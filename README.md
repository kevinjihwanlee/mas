# mas
más, a scheduling tool for CS students at Northwestern University that offers more than MAS

# how to run?
to run the express backend, `DEBUG=mas:* npm start`  
to run the react frontend, `cd` into client and then `npm start`

# front end
is in the client folder

# how do the two ends talk to each other?
/client/package.json at the "proxy" property, has to match the port that the Express server is running on. as of right now it is "http://localhost:3001" which will change when we host on Heroku
