const express =require("express");
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth-20').Strategy;
const app = express();
passport.use(new GoogleStrategy());
app.get('/',(req,res)=>
{
   res.send({hi:'there'}); 
});
const PORT=process.env.PORT||5000
app.listen(PORT);
//client id1095398301831-v09pnbia5bmjlooqp1eucjj4h7rhuhn9.apps.googleusercontent.com
//client secret:oW5gYvGEkLYvFsmLpOMYVq15