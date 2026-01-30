DROP DATABASE scriptder01;
CREATE DATABASE scriptder01;
use scriptder01;

CREATE TABLE professores (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(50)
);

CREATE TABLE disciplinas (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  professores_id INT,
  FOREIGN KEY (professores_id) REFERENCES professores(id)
);


CREATE TABLE turmas (
  id INT PRIMARY KEY,
  periodo VARCHAR(50),
  nome VARCHAR(100)
);