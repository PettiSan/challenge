# BDServer Challenge
# Created by Filipe Petitemberte

# IMPORTANT
**Para a melhor experiência possível por favor alterar a data do seu computador para o dia `18/03/2020`**
**Assim todas as RN's poderão ser testadas sem nenhuma problema**

# Firebase Hosting
[Firebase Hosting do Projeto](https://challenge-afefa.web.app/)

- *Dados de acesso*
    - **Usuário**: `usuario.1@gmail.com`
    - **Senha**: `123456`

# Github repo
[Github repo](https://github.com/PettiSan/challenge)

# Google Drive zip folder


# Requirements
- **Node** `^10.13`
- **AngularCli** `^9.x`
- **NPM** `^6`

# How to run
- **clone** `git clone git@github.com:PettiSan/challenge.git`
- **npm install** `npm install` na pasta raiz do projeto
- **ng serve** `ng serve` na pasta raiz do projeto
- **acessar** `http://localhost:4200/` ou  [Acessar o projeto](https://challenge-afefa.web.app/)

# Unit tests
- **ng teste** `ng test` na pasta raiz do projeto

- *Existem apenas 3 testes, sendo um para cada uma das RN's*
- *Todos estão no mesmo arquivo* `'calendar.component.spec.ts'`

# How to use it
- alterar a data do computador para o dia **18/03/2020**
- fazer login com uma conta válida
- *sistema de votação*:
    - cada usuário do sistema terá sua conta prórpia
    - apenas o dia de "hoje" poderá receber votos, esse dia estará destacado no calendário com uma cor de background dourada e com um texto 'Votação aberta'
    - cada voto se dá com o ato de arrastar e soltar um dos nomes de restaurantes disponíveis na lista acima do calendário
    - caso o usuário arraste outro item da lista de restaurantes para o evento aberto do dia o sistema irá automaticamente remover o voto anterior `*RN-1`
    - o sistema já estará com alguns eventos(hardcoded) previamente cadastrados `*RN-3`
    - os nomes de restaurantes com a fonte mais opacidade estão bloqueados e não poderão ser votados visto que nesta versão hardcoded de eventos os restaurantes `'São Rafael'` e `'Porto dos Filés'` já foram votados naquela semana `*RN-2`

# Highlights
- Para o calendário foi utilizado o plugin **AngularCalendar** -> [AngularCalendar](https://mattlewis92.github.io/angular-calendar/#/kitchen-sink)
- Para a autenticação de usuário e hosting foi o utilizado o **Firebase**
- Para a padronização de layout foi utilizado o **AngularMaterial** -> [AngularMaterial](https://material.angular.io/guide/getting-started)
- Para o SCSS foi utilizado o plugin **Sass Mediaquery Singleline** -> [Sass Mediaquery Singleline](https://github.com/GregoriSoria/sass-mediaquery-singleline)
    - obs: Não foi uma 'experiência' utilizar o plugin **Sass Mediaquery Singleline**, eu já venho à algum tempo desenvolvendo meus projetos sem utilizar 'px' como valor no para o CSS.

# Futures Features
- Implementar melhores casos de testes unitários.
- Uma autenticação mais segura, isso incluiria:
    - uma criação de uma tabela no banco de dados do Firebase associando os usuários com os usuários autenticados
    - isso possibilitaria um sistema de 'auth' no projeto não permitindo o usuário de acessar o calendário sem estar logado autenticado e com seus dados gravados na localStorage
- Salvar e consumir os dados dos eventos no Firebase
- Uma tela com gráficos ou algum tipo de relátorio sobre os eventos passados, restaurantes mais escolhidos, menos escolhidos, etc..
- Uma opção para adicionar novos restaurantes a lista
