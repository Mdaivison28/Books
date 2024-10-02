import styled from "styled-components";
import BtnIcon from "../BtnIcon/BtnIcon";
import { useLivros } from "../../context/LivrosContext";

const ImgEstilizada = styled.img`
    width: ${props => props.$selecionado ? '280px' : '192px'};
`

const CapaLivro = ({ livro }) => {

    const { selecionarLivro, verificarLivroSelecionado } = useLivros()

    return (<BtnIcon onClick={() => selecionarLivro(livro)}>
        <ImgEstilizada $selecionado={verificarLivroSelecionado(livro)} src={livro.capa}/>
    </BtnIcon>)
}

export default CapaLivro