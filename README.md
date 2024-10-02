


# BookRegistry


## Funcionalidades

- **Home Page**: Uma página inicial simples com boas-vindas ao usuário.
- **Listagem de Livros**: Exibe uma lista de livros cadastrados, com opções de visualizar, editar e deletar cada livro.
- **Adicionar Livro**: Página/modal para adicionar um novo livro ao banco de dados.
- **Editar Livro**: Página/modal para editar informações de um livro existente.

## Tecnologias Utilizadas

- **HTML**: Estrutura das páginas.
- **CSS**: Estilização das páginas com Flexbox e Grid.
- **Bootstrap**: Design responsivo e componentes pré-construídos.
- **React**: Criação de componentes e gerenciamento de estado.

## Estrutura do Projeto

- **/src**: Contém os arquivos do projeto.
  - **/components**: Componentes React utilizados na aplicação.
  - **/pages**: Páginas do projeto (Home, Listagem, Adicionar, Editar).
  - **/services**: Lógica de conexão com o backend (APIs).

  ## Configuração de Ambiente

O arquivo `vite.config.js` contém as configurações do Vite, incluindo a porta e o proxy para o backend (caso esteja usando). Se necessário, ajuste este arquivo para suas necessidades específicas.

Por exemplo, se você precisar alterar a porta, modifique a seção:

``js
// vite.config.js
export default {
  server: {
    port: 3000, // altere para a porta desejada
  },
};


## Demonstração

Veja o vídeo de demonstração do fluxo completo da aplicação, desde a navegação até a manipulação dos livros: [Link para o vídeo](https://www.youtube.com).

## Como Contribuir

1. Faça um **fork** do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça as alterações necessárias e faça o commit (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch principal (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.

