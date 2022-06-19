import express from "express";

const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send("Welcome to our app");
});

app.get("/credit", (request, response) => {
  const author = {
    name: "Bui Thien Nhan",
    appDescription: "Basic Backend for Todo App",
    version: "1.0",
  };
  response.json(author);
});

app.get("/test", (request, response) => {
  const testNote = [
    {
      id: "1",
      title: "test-note-1",
    },
    {
      id: "2",
      title: "test-note-2",
    },
  ];
  response.json(testNote);
});

app.listen(port, () => {
  console.log(`Todo App Backend running on port http://localhost:${port}`);
});
