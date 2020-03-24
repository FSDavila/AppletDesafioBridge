### Applet calculo de divisores e detector de numeros primos (Desafio Bridge 2020.1)

A aplicação toma um dado (número) de um input cujo é fornecido pelo usuário, utilizado pelo backend para montar a resposta com os respectivos divisores e a informação sobre o número ser primo ou não. Mostra os dados em uma tabela na tela. Também guarda cada um dos valores submetidos pelo usuário durante a execução atual do sistema.

### Tecnologias Utilizadas

-Node.js (Backend Engine)

-Express (Para passar os dados para o backend e principalmente, para gerar o servidor Express)

-React.js (DOM principal utilizada para gerar as views de acordo com o modelo de dados)

-Biblioteca PrimeReact (Componentes prontos React com estilos CSS predefinidos)

-Webpack (bundler)

-Eslint / Babel (verificador e transpilador respectivamente)

-Nodemon (Como o nome diz, monitora as modificações no node)

-Axios (para tratamento das requests / responses)

-npm (não poderia faltar hahahahahah)

-Heroku (disponibilizarei o link aqui ainda)

## Instruções para instalacao dos pacotes necessarios
Assim que baixar/clonar o respositório, entre no diretírio "cliente" pelo terminal / CMD (nesse caso sendo necessário instalar o node.js mais atualizado primeiro) e digite

'npm install'

para instalar os pacotes utilizados pelo lado cliente.

Em seguida acesse o diretório "servidor" pelo terminal / CMD e digite

'npm install'

para instalar os pacotes utilizados pelo lado servidor.


### Rodando localmente Lado Cliente
Para iniciar o sistema do lado cliente localmente em modo desenvolvimento entre no diretorio "cliente" e digite

'npm start'

Toda vez que um arquivo do lado cliente for alterado o Webpack será acionado para gerar uma nova versão dos arquivos necessários para o lado cliente. Estes arquivos estão armazenados no diretorio "público" dentro do diretório "servidor".

### Rodando localmente Lado Servidor
Para iniciar o sistema do lado cliente localmente em modo desenvolvimento entre no diretório "servidor" e digite

'npm start'

Verifique no console se lá consta a linha "Servidor online na porta numero XXXX". Se sim, para efetuar o acesso, entre no navegador e digite o endereço https://localhost:3000 (É importante inserir https pois o aplicativo vem com certificados prontos. caso apareça alguma mensagem de aviso sobre segurança vinda de seu browser, apenas aceite clicando no botão 'avançado' e prossiga)

### Gerando build modo Produção

## Do Lado Cliente

Para gerar a versão em produção do lado cliente entre no diretório "cliente" e digite

'npm run build'

## Do Lado Servidor

Para gerar a versão em produção do lado servidor entre no diretorio "servidor" e digite

'npm run build'

## Executando a aplicação em modo produção
Para executar a aplicação em modo produção entre no diretório "servidor" e digite

'node build/app.js'
