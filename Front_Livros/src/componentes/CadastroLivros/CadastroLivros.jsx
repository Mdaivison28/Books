import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroLivros = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState({ titulo: "", autor: {}, editora: "", preco: 0 });
  const [modalType, setModalType] = useState(""); // "add" ou "edit"
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

  useEffect(() => {
    const fetchBooksAndAuthors = async () => {
      try {
        const booksResponse = await fetch("http://localhost:3000/livros");
        const booksData = await booksResponse.json();
        setBooks(booksData);

        const authorsResponse = await fetch("http://localhost:3000/autores");
        const authorsData = await authorsResponse.json();
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching books or authors:", error);
      }
    };

    fetchBooksAndAuthors();
  }, []);

  const handleSave = async () => {
    const url = "http://localhost:3000/livros";
    const method = modalType === "add" ? "POST" : "PUT"; // Verifica se é para adicionar ou editar
    const endpoint = modalType === "edit" && selectedBook._id ? `${url}/${selectedBook._id}` : url;

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedBook),
      });
      const updatedBook = await response.json();

      if (method === "POST") {
        setBooks((prevBooks) => [...prevBooks, updatedBook]);
      } else if (method === "PUT") {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === updatedBook._id ? updatedBook : book
          )
        );
      }
    } catch (error) {
      console.error("Error saving book:", error);
    }

    // Reseta o livro selecionado
    setSelectedBook({ titulo: "", autor: {}, editora: "", preco: 0 }); 
    setIsModalOpen(false); // Fecha o modal após salvar
  };

  const handleDelete = async (bookId) => {
    try {
      await fetch(`http://localhost:3000/livros/${bookId}`, {
        method: "DELETE",
      });
      const updatedBooks = books.filter((book) => book._id !== bookId);
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const openModal = (type, book = { titulo: "", autor: {}, editora: "", preco: 0 }) => {
    setModalType(type);
    setSelectedBook(book);
    setIsModalOpen(true); // Abre o modal
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Livros</h2>
      <button
        className="btn btn-primary my-3"
        onClick={() => openModal("add")}
      >
        Adicionar Novo Livro
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.titulo || "Título não informado"}</td>
              <td>{book.autor ? book.autor.nome : "Autor desconhecido"}</td>
              <td>{book.editora || "Editora não informada"}</td>
              <td>
                {book.preco || book.preco === 0 ? `R$ ${book.preco.toFixed(2)}` : "Sem preço"}
              </td>
              <td>
                <button
                  className="btn btn-warning mx-1"
                  onClick={() => openModal("edit", book)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(book._id)}
                >
                  Deletar
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalType === "add" ? "Adicionar Livro" : "Editar Livro"}
                </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Título</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedBook.titulo}
                      onChange={(e) =>
                        setSelectedBook({
                          ...selectedBook,
                          titulo: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Autor</label>
                    <select
                      className="form-control"
                      value={(selectedBook.autor && selectedBook.autor._id) || ""}
                      onChange={(e) => {
                        const author = authors.find(a => a._id === e.target.value);
                        setSelectedBook({
                          ...selectedBook,
                          autor: author || { nome: "", nacionalidade: "", _id: "" },
                        });
                      }}
                    >
                      <option value="">Selecione um autor</option>
                      {authors.map((author) => (
                        <option key={author._id} value={author._id}>
                          {author.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Editora</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedBook.editora}
                      onChange={(e) =>
                        setSelectedBook({
                          ...selectedBook,
                          editora: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Preço</label>
                    <input
                      type="number"
                      className="form-control"
                      value={selectedBook.preco}
                      onChange={(e) =>
                        setSelectedBook({
                          ...selectedBook,
                          preco: parseFloat(e.target.value),
                        })
                      }
                      step="0.01"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  {modalType === "add" ? "Adicionar" : "Salvar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CadastroLivros;
