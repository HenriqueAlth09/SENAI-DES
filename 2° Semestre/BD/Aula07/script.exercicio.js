SELECT * FROM clientes_loja WHERE cidade="são paulo";//lista só os de São Paulo

SELECT * FROM clientes_loja WHERE status="ativo";//lista só os ativos

SELECT * FROM clientes_loja WHERE idade > 40;//lista os com mais d/40 anos

SELECT * FROM clientes_loja
WHERE renda BETWEEN 3000 AND 5000;//lista os com renda mensal entre 3.000 a 5.000

SELECT * FROM clientes_loja WHERE data_cadastro > "2025-01-01";//lista os clientes a partir da data solicitada

SELECT * FROM clientes_loja
WHERE email IS NOT NULL AND email <> '';

SELECT * FROM clientes_loja
ORDER BY nome ASC;//lista por ordem alfabetica

SELECT * FROM clientes_loja
ORDER BY renda_mensal DESC;//lista os de maior renda para os menor

SELECT * FROM clientes_loja
WHERE cidade = "Curitiba"
ORDER BY idade ASC;//lista os de curitiba de menor idade para o maior

SELECT * FROM clientes_loja
WHERE status = "Ativo"
ORDER BY data_cadastro ASC;//lista os ativos com data de cadastro 

SELECT 
    nome AS "Nome Completo",
    idade AS "Idade (anos)",
    cidade
FROM clientes_loja;

SELECT nome AS "Nome Completo", renda_mensal AS "Renda (R$)", status AS "Situação" FROM clientes_loja;

SELECT * FROM clientes_loja LIMIT 5;

SELECT * FROM clientes_loja WHERE status = "Ativo" ORDER BY id ASC LIMIT 10;

SELECT * FROM clientes
ORDER BY id ASC
LIMIT 10 OFFSET 10;

SELECT * FROM clientes_loja
ORDER BY id ASC
LIMIT 10 OFFSET 10;

SELECT * FROM clientes_loja
ORDER BY data_cadastro DESC
LIMIT 5;

SELECT * FROM clientes_loja
WHERE status = 'Ativo' AND idade < 30;

SELECT * FROM clientes_loja
WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro';

SELECT * FROM clientes_loja
WHERE email IS NOT NULL AND email <> ''
AND renda_mensal > 6000;

SELECT * FROM clientes_loja
WHERE (status = 'Pendente' OR status = 'Inativo')
AND idade > 50;