import React, { useState } from "react";
import EstilosGlobais from "./EstilosGlobais/EstilosGlobais";
import Banner from "./componentes/Banner/Banner";
import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Titulo from "./componentes/Titulo/Titulo";
import LivrosDestaque from "./componentes/LivrosDestaque/LivrosDestaque";
import Newsletter from "./componentes/Newsletter/Newsletter";
import Rodape from "./componentes/Rodape/Rodape";
import CadastroLivros from "./componentes/CadastroLivros/CadastroLivros"; // Importando CadastroLivros
import { LivrosProvider } from "./context/LivrosContext";

// dados dos livros
const lancamentos = [
  {
    id: 1,
    titulo: 'JavaScript - O Guia Definitivo',
    resumo: 'Guia completo para dominar o JavaScript',
    autor: 'David Flanagan',
    preco: 59.9,
    capa: '/livros/js.jpg'
  },
  {
    id: 2,
    titulo: 'Front-End',
    resumo: 'Curso completo de HTML, CSS e JavaScript',
    autor: 'P.A. Gabriel',
    preco: 29.9,
    capa: '/livros/css.jpg'
  },
  {
    id: 3,
    titulo: 'Introdução à Linguagem SQL',
    resumo: 'Abordagem prática para iniciantes em SQL',
    autor: 'Thomas Nield',
    preco: 29.9,
    capa: '/livros/bd.jpg'
  }
];

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <EstilosGlobais />
      <BarraNavegacao setActivePage={setActivePage} />
      <Banner />

      {activePage === 'home' && (
        <>
          <Titulo>NEWSLETTER:</Titulo>
          <LivrosProvider livros={lancamentos}>
            {/* */}
          </LivrosProvider>
          <Newsletter />
        </>
      )}

      {activePage === 'livros' && (
        <>
        <Titulo>MAIS RECENTES:</Titulo>
        <LivrosProvider livros={lancamentos}>
          <LivrosDestaque />
        </LivrosProvider>
        </>
      )}

      {activePage === 'cadastroLivros' && (
        <CadastroLivros /> 
      )}

      <Rodape />
    </>
  );
}

export default App;
