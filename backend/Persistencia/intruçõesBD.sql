CREATE TABLE Conta(
    numero INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(60) NOT NULL,
    nome VARCHAR(80) NOT NULL,
    telefone INT NOT NULL,
    senha VARCHAR(6) NOT NULL,
    codigo_agencia INT NOT NULL,
    CONSTRAINT pk_conta PRIMARY KEY(numero),
    FOREIGN KEY(codigo_agencia) REFERENCES Agencia(codigo)
)

CREATE TABLE Agencia(
    codigo INT NOT NULL AUTO_INCREMENT,
    endereco VARCHAR(60) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    CONTRAINT pk_agencia PRIMARY KEY(codigo)
)

insert into Agencia (endereco,cidade,uf)values('Rua tal','Pres.Prudente','SP');
commit;