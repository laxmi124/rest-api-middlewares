const express = require('express');
const books = require('./books.json');
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("hi there")
})
// app.get("/books",(req,res)=>{
//     console.log('res',req.query)
//     res.json(books)
// })

app.get("/books",(req,res)=>{
  let {name} = req.query;
    if (name){
      const book =  books.find((book)=>book.name === name)
      res.json(book)
    }
    else{
      res.json({
          request_from : req.url,
          data: books
      })
    }
});

// app.get("/books/:id",(req,res)=>{
//     const {id} = req.params;
//     const book = books.find((book) => book.id === Number.parseInt(id));
//     res.json(book);
// })
app.get("/books/:name",(req,res)=>{
    const {name} = req.params;
    const book = books.find((book) => book.name === name);
    res.json(book);
})
app.listen(port,()=>{
    console.log(`it's runnig from port ${port}`)
})