# Projeto Pokédex

Este projeto é uma quest do curso DevQuest, um exercício para treinar e aperfeiçoar minhas habilidades de HTML, CSS, Javascript, React e Context API, e também desenvolver um site do zero, aprendendo o uso de API's e tomando decisões durante a realização do projeto.

![image](https://github.com/user-attachments/assets/4223bd75-8154-4aeb-8913-ddeab794cfd5)
![image](https://github.com/user-attachments/assets/3529d0a7-842a-4efd-82df-c4343e5b3414)


## Funcionalidades

O projeto é um site que simula uma pokédex, mostrando uma lista de diversos pokémons, com seus nomes, tipos e número do pokémon. A lista também pode ser filtrada por determinados tipos de pokémon ao selecionar a opção desejada no campo de input.

Abaixo da lista, há um botão Load More que irá carregar e adicionar mais 10 pokémons na lista.

Ao clicar em um dos pokémons, você será redirecionado a uma página com informações detalhadas sobre o pokémon selecionado, incluindo:

- Nome
- Id
- Imagem do pokémon
- Habilidades e seus efeitos
- Os Tipos do pokémon
- Uma lista de movimentos do pokémon

Também se encontra no canto superior direito um botão para alternar o tema do site entre modo claro e escuro.

## Ferramentas utilizadas

- HTML, CSS e Javascript para a criação da estrutura do site;
- ReactJS para criar uma Single Page Application (SPA);
- Context API para mudar o tema do site ao clicar no botão de mudar o tema;
- Styled Components para estilizar a página;
- React Router Dom para navegação das páginas;
- PokéAPI para buscar as informações dos pokémons.

## Processo

Durante a criação do projeto, primeiro estudei e botei em prática os conceitos de como a API fornecida funcionava para eu poder me habituar a seu uso.

Comecei criando as páginas no React Router Dom para ter uma base de onde começar, dividindo entre a página principal com a lista de pokémons e a página com os detalhes do pokémon selecionado.

Depois, fui criando a estrutura da página e dividindo os trechos de código em componentes para uma melhor organização.

Primeiro estruturei a página, depois implementei as funcionalidades com Javascript e apenas no fim trabalhei com a estilização do projeto.

## Como rodar o projeto?

- Primeiro é necessário baixar a pasta do projeto no seu computador;
- Em seguida, abra o terminal na pasta e digite `npm install` para baixar todas as dependências do projeto;
- Após isso, digite `npm run dev` e aparecerá um link;
- Para clicar, pressione a tecla Ctrl e clique com o botão esquerdo nele;
- O projeto abrirá no seu navegador.

Para fechar o projeto, apenas vá no terminal e pressione Ctrl + C e o terminal irá parar de rodar o site e você poderá fechar o terminal.
