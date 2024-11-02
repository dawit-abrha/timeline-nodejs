const { name } = require("ejs");

const homePage = (req, res) => {
let usersObj = [
   {
      name : "Michael Choi",
      createdAt : "January 15th 2013",
      message : "This is my message This is my message This is my message This is my message"
   },
   {
      name : "Michael Choi",
      createdAt : "January 23rd 2013",
      message : "This is my message This is my message This is my message This is my message"
   },
   {
      name : "Michael Choi",
      createdAt : "January 15th 2013",
      message : "This is my message This is my message This is my message This is my message"
   },
   {
      name : "Michael Choi",
      createdAt : "January 1st 2013",
      message : "This is my message This is my message This is my message This is my message"
   }
   
]

    res.render("homepage",{
      users: usersObj
    }

    )
    };
 const about = (req, res) => {
   let isadmin = true;
    res.render("about",{
      username: req.params.username,
      email: "dawit@gmail.com",
      isadmin: isadmin
    })
   };
 const noPage = (req, res) => {
    res.send("page not found");
   };   



   module.exports ={
    homePage,
    about,
    noPage
   }