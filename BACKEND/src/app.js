import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from 'cors';  // moved import for consistency

async function initializeApp() {
  const conexao = await conectaNaDatabase();

  conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
  });

  conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
  });

  const app = express();

  // Use o CORS antes de definir suas rotas
  app.use(cors());
  app.use(express.json());
  routes(app);

  // DELE são melhor em routes pois permite adicionar a logica em outro lugar
  app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
  });

  return app;
}

export default await initializeApp(); // Aguarde o retorno da aplicação
