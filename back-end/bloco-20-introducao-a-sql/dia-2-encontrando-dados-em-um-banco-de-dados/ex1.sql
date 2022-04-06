# exercicio 1
SELECT 'This is SQL Exercise, Practice and Solution';

# exercicio 2
SELECT 1, 2, 3;

# exercicio 3
SELECT 10 + 15;

# exercicio 4
SELECT 4 / 2;

# exercicio 5
SELECT * FROM Scientists.Scientists;

# exercicio 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

# exercicio 7
SELECT Name FROM Scientists.Scientists ORDER BY Name;

# exercicio 8
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;

# exercicio 9
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Scientists.Projects;

# exercicio 10
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

# exercicio 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

# exercicio 12
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

# exercicio 13
SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

# exercicio 14
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

# exercicio 15
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists.Scientists;