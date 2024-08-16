import express from "express";
const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 40 },
  { id: 5, name: "Eve", age: 45 },
  { id: 6, name: "Charlie", age: 50 },
  { id: 7, name: "Daniel", age: 55 },
  { id: 8, name: "Frank", age: 60 },
  { id: 9, name: "George", age: 65 },
];

const app = express();

app.get("/", (request, response) => {
  response.status(200).send({ message: "Hello World!" });
});

app.get("/api/users", (request, response) => {
  console.log(request.query);
  response.status(200).send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
  const parsedId = parseInt(request.params.id);
  if(isNaN(parsedId)) return response.status(400).send({message: "Invalid ID"});
  const user = mockUsers.find((user) => user.id === parsedId);
  if(!user) return response.sendStatus(404);
  return response.status(200).send(user);
});

app.get('/api/products', (request, response) => {
  response.status(200).send([
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "iPad", price: 499 },
    { id: 3, name: "MacBook", price: 1999 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
