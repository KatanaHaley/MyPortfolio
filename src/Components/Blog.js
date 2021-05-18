import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
const axios = require("axios");

//const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@haleykatana";

async function Blog(items) {
 let articleList = [];
 const mediumUrl = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@haleykatana`);
 // let newList = articleList.push(mediumUrl);
 // console.log(newList.data.items[0].title);
  articleList = mediumUrl.data.items;
// let log = articleList.push(newList)
// console.log("Articles:", mediumUrl.data.items[0].link);
  console.log(articleList[0].title, articleList[0].link);

 //  console.log(newList[0].link);


 // console.log(mediumUrl.data.items[1].title);
 // console.log(mediumUrl.data.items[2].title);

 return (
   <div className="blog">

     {articleList}
   </div>
   )
}

Packages("title");



export default Blog;