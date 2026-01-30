DROP DATABASE scriptder02;
CREATE DATABASE scriptder02;
use scriptder02;

CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(20)
);

CREATE TABLE veiculos (
    id INT PRIMARY KEY,
    modelo VARCHAR(100),
    placa VARCHAR(100),
    categoria VARCHAR(100)
);

CREATE TABLE contratos (
    id INT PRIMARY KEY,
    clientes_id INT,
    veiculos_id INT,
    data_inicio VARCHAR(50),
    data_fim VARCHAR (50),
    valor DECIMAL(10.50),
    FOREIGN KEY (clientes_id) REFERENCES clientes(id),
    FOREIGN KEY (veiculos_id) REFERENCES veiculos(id)
);

CREATE TABLE manutencoes (
    id INT PRIMARY KEY,
    data VARCHAR(100),
    tipo VARCHAR(100),
    veiculos_id INT,
    obsercacao VARCHAR(100),
    FOREIGN KEY (veiculos_id) REFERENCES veiculos(id)
);