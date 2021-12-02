use Square_Six;
select * from Usuario;

create table Usuario(
	id int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table filme (
	idFilme int primary key auto_increment,
    nomeFilme varchar(45),
    genero varchar(45),
    diretor varchar(45),
	poster text
);

create table Curtida(
	fkUsuario int,
    constraint ForKeyUser foreign key (fkUsuario) references Usuario(id),
    fkFilme int,
    constraint ForKeyFilm foreign key (fkFilme) references Filme(idFilme),
    curtida int,
    primary key(fkUsuario, fkFilme, curtida)
);
select * from filme;
insert into filme values
--  <!--Result 01 - Alien, o Oitavo Passageiro -->
-- <!--Result 02 - Curtindo a Vida Adoidado -->
-- <!--Result 03 - O show de Truman -->
--  <!--Result 04 - O Senhor dos Anéis: A Sociedade do Anel -->
-- <!--Result 05 - Blade Runner 2049 -->
-- <!--Result 06 - Soul -->
	(null, 'Blade Runner 2049', 'Ficção científica', 'Denis Villeneuve', 'https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg'),
	(null, 'Curtindo a Vida Adoidado', 'John Hughes', 'Comédia', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/85/20122112.jpg'),
    (null, 'O Show de Truman', 'Peter Weir', 'Drama', 'https://br.web.img3.acsta.net/medias/nmedia/18/93/64/37/20269376.jpg'),
    
    
    (null, 'O Senhor dos Anéis: A Sociedade do Anel', 'Peter Jackson', 'Fantasia', 'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg');
    -- 6
    (null, 'Soul', 'John Finger', 'Comédia', 'https://br.web.img3.acsta.net/pictures/20/10/09/10/12/0923276.jpg')
-- amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg
-- https://br.web.img3.acsta.net/medias/nmedia/18/90/95/85/20122112.jpg
-- https://br.web.img3.acsta.net/medias/nmedia/18/93/64/37/20269376.jpg
-- https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg
-- https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg
-- https://br.web.img3.acsta.net/pictures/20/10/09/10/12/0923276.jpg

    