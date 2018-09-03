# Test Code

Test.js include native Javascripts methods and their performance..

and rest of code is for node 10.9.0 for worker_threads



# Node.js learning Path And Resources..

1.  Node.js Basic:
    The Net Ninja Tutorial. 

      https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

      Good for understanding basic of Node.js.

2. Node.js Api Documentation.
https://nodejs.org/dist/latest-v10.x/docs/api/

3. Node.js with express. 
https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp

4. Dont block event loop or worker queue. 

https://nodejs.org/en/docs/guides/dont-block-the-event-loop/


5. IDE 
   Visual Studio Code 
   
6. Must Learn Concepts. 

     a. ES6.
  
    b. Callbacks, Async await, Promises. 
  
     c. JSON.
  
     d. Web Servers and HTTP. 
  
     e. Package Managers like NPM and YARN. 
      
      f. Concept of ASYNC programming, Event loop Etc. 
  
     g. LoDash, Axios Library. 
  
     h. Basic Routing Via Node.js and then Express.js. 
  
     i. Socket.io for real time communication. 
  
     j. Streaming Files, Buffers. 
  
     k. Why error First Callbacks. 
  
     l. Cookies, Sessions, REST API, JWT, Authenticaion types.
  
  
7. Express.js Common Modules. 
    var createError = require('http-errors');  //For Logging Errors
    
    var path = require('path');  // To make handling Paths Easy.
    
    var cookieParser = require('cookie-parser'); // To read, edit, delete and modify Cookies.
    
    var logger = require('morgan'); // HTTP request logger middleware for node.js
    
    var session = require('express-session'); // Handeling Sessions.
    
    var passport = require('passport'); // NPM module For Authentication
    
    var localStrategy = require('passport-local').Strategy; // Part of Passport module.
    
    var multer = require('multer'); // Handeling File Uploads.
    
    var flash = require('connect-flash'); // For Displaying Flash Messages.
    
    var mongo= require('mongodb'); // MongoDB
    
    var mongoose = require('mongoose'); // NPM package For MongoDB
    
    var db = mongoose.connection;
    
    var expressValidator=require('express-validator'); // For Validation like email, PhoneNumber etc.
    
   
