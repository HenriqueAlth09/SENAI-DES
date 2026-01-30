DROP DATABASE correção01;
CREATE DATABASE correção01;
use correção01;
CREATE TABLE departamento (
  id INT PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE funcionarios (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  cargo VARCHAR(50),
  departamento INT,
  FOREIGN KEY (departamento) REFERENCES departamento(id)
);