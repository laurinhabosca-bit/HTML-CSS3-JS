CREATE DATABASE IF NOT EXISTS agencias_db;
USE agencias_db;

CREATE TABLE Agencia (
    id_agencia INT AUTO_INCREMENT PRIMARY KEY,
    nome_agencia VARCHAR(100) NOT NULL
);

CREATE TABLE Missao (
    id_missao INT AUTO_INCREMENT PRIMARY KEY,
    nome_missao VARCHAR(150) NOT NULL UNIQUE,
    descricao TEXT
);

CREATE TABLE Espiao (
    id_espiao INT AUTO_INCREMENT PRIMARY KEY,
    nome_real VARCHAR(150) NOT NULL,
    nome_espiao VARCHAR(100),
    descricao TEXT,
    id_agencia INT NOT NULL,
    id_missao INT,
    FOREIGN KEY (id_agencia) REFERENCES Agencia(id_agencia),
    FOREIGN KEY (id_missao) REFERENCES Missao(id_missao)
);

INSERT INTO Agencia (nome_agencia) VALUES ('CIA'), ('MOSSAD'), ('ABIN');

INSERT INTO Missao (nome_missao, descricao) VALUES
('Operação Sombra', 'Infiltração em rede criminosa internacional.'),
('Operação Aurora', 'Monitoramento de comunicações suspeitas.');

INSERT INTO Espiao (nome_real, nome_espiao, descricao, id_agencia, id_missao) VALUES
('John Carter', 'Falcon', 'Especialista em infiltração urbana.', 1, 1),
('Maria Silva', 'Sombra', 'Analista de inteligência e criptografia.', 3, 2),
('David Cohen', 'Leão', 'Agente de campo com foco em contraespionagem.', 2, 1),
('Ana Souza', '002', 'Operações de vigilância.', 3, NULL),
('Mike Turner', 'Raven', 'Especialista em ciberespionagem.', 1, 2);

