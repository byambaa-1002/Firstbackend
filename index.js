import express from "express";

// import { createServer } from "http";
// import express, { response } from "express";
// const app = express();
// const port = 8000;
// const server = createServer((Request, Response) => {
//   Response.statusCode = 200;
//   Response.setHeader = ("Content-Type", " text/plian");
//   Response.end("hello worl");
// });
const app = express();
const port = 8000;
app.use(express.json());

app.get("/hi", (request, response) => {
  response.send("hi express ");
});

app.post("/addArticles", (request, response) => {
  const { titel } = request.body;
  response.send(`Product successfully added ${titel}`);
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
