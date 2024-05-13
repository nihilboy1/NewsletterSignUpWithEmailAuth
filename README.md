# Newsletter SignUp With Email Auth

Esta é uma aplicação simples desenvolvida para capturar emails de usuários interessados em receber newsletters. A aplicação possui versões para dispositivos móveis e desktop, proporcionando uma experiência consistente em diferentes plataformas.

## Acesse o App

https://newslettersignupwithemailauth.netlify.app/

<hr/>
<img src="https://i.imgur.com/MSI4FSu.png" style="width:100%" />

## Funcionalidades Principais

- **Cadastro na Newsletter:** Na página inicial, os usuários são convidados a inserir seu email para se cadastrarem na newsletter.
- **Envio de Código de Autenticação:** Após inserir um email válido, um código de autenticação de 6 dígitos é enviado para o endereço de email fornecido.
- **Verificação de Código:** Após o envio do código, a página inicial é atualizada para solicitar o código de autenticação. Se o código correto for inserido, o usuário é redirecionado para a página de sucesso.
- **Redirecionamento de Página:** Tentativas de acessar a página de sucesso sem fornecer o código de autenticação correto resultarão no redirecionamento de volta para a página inicial.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router Dom:** Para gerenciamento de rotas na aplicação React.
- **Tailwind CSS:** Framework de estilização CSS utilizado para design responsivo e modular.
- **Express:** Framework web para Node.js utilizado para criar APIs RESTful.
- **NodeMailer:** Módulo Node.js para envio de emails.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática à linguagem.
- **Axios:** Cliente HTTP baseado em Promise para fazer requisições HTTP no navegador e no Node.js.
- **Vite:** Construtor de projetos react com recarga rápida para aplicativos web modernos.

## Estrutura do Projeto

### Frontend

- **public:** Arquivos estáticos como HTML, imagens, etc.
- **src:** Contém os arquivos de código-fonte da aplicação.
- **src/components:** Componentes React menores e reutilizáveis.
- **src/pages:** Páginas maiores, que utilizam componentes os componentes
- **src/hooks:** Hooks reutilizaveis
- **src/services:** Conexão com serviços externos, como Axios
- **src/routes:** Lógica de roteamento de páginas

### Backend

- **.env:** Guarda informações sensíveis, como email e senha do Gmail
- **src:** Contém os arquivos de código-fonte do backend.

## Contribuindo

Contribuições são bem-vindas! Se você deseja sugerir melhorias, reportar bugs ou contribuir com código, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
