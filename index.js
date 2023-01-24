const express = require('express');
const connect = require('./Configue/dbConfigue');
const authRouter=require("./Routes/auth.route")
const applyRouter=require("./Routes/apply.route")
const jobRouter=require("./Routes/job.route")

const app = express();
app.use(express.json());


app.use("/auth", authRouter);
app.use("/apply", applyRouter);
app.use("/job", jobRouter);


app.get('/', async(req, res) =>{


})


app.listen(8080, async (req, res) => {
    try {
      await connect();
      console.log(`listening on http://localhost:8080`);
    } catch (er) {
      console.log(er.message);
    }
  });