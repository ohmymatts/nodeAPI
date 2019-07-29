
### dependencias
Primeiro passo instalar a dependencias do projeto
```
NPM Install 
```
### Execução
```
NPM app.js
```

### Metodo get
```
http://localhost:3000/users
```
Retorna todos os usuarios cadastrados na base de dados

### Metodo post
```
http://localhost:3000/users/create
```
Adiciona um novo usuario, formatação do padrão do json para adicionar um novo usuario.

| nome atributo | descrição |
| --- | --- |
| email | e-mail do usuario a ser adicionado, chave única |
| name | nome do usuario a ser adicionado |
| department | nome do departamento do usuario |

exemplo:
```
"email": "teste1@teste.com"
"name": "teste"
"department": "teste"
```