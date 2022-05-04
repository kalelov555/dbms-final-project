const rp = require('request-promise');
const cheerio = require("cheerio");
const url = 'https://www.nytimes.com/books/best-sellers/';

const object = [];
rp(url)
.then((html) => {
  const $ = cheerio.load(html);
  $.html();
  const createItem = (index) => {
    const id = index+1;
    const bookName = $(".css-i1z3c1", html)[index].children[0].data;
    const author = $(".css-1nxjbfc", html)[index].children[0].data;
    const description = $(".css-5yxv3r", html)[index].children[0].data;
    const img = $(".css-35otwa", html)[index].attribs.src; 
    
    return {
      id: id,
      bookName: bookName,
      author: author,
      description: description,
      img: img
    }
  }
  
  for(let i=0; i<55; i++) {
    if(i>=30 && i<35) continue;
    object.push(createItem(i));
  }
  
  console.log(object);
  
})
.catch(function(err){
  console.log(err);
})






