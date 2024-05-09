# Yestoday
Whether it be from yesterday or today, share your captured memories on Yestoday's open-world community where you can interact with other user's visual narratives.

**Link to project:** https://yestoday.cyclic.app

https://github.com/s-magana/yestoday/assets/113574110/6269ae09-61ef-43c1-810b-a5ce87040237

## How It's Made:

**Tech used:** JavaScript, Node.js, Express.js, MongoDB, Passport.js, EJS, CSS, Tailwind

Using the Model-View-Controller (MVC) framework to organize my code, I began this project by first connecting to the database. I then carefully figured out how many models I was going to need in order for each major element of my project to work properly. In this case, I had three models, a user, posts, and comments model. With my models finished, I decided to add authentication with local email login using passport.js as well as set up multer and cloudinary for image upload abilities. Afterwards, I began to build the routes, controllers, and views in that respective order. To finish off, I added sessions and styled everything.

## Optimizations

If I were to improve this app, I would first use React for the front-end. The main reason for this is to avoid the whole page refreshing whenever a post is liked or deleted. Another optimization for the actual app's functionality is to add the feature of being able to visit other user's profiles.  

## Lessons Learned:

At the end of building this project, I was able to learn so many new things. Besides the opportunity to work with new mechanisms like mvc, cloudinary, multer, and passport.js that I can now use whenever needed, I leared the most seeing how the various models connect to one another. By setting up my models in a specific way where each user, post, and comment were given unique id's, I was able to gain vast knowledge in figuring out how to make specific buttons/posts/comments appear only in specific instances. This project in itself has taught me so much more than I could explain.

## Install:
'npm install'

## Things to Add:
- Create an '.env' file in the config folder and add the following as 'key = value'
    - PORT = 1212 (can be any port, for example: 3000)
    - DB_STRING = 'your database URI'
    - CLOUD_NAME = 'your cloudinary cloud name'
    - API_KEY = 'your cloudinary api key'
    - API_SECRET = 'your cloudinary api secret'

## Run:
'npm start'

## Examples:
Take a look at these other examples that I have in my portfolio:

**Overwrapped:** https://github.com/s-magana/overwrapped

**My Chatbot:** https://github.com/s-magana/my-chatbot

**Buy2k:** https://github.com/s-magana/buy2k
