### Applet calculo de divisores e detector de numeros primos (Desafio Bridge 2020.1)

A aplicação toma um dado (numero) de uma input cujo eh fornecido pelo usuario, utilizado pelo backend para montar a resposta com os respectivos divisores e a informacao sobre o numero ser primo ou nao. Mostra os dados em uma tabela na tela.

### Tecnologias Utilizadas

-Node.js (Backend)

-Express (Para passar os dados para o backend)

-React.js (DOM principal utilizada para gerar as views de acordo com o modelo de dados)

-Biblioteca PrimeReact (componentes prontos React com estilos CSS predefinidos)

-Webpack

-Eslint / Babel

-Nodemon (Como o nome diz, monitora as modificacoes no node)

## Instruções para instalacao dos pacotes necessarios
Assim que baixar/clonar o respositorio, entre no diretorio "cliente" pelo terminal / CMD (nesse caso sendo necessario instalar o node.js mais atualizado primeiro) e digite

'npm install'

para instalar os pacotes utilizados pelo lado cliente.

Em seguida acesse o diretorio "servidor" pelo terminal e digite

'npm install'

para instalar os pacotes utilizados pelo lado servidor.


### Rodando localmente Lado Cliente
Para iniciar o sistema do lado cliente localmente em modo desenvolvimento entre no diretorio "cliente" e digite

'npm start'

Toda vez que um arquivo do lado cliente for alterado o Webpack sera acionado para gerar uma nova versao dos arquivos necessarios para o lado cliente. Estes arquivos estao armazenados no diretorio "publico" dentro do diretorio "servidor".

### Rodando localmente Lado Servidor
Para iniciar o sistema do lado cliente localmente em modo desenvolvimento entre no diretório "servidor" e digite

'npm start'

Verifique no console se la consta a linha "Servidor online na porta numero XXXX". Se sim, para efetuar o acesso, entre no navegador e digite o endereço https://localhost:3000

### Gerando build modo Produçao

## Do Lado Cliente

Para gerar a versão em produção do lado cliente entre no diretório "cliente" e digite

'npm run build'

## Do Lado Servidor

Para gerar a versão em produçao do lado servidor entre no diretorio "servidor" e digite

'npm run build'

## Executando a aplicaçao em modo produçao
Para executar a aplicaçao em modo produçao entre no diretorio "servidor" e digite

'node build/app.js'
