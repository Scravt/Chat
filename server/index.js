import express from "express";
import logger from "morgan";
import cors from "cors"; 
import chatData from "./mocket/chat.js";

const port = process.env.PORT ?? 3000;
const app = express();

app.use(logger('dev'));
app.use(cors()); 

app.get("/chatData", (req, res) => {
    res.json(chatData);
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});