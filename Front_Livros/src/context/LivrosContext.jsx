import { createContext, useContext, useState } from "react";

export const LivrosContext = createContext()

export const LivrosProvider = ({ children, livros }) => {
    const [livro, setLivro] = useState(livros[1])

    const verificarLivroSelecionado = (livroaSerValidado) => {
        return livro.id == livroaSerValidado.id
    } 

    const valorInicialContexto = {
        livros,
        livroSelecionado: livro,
        selecionarLivro: setLivro,
        verificarLivroSelecionado
    }

    return (<LivrosContext.Provider value={valorInicialContexto}>
        {children}
    </LivrosContext.Provider>)
}

export const useLivros = () => {
    return useContext(LivrosContext)
}