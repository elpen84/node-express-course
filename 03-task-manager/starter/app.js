console.log('Task Manager App')
const express = require('express');

const app = express();





//routes
app.get('/hello', (req,res)=> {
res.send('Task Manager App')
})

const port = 3000;

app.listen(port, console.log(`server is listening to you... ${port}`));

