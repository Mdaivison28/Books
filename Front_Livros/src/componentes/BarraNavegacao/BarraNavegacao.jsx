import styled from "styled-components";

const NavEstilizado = styled.nav`
  padding: 18px 80px;
`;

const UlEstilizado = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 55px;
  align-items: center;
`;

const Separador = styled.li`
  flex-grow: 1;
`;

const LinkComIcone = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none; /* Removi o sublinhado que estava aparecendo */
  color: #000; /* Nesse parâmetro posso alterar a cor */

  &:hover {
    text-decoration: underline; /* Efeito do mouse */
    color: #027c87; /* Efeito mouse */
  }
`;

const BarraNavegacao = ({ setActivePage }) => (
  <NavEstilizado>
    <UlEstilizado>
      <li>
        <img src="/logo.png" alt="logo" width="180" />
      </li>
      <li>
        <LinkComIcone onClick={() => setActivePage('home')}>INÍCIO</LinkComIcone>
      </li>
      <li>
        <LinkComIcone onClick={() => setActivePage('livros')}>LIVROS</LinkComIcone>
      </li>
      <li>
        <LinkComIcone onClick={() => setActivePage('cadastroLivros')}>CADASTRO DE LIVROS</LinkComIcone>
      </li>
      <Separador />
      <li>
        <LinkComIcone onClick={() => {/* */}}>
          <img src="/icones/usuario.png" alt="Usuário" /> Login
        </LinkComIcone>
      </li>
    </UlEstilizado>
  </NavEstilizado>
);

export default BarraNavegacao;
