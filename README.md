# Aplicação de Lembretes

## Premissas assumidas
- Não será possivel adicionar a data atual ou seja somente datas apos a atual:
![Teste de envio com data atual/anterior](Teste-data-atual.gif)
- Não poderão ser adicionados campos vazios
![teste de  campo vazio](Teste-campo-vazio.gif)
- O Backend sempre retorna a lista atualizada de tarefas para as requisições exceto que seja feita a solicitação pelo metodo de busca por ID
- O banco de dados utilizado é o SQL Server.


## Decisões de projeto
- Utilização do React.js com Styled Components tornando a aplicação escalavel e simples de dar manutenção
- Utilização de Context API no Front para a criacao de hooks personalizados fazendo uso do principio de responsabilidade Unica
- Utilização do ASP.NET Core para criar a API RESTful de gerenciamento de lembretes 
- Implementação de um banco de dados SQL Server para armazenar os lembretes, permitindo uma estrutura de dados organizada e escalável.
- Utilização do Entity Framework Core para a camada de acesso a dados, facilitando as operações CRUD e fornecendo um mapeamento objeto-relacional (ORM) conveniente.


## Instruções para executar o sistema

### Configuração do banco de dados:
1. Certifique-se de ter o SQL Server instalado em sua máquina.
2. Abra o arquivo `appsettings.json` e atualize a string de conexão com o seu servidor SQL Server e o nome do banco de dados, se necessário.

### Execução do backend:
1. Abra o projeto da API em uma IDE compatível com .NET Core.
2. Abra o arquivo localizado na pasta Backend chamado `LembretesAPI.sln` e execute  o codigo. Isso iniciará a API na porta especificada no arquivo `launchsettings.json`.
3.O resumo das funcionalidades da api esta disponivel em https://localhost:7270/swagger/index.html

### Execução do frontend:
1. Abra o projeto do frontend em um editor de código, como Visual Studio Code.
2. Abra um terminal na raiz do projeto do frontend e execute o comando `npm install` para instalar as dependências do projeto.
3. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento do React. Isso iniciará o frontend na porta padrão 5173.

### Acesso à aplicação:
- Abra um navegador da web e navegue para http://localhost:5173 para acessar a aplicação frontend.
- A aplicação frontend se comunicará com a API backend hospedada em http://localhost:7270 para realizar operações CRUD nos lembretes.
- Certifique-se de seguir todas as etapas corretamente para garantir que o sistema seja executado com sucesso.

### Resultados finais: 
 ![Teste resultado final](Teste-Funcional.gif)

 E se caso ja existir algum lembrete em uma data?
![Teste data repetida](Teste-data-Repetida.gif)
E se eu quiser Excluir algum Lembrete?
![Teste Exclusão](Teste-Exclusao.gif)