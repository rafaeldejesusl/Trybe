# exercicio 1
select name from PecasFornecedores.Pecas where name like 'Gr%';

# exercicio 2
select * from PecasFornecedores.Fornecimentos where peca=2 order by Fornecedor;

# exercicio 3
select peca, Preco, Fornecedor from PecasFornecedores.Fornecimentos where Fornecedor like '%N%';

# exercicio 4
select * from PecasFornecedores.Fornecedores where name like '%LTDA%' order by name desc;

# exercicio 5
select count(*) from PecasFornecedores.Fornecedores where code like '%F%';

# exercicio 6
select * from PecasFornecedores.Fornecimentos where Preco between 15 and 40 order by Preco;

# exercicio 7
select count(*) from PecasFornecedores.Vendas where order_date between '2018-04-15' and '2019-07-30';