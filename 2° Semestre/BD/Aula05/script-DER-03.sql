CREATE TABLE usuario (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE playlist (
    id INT PRIMARY KEY,
    usuario_id INT,
    nome VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE musica (
    id INT PRIMARY KEY,
    duracao DECIMAL(10.50),
    artista VARCHAR(100),
    titulo VARCHAR(100)
);

CREATE TABLE playlist_musica (
    id INT PRIMARY KEY,
    musica_id INT,
    playlist_id INT,
    ordem VARCHAR(100),
    FOREIGN KEY (musica_id) REFERENCES musica(id),
    FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);