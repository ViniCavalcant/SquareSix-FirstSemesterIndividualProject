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
	(null, 'Blade Runner 2049', 'Ficção científica', 'Denis Villeneuve', 'https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg'),
    (null, 'Blade Runner - O Caçador de Androids', 'Ficção científica', 'Ridley Scott', 'https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg'),
	(null, 'Curtindo a Vida Adoidado', 'John Hughes', 'Comédia', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/85/20122112.jpg'),
    (null, 'Drive', 'Nicolas Winding Refn', 'Ação', 'https://i.pinimg.com/originals/0d/c1/0a/0dc10a14f91eb20d930bce4b38d6c6e4.jpg'),
    (null, 'O Show de Truman', 'Peter Weir', 'Drama', 'https://br.web.img3.acsta.net/medias/nmedia/18/93/64/37/20269376.jpg'),
    (null, 'Sociedade dos Poetas Mortos', 'Peter Weir', 'Drama', 'https://br.web.img2.acsta.net/pictures/210/132/21013221_20130617200543616.jpg'),
    (null, 'O Senhor dos Anéis: A Sociedade do Anel', 'Peter Jackson', 'Fantasia', 'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg'),
    (null, 'O Senhor dos Anéis: As Duas Torres', 'Peter Jackson', 'Fantasia', 'https://img.elo7.com.br/product/zoom/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg'),
    (null, 'O Senhor dos Anéis: O Retorno do Rei', 'Peter Jackson', 'Fantasia', 'https://img.elo7.com.br/product/zoom/26928B5/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo03-90x60-cm-presente-geek.jpg'),
    (null, '1917', 'Sam Mendes', 'Ação', 'https://br.web.img3.acsta.net/pictures/19/08/05/09/18/2822230.jpg'),
    (null, 'A Origem', 'Christopher Nolan', 'Ficção científica', 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/a-origem-poster.jpg'),
    (null, 'Um Lugar Silencioso', 'John Krasinski', 'Terror', 'https://http2.mlstatic.com/D_NQ_NP_799593-MLB45229830367_032021-W.jpg'),
    (null, 'Dunkirk', 'Christopher Nolan', 'Ação ', 'https://i.pinimg.com/originals/d9/86/b0/d986b00ecfeb4e8af7b3eb06640a9833.jpg'),
    (null, 'Gladiador', 'Ridley Scott', 'Ação', 'https://img.elo7.com.br/product/zoom/1DFAF3F/poster-cartaz-gladiador-poster.jpg'),
    (null, 'Tenet', 'Christopher Nolan', 'Ficção científica', 'https://cinesiageek.com.br/wp-content/uploads/2020/12/tenet-poster-1.jpg'),
    (null, '', '', '', ''),
    (null, '', '', '', ''),
    (null, '', '', '', ''),
    (null, '', '', '', '')
    