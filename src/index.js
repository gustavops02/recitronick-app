const Express = require('express');
const app = Express();

app.listen(PORT, (err)=>{
    if(err) {
        throw err;
        console.log({"Error": "Server is not created."})
    }
})