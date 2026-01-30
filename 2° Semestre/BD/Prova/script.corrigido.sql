DROP DATABASE test;
CREATE DATABASE test;
use test;

CREATE TABLE alunos(
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
    );

CREATE TABLE cursos (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
    );

CREATE TABLE matriculas (
    id INT PRIMARY KEY,
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
   FOREIGN KEY (aluno_id) REFERENCES alunos(id),
   FOREIGN KEY (curso_id) REFERENCES cursos(id) 
    );





