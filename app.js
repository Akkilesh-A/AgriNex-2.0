import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5173;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

// listening to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});