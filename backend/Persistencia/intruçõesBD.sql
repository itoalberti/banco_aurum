-- CREATE TABLE Conta(
--     numero INT NOT NULL AUTO_INCREMENT,
--     email VARCHAR(60) NOT NULL,
--     nome VARCHAR(80) NOT NULL,
--     telefone INT NOT NULL,
--     senha VARCHAR(6) NOT NULL,
--     codigo_agencia INT NOT NULL,
--     CONSTRAINT pk_conta PRIMARY KEY(numero),
--     FOREIGN KEY(codigo_agencia) REFERENCES Agencia(codigo)
-- )

-- CREATE TABLE Agencia(
--     codigo INT NOT NULL AUTO_INCREMENT,
--     endereco VARCHAR(60) NOT NULL,
--     cidade VARCHAR(40) NOT NULL,
--     uf VARCHAR(2) NOT NULL,
--     CONTRAINT pk_agencia PRIMARY KEY(codigo)
-- )

INSERT INTO Agencia (endereco,cidade,uf) VALUES ('Rua tal','Pres.Prudente','SP');
COMMIT;


-- NOVA VERSÃO
CREATE TABLE Agencia(
    cod_ag INT NOT NULL AUTO_INCREMENT,
    endereco VARCHAR(60) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    CONSTRAINT pk_agencia PRIMARY KEY(cod_ag)
);

CREATE TABLE Produto(
	cod_prod INT NOT NULL AUTO_INCREMENT KEY,
    nome VARCHAR(60)
);

CREATE TABLE Cliente(
	cod_cli INT NOT NULL AUTO_INCREMENT KEY,
	nome VARCHAR(60) NOT NULL,
	cpf NUMERIC(11) NOT NULL,
	dataNasc DATE NOT NULL,
	endereco VARCHAR(80) NOT NULL,
	cidade VARCHAR(60) NOT NULL,
	uf VARCHAR(2) NOT NULL,
	email VARCHAR(50) NOT NULL,
	telefone VARCHAR(15) NOT NULL,
    cod_ag INT NOT NULL,
    FOREIGN KEY (cod_ag) REFERENCES Agencia(cod_ag)
);

CREATE TABLE Cliente_Produto(
	cod_cli INT NOT NULL,
    cod_prod INT NOT NULL,
    FOREIGN KEY (cod_cli) REFERENCES Cliente(cod_cli),
    FOREIGN KEY (cod_prod) REFERENCES Produto(cod_prod)
);

--  CHECAR SE ESTÁ CORRETO
CREATE TABLE Agencia_Produto(
    cod_ag INT NOT NULL,
    cod_prod INT NOT NULL,
    FOREIGN KEY (cod_ag) REFERENCES Agencia(cod_ag)
    FOREIGN KEY (cod_prod) REFERENCES Produto(cod_prod)
)