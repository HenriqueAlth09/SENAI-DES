DROP DATABASE IF EXISTS script01;
CREATE DATABASE script01;
use scrit01;

CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
    );

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATE,
    status VARCHAR(100),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
    
);

SELECT * FROM clientes;
INSERT INTO clientes VALUES (1,'Bruna da Rocha', 'b.rocha@gmail.com');

SELECT * FROM clientes;
INSERT INTO clientes VALUES (2,'Henrique Althman Dos Santos', 'henrique-santos331@portalsesisp.com.br');


SELECT * FROM clientes;
INSERT INTO clientes VALUES (3,'Jorge Luis', 'l.jorge@gmail.com');

UPDATE clientes SET email = 'bruna@gmail.com' WHERE clientes.id = 1;

INSERT INTO `pedidos` (id, cliente_id, data_pedido, status) VALUES ('1', '1', '2025-07-03', 'cancelado')
INSERT INTO `pedidos` (id, cliente_id, data_pedido, status) VALUES ('2', '2', '2025-08-06', 'pendente')
INSERT INTO `pedidos` (id, cliente_id, data_pedido, status) VALUES ('3', '3', '2024-09-27', 'entregue')

DELETE FROM pedidos WHERE id = 1; 



