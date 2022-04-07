# exercicio 1
insert into Pixar.Movies(title, director, year, length_minutes)
	values ('Monstros SA', 'Pete Docter', 2001, 92),
	('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
# exercicio 2
insert into Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
	values (9, 6.8, 450000000, 370000000);
    
# exercicio 3
set SQL_SAFE_UPDATES = 0;
update Pixar.Movies
set director = 'Andrew Staton'
where title = 'Procurando Nemo';

# exercicio 4
update Pixar.Movies
set title = 'Ratatouille', year = 2007
where id = 3;

# exercicio 5
insert into Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
	values (8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);
    
# exercicio 6
delete from Pixar.BoxOffice
where movie_id = 11;
delete from Pixar.Movies
where title = "WALL-E";

# exercicio 7
delete from Pixar.BoxOffice
where movie_id IN (2, 9);
delete from Pixar.Movies
where director = 'Andrew Staton';