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

app.get("/findAll", (req, res) => {
  const busca = db.findAll()
  res.status(200).send("Usuários encontrados: " + busca.map((item) => item.name ))
})


app.put("/update/:id", (req,res) => {
  const id = parseInt(req.params.id)
  const user = req.body
  db.updateById(id,user)

  res.status(200).send("Atualização do id " + id + " realizada com sucesso.")
})

app.listen(port, () => {
  console.log(`Esse servidor está rodando em ${port}`);
});
