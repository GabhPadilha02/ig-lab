# Ignite-Lab

## Projeto do Ignite-Lab, criado junto ao percorrer das aulas da Rocketseat

## Tecnologias ultilizadas até o momento:
* React JS
* Typescript
* Vite
* GraphQL
* Hygraph
* Apollo Client
* TailwindCSS
* PostCSS

🚀 O projeto consiste em uma plataforma de aulas, onde a mesma está integrada a um Headless CMS, aqui utilizamos o Hygraph, que como o nome já diz, ultiliza Graphql!

🚀 A página inicial, inscreve um novo usuário, coleta e cria esses dados dentro do nosso CMS, redirecionando o mesmo para a página do evento, onde será disponibilizada as aulas! No Graphql, podemos fazer Query ou Mutations, nesse caso, utilizamos uma Mutation para criar esses dados em nosso CMS.

🚀 Já no caso das aulas, as mesmas serão criadas lá dentro do Hygraph, no menu content, onde a interface é muito amigável, ou seja, qualquer pessoa que não saiba programação, consegue postar e editar as aulas! Nesse caso, no nosso front-end utilizamos uma Query do graphql para manipularmos as informações provindas do Hygraph!

🚀 O projeto foi todo desenvolvido durante as aulas do Ignite, porém ao fim das aulas, ficou um desafio "extra" que seria deixar a interface 100% responsiva, desafio que também foi concluído! ✔
