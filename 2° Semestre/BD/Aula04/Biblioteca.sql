drop database if exists biblioteca;
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE usuarios (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100)
);

CREATE TABLE livros (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
autor VARCHAR(100) NOT NULL,
ano VARCHAR(4)
);

CREATE TABLE emprestimos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
usuario_id INTEGER,
livro_id INTEGER,
data_retirada DATE,
data_devolucao DATE
);


INSERT INTO usuarios (id, nome, email, nascimento)
VALUES
(default, "Henrique Althman Dos Santos", "henriquealthman23@gmail.com", "2009-06-08"),
(default, "Ciclano Da Silva", "silvaciclano@gmail.com", "2009-07-18"),
(default, "Beltrano Da Costa", "bel.da.costa@gmail.com", "20004-12-12"),
(default, "Fulano Da Rocha", "f.rocha@gmail.com", "2006-11-22");

SELECT * FROM usuarios;

SELECT * FROM `usuarios` WHERE id=2;

INSERT INTO livros (id, titulo, autor, publicacao)
VALUES
(default, "Cabeça Fria Coração Quente", "Abel Ferreira", "2022-03-14"),
(default, "Biblia Do Palmeirense", "Celso de Campos Jr", "2022-08-30"),
(default, "São Marcos de Palestra Itália", "Jota Christianini", "2019-08-19"),
(default, "CEBOLINHA: UM DIA DE PALMEIRAS", "Mauricio De Souza", "2025-04-24");

SELECT * FROM livros;

SELECT titulo, publicacao FROM `livros` WHERE id=3;

INSERT INTO emprestimos (id, usuario_id, data_emprestimo, data_devolucao)
VALUES
(default, "1", "1", "2025-07-18", "2025-10-18"),
(default, "2", "2", "2025-06-08", "2025-09-08"),
(default, "3", "3", "2025-08-10", "2025-11-10");

SELECT * FROM emprestimos;

SELECT usuario_id, data_emprestimo FROM `emprestimos`;

UPDATE emprestimos
SET data_devolucao="2025-10-25"
WHERE id=1;

UPDATE emprestimos
SET data_devolucao="2025-10-25"
WHERE id=2;

SELECT data_emprestimo FROM emprestimos;

DELETE FROM livros WHERE id=1;

SELECT * FROM livros;

SELECT * FROM `livros` WHERE id=1;




