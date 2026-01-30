CREATE DATABASE script02;
USE script02;

CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano INT NOT NULL
);


CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);


CREATE TABLE emprestimos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    livro_id INT NOT NULL,
    data_retirada DATE NOT NULL,
    data_devolucao DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);


INSERT INTO livros (titulo, autor, ano) VALUES
('Dom Casmurro', 'Machado de Assis', 1899),
('O Alquimista', 'Paulo Coelho', 1988),
('Cabeça Fria Coração Quente', 'Abel Ferreira', 2022);


INSERT INTO usuarios (nome, email) VALUES
('Ana Souza', 'ana.souza@email.com'),
('Carlos Lima', 'carlos.lima@email.com'),
('Beatriz Mendes', 'beatriz.mendes@email.com');


INSERT INTO emprestimos (usuario_id, livro_id, data_retirada) VALUES
(1, 2, '2025-09-10'),
(2, 1, '2025-09-12'),
(3, 3, '2025-09-14');

UPDATE emprestimos
SET data_devolucao = '2025-09-20'
WHERE id = 1;