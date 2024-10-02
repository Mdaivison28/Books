import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 0;
`

const Titulo = styled.h4`
    color: #009EAC;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 376px;
    margin: 0;
`

const Tipografia = styled.p`
    color: #009EAC;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    max-width: 376px;
    margin: 0;
`

const CampoEmail = styled.input`
    width: 376px;
    max-width: 90%;
    border-radius: 24px;
    border: 1px solid #009EAC;
    padding: 10px 24px;
    box-sizing: border-box;
    &::placeholder {
        color: #009EAC;
    }
`

const Newsletter = () => {
    return (<Container>
        <div>
            <Titulo>
            Quer ficar por dentro das novidades?
            </Titulo>
            <Tipografia>
                Atualizações de e-books, novos livros, promoções e outros.
            </Tipografia>
        </div>
        <div>
                <CampoEmail type="email" placeholder="Cadastre seu e-mail" />
        </div>
    </Container>)
}

export default Newsletter