import styled from "styled-components"
import CapaLivro from "../CapaLivro/CapaLivro"
import CardLivro from "../CardLivro/CardLivro"
import { useLivros } from "../../context/LivrosContext"

const ContainerLivros = styled.section`
  background: #EBECEE;
  padding: 48px 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 44px;
`

const UlEstilizada = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 32px;
`

const LivrosDestaque = () => {

    const { livros } = useLivros()
    return (<ContainerLivros>
        <UlEstilizada>
            {livros.map(livro => (<li key={livro.id}>
                <CapaLivro livro={livro} />
            </li>))}
        </UlEstilizada>
        <CardLivro />
    </ContainerLivros>)
}

export default LivrosDestaque