import styled from "styled-components"
import Botao from "../Botao/Botao"

const Container = styled.section`
    background-color: #009EAC;
    padding: 32px;
`

const Titulo = styled.p`
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
`

const ContainerFlex = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 160px;
`

const Topicos = () => {
    return (<Container>
        <Titulo>
            Tópicos visitados recentemente
        </Titulo>
        <ContainerFlex>
            <li>
                <Botao>
                    Android
                </Botao>
            </li>
            <li>
                <Botao>
                    OO
                </Botao>
            </li>
            <li>
                <Botao>
                    Marketing Digital
                </Botao>
            </li>
            <li>
                <Botao>
                    Agile
                </Botao>
            </li>
            <li>
                <Botao>
                    Startups
                </Botao>
            </li>
            <li>
                <Botao>
                    HTML & CSS
                </Botao>
            </li>
            <li>
                <Botao>
                    Java
                </Botao>
            </li>
            <li>
                <Botao>
                    Python
                </Botao>
            </li>
        </ContainerFlex>
    </Container>)
}

export default Topicos