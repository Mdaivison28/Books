import React, { useState } from "react";
import styled from "styled-components";
import BtnIcon from "../BtnIcon/BtnIcon";
import Botao from "../Botao/Botao";
import { useLivros } from "../../context/LivrosContext";

const Card = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const Sobre = styled.h3`
  color: #027c87;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Titulo = styled.h4`
  color: #009eac;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Tipografia = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const LegendaPreco = styled.small`
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Preco = styled.strong`
  color: #009eac;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UlFlex = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 32px;
  align-items: start;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const CardLivro = () => {
  const { livroSelecionado } = useLivros();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editedBook, setEditedBook] = useState({
    titulo: livroSelecionado.titulo,
    preco: livroSelecionado.preco,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dados Atualizados:", editedBook);
    setModalOpen(false);
  };

  return (
    <>
      <Card>
        <ContainerFlex>
          <Sobre>Sobre o livro:</Sobre>
          <UlFlex>
            <li>
              <BtnIcon>
                <img src="/icones/sacola.png" alt="Adicionar ao carrinho" />
              </BtnIcon>
            </li>
            <li>
              <BtnIcon>
                <img src="/icones/favoritos.png" alt="Adicionar aos favoritos" />
              </BtnIcon>
            </li>
          </UlFlex>
        </ContainerFlex>
        <div>
          <Titulo>{livroSelecionado.titulo}</Titulo>
          <Tipografia>{livroSelecionado.resumo}</Tipografia>
          <Tipografia>Por: {livroSelecionado.autor}</Tipografia>
        </div>
        <ContainerFlex>
          <div>
            <Tipografia>
              <LegendaPreco>A partir de:</LegendaPreco>
            </Tipografia>
            <Tipografia>
              <Preco>R$ {livroSelecionado.preco.toFixed(2)}</Preco>
            </Tipografia>
          </div>
          <Botao onClick={() => setModalOpen(true)}>Editar</Botao>
        </ContainerFlex>
      </Card>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Editar Livro</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label>Título</label>
                <input
                  type="text"
                  name="titulo"
                  value={editedBook.titulo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Preço</label>
                <input
                  type="number"
                  name="preco"
                  value={editedBook.preco}
                  onChange={handleChange}
                  step="0.01"
                />
              </div>
              <button type="button" onClick={handleSave}>Salvar</button>
              <button type="button" onClick={() => setModalOpen(false)}>Cancelar</button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CardLivro;
