const express=require("express");
const path=require ("path");
const hbs=require("hbs");
const app = express();
const port=8000;
const static_path=path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"));  //serching path of public folder::----
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials")
// views handelbar hbs;
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

//making connection for pahe 
app.use(express.static(static_path));


// app.get("/",(req,res)=>{
//     res.send("Hellow connected to home page:--");
// });
//by views handelbar calling home index page:--------------------
app.get("/",(req,res)=>{
    res.render('index');
});
// app.get("/about",(req,res)=>{
//     res.send("Hellow connected to about page:--");
// });
//by views handelbar calling about page:--------------------
app.get("/about",(req,res)=>{
        res.render('about');
    });
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Opps ! page not found'
    });
});
app.listen(port,()=>{
    console.log(`connected to server ${port}`);
});