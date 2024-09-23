import express from "express";
import db from "./client/db";
import { User } from "./client/db";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

// FINDBYID / FINDALL / CREATE / UPDATEBYID/ REMOVE

app.post("/create", (req, res) => {

  db.create(req.body)

  res.status(200).send("Usuário salvo com sucesso")

})

app.listen(port, () => {
  console.log(`Esse servidor está rodando em ${port}`);
});
