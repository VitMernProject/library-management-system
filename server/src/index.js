const app = require("./app")

const port = '7777'
app.listen(port,()=>{
    console.log(`server listing on port: ${port}`);
})