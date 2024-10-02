import styled from "styled-components"

const SecaoEstilizada = styled.section`
    background-image: url(/banner2.jpeg);
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 84px 0;
`

const Titulo = styled.h1`
    margin: 0;
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Legenda = styled.h2`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const CampoBusca = styled.input`
    border-radius: 24px;
    border: 1px solid #FFF;
    padding: 10px 24px;
    background-color: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 476px;
    max-width: 90%;
    box-sizing: border-box;
    text-align: center;
    &::placeholder {
        color: #FFF; 
    }
`

const Banner = () => {
    return (<SecaoEstilizada>
        <Titulo>
            Descubra o Futuro da Leitura
        </Titulo>
        <Legenda>
            Encontre em nossa estante o que precisa para seu desenvolvimento!
        </Legenda>
        <CampoBusca placeholder="Qual será sua próxima leitura?" />
    </SecaoEstilizada>)
}

export default Banner