import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"

const RodapeEstilzado = styled.footer`
    background: #F5F5F5;
    padding: 50px 150px;
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    color: #009EAC;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    justify-content: space-between;
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            margin-bottom: 12px;
            strong {
                font-size: 18px;
                font-style: normal;
                font-weight: 800;
            }
            a {
                text-decoration: none;
                color: #009EAC;                    
                &:visited {
                    color: #009EAC;                    
                }
            }
            &:first-child {
                margin-bottom: 16px;
            }
        }
    }
`

const UlSocial = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    li {
        margin: 0 -6px;
    }
`

const Rodape = () => {
    return (<RodapeEstilzado>
        <ul>
            <li>
                <strong>O Portal Livros</strong>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">SAC</a>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Serviços</strong>
            </li>
            <li>
                <a href="#">Custos e envios</a>
            </li>
            <li>
                <a href="#">Métodos de pagamento</a>
            </li>
            <li>
                <a href="#">Trocas e devoluções</a>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Contato</strong>
            </li>
            <li>
                <a href="tel:080012344567">
                    <strong>0800 1234 4567</strong>
                </a>
            </li>
            <li>
                <a href="mailto:#">3ctjgrupo6@gmail.com</a>
            </li>
            <li>
                <UlSocial>
                    <li>
                        <BtnIcon>
                            <img src="/icones/ig.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/wp.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/yt.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/fb.png" alt="" />
                        </BtnIcon>
                    </li>
                </UlSocial>
            </li>
        </ul>
    </RodapeEstilzado>)
}

export default Rodape