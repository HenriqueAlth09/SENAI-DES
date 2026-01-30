SCRIPT SQL Imobiliaria

CREATE DATABASE imobiliaria;

USE imobiliaria;

CREATE TABLE inquilinos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    telefone VARCHAR(200)
);

CREATE TABLE proprietarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    telefone VARCHAR(200)
);

CREATE TABLE imoveis (
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_proprietario INT,
    status VARCHAR(200),
    FOREIGN KEY(id_proprietario) REFERENCES proprietarios(id)
);

CREATE TABLE contratos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATE,
    data_fim DATE,
    id_inquilino INT,
    id_imovel INT,
    valor DECIMAL(10, 2),
    FOREIGN KEY(id_inquilino) REFERENCES inquilinos(id),
    FOREIGN KEY(id_imovel) REFERENCES imoveis(id)    
);

INSERT INTO inquilinos (nome, telefone) VALUES
('Henrique Althman', '11 97104-6863'),
('Jorge Santos', '11 99836-5277'),
('Beatriz Lima', '19 99659-1469');

INSERT INTO proprietarios (nome, telefone) VALUES
('Jão Loderni', '11 98677-1234'),
('Marcos Rocha', '21 99999-4922'),
('João Ferreira', '31 996785-3021');

INSERT INTO imoveis (id_proprietario, status) VALUES
(1, 'Disponível'),
(1, 'Alugado'),
(2, 'Disponível'),
(3, 'Disponível');

INSERT INTO contratos (data_inicio, data_fim, id_inquilino, id_imovel, valor) VALUES
('2024-01-10', '2024-11-10', 1, 2, 1500.00),
('2024-01-01', NULL, 2, 2, 1400.00);

SELECTS Imobiliaria

SELECT 
    imoveis.id,
    proprietarios.nome AS proprietario,
    imoveis.status
FROM imoveis
INNER JOIN proprietarios ON imoveis.id_proprietario = proprietarios.id
WHERE proprietarios.nome = 'Henrique Althman';

SELECT 
    inquilinos.nome AS inquilino,
    imoveis.id AS id_imovel,
    imoveis.status
FROM contratos
INNER JOIN inquilinos ON contratos.id_inquilino = inquilinos.id
INNER JOIN imoveis ON contratos.id_imovel = imoveis.id;

SELECT * FROM imoveis WHERE status = 'Disponível';

SELECT * FROM contratos WHERE id = 1;
