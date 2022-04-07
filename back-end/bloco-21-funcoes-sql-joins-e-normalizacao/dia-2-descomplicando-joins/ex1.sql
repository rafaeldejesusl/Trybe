# exercicio 1
select m.title, b.domestic_sales, b.international_sales
from Pixar.Movies as m
inner join Pixar.BoxOffice as b
on m.id = b.movie_id;

# exercicio 2
select m.title, b.domestic_sales + b.international_sales as total_sales
from Pixar.Movies as m
inner join Pixar.BoxOffice as b
on m.id = b.movie_id
where b.international_sales > b.domestic_sales;

# exercicio 3
select m.title, b.rating
from Pixar.Movies as m
inner join Pixar.BoxOffice as b
on m.id = b.movie_id
order by b.rating desc;

# exercicio 4
select t.*, m.*
from Pixar.Theater as t
left join Pixar.Movies as m
on t.id = m.theater_id
order by t.name;

# exercicio 5
select t.*, m.*
from Pixar.Theater as t
right join Pixar.Movies as m
on t.id = m.theater_id
order by t.name;