# CinePlus react

### **Visão Geral do Projeto CinePlus**

O CinePlus é uma plataforma abrangente de guia de filmes projetada para fornecer aos usuários uma experiência perfeita para gerenciar e explorar conteúdo de filmes. O projeto abrange uma pilha tecnológica completa e vários componentes para garantir uma solução eficiente, escalável e amigável.

**Backend: API com Express e Node.js**

O backend do CinePlus é construído usando Express e Node.js, fornecendo uma API robusta para gerenciar autenticação de usuários, dados de filmes e categorias. A API é desenvolvida em TypeScript para maior segurança de tipos e melhor experiência de desenvolvimento.

### **Tecnologias Utilizadas**

- **Backend:** O backend é desenvolvido com Node.js, utilizando o framework Express e TypeScript para garantir segurança de tipos e melhor experiência de desenvolvimento. MongoDB é usado como banco de dados, com Mongoose para modelagem de dados.
- **Frontend Web:** O frontend web é criado com React e TypeScript, oferecendo uma interface de usuário responsiva e intuitiva. O design é personalizado no Figma.
- **Aplicativo Mobile:** O aplicativo mobile é construído usando React Native e TypeScript, proporcionando a mesma funcionalidade do frontend web, mas otimizado para dispositivos móveis.
- **Contêineres:** Docker é utilizado para facilitar a implantação e garantir a consistência do ambiente. Docker-compose é usado para orquestrar múltiplos contêineres.
- **Teste de API:** Postman é empregado para testar os endpoints da API, garantindo que todas as funcionalidades funcionem conforme o esperado.

**Funcionalidades:**

- **Gerenciamento de Usuários:** Cadastro de novos usuários, funcionalidade de login, hash de senha e gerenciamento de sessões.
- **CRUD de Filmes:** Criar, ler, atualizar e excluir filmes. Cada filme possui detalhes como título, sinopse, duração, categoria e nota.
- **Integração com MongoDB:** Utiliza MongoDB para armazenar dados de usuários, detalhes de filmes e categorias. O Mongoose é usado para definição de esquemas e modelagem de dados.
- **Suporte a Docker:** O backend é containerizado usando Docker. Comandos Docker são incluídos no arquivo **`package.json`** para fácil gerenciamento e implantação.

**Arquivos e Diretórios Principais:**

- **src/controllers:** Contém controladores para lidar com requisições da API.
- **src/models:** Define esquemas e modelos do Mongoose.
- **src/routes:** Contém definições de rotas para diferentes endpoints da API.
- **src/middleware:** Inclui middleware para autenticação e tratamento de erros.
- **docker-compose.yml:** Configuração para executar a aplicação em contêineres Docker.
- **package.json:** Contém scripts para construir, executar e gerenciar a aplicação.

### **Frontend: Aplicação Web com React e TypeScript**

O frontend web do CinePlus é desenvolvido usando React e TypeScript, oferecendo uma interface de usuário responsiva e intuitiva, desenhada no Figma. O frontend interage com a API backend para fornecer uma experiência de usuário perfeita.

**Estrutura de Arquivos:**

- **client/src/api:** Contém definições para chamadas à API.
- **client/src/app:** Contém a configuração principal da aplicação.
- **client/src/assets:** Armazena arquivos estáticos como imagens, fontes, etc.
- **client/src/components:** Componentes de UI reutilizáveis, como botões, formulários e elementos de navegação.
- **client/src/domains:** Contém lógica de negócios específica de cada domínio.
- **client/src/services:** Serviços para comunicação com a API e outras funcionalidades.
- **client/src/themes:** Contém definições de temas e estilos globais.
- **client/src/utils:** Funções utilitárias reutilizáveis em toda a aplicação.
- **client/src/views:** Principais páginas da aplicação como Home, MovieDetails, Login e Register.

**Funcionalidades:**

- **Interface de Usuário:** Telas de login e registro, listagem de filmes, página de detalhes do filme.
- **Design Responsivo:** Garante uma experiência consistente em diferentes dispositivos e tamanhos de tela.
- **Design Customizado:** Um design único e envolvente criado no Figma, aumentando o engajamento do usuário.

### **Aplicação Mobile: React Native com TypeScript**

O aplicativo mobile do CinePlus é construído usando React Native e TypeScript, oferecendo a mesma funcionalidade principal da aplicação web, mas otimizado para dispositivos móveis.

**Estrutura de Arquivos:**

- **app/src/@types:** Tipos TypeScript personalizados.
- **app/src/api:** Definições para chamadas à API.
- **app/src/app:** Configuração principal da aplicação.
- **app/src/assets:** Arquivos estáticos como imagens e fontes.
- **app/src/components:** Componentes de UI reutilizáveis.
- **app/src/config:** Configurações da aplicação.
- **app/src/context:** Gerenciamento de estado global usando Context API.
- **app/src/services:** Serviços para comunicação com a API e outras funcionalidades.
- **app/src/themes:** Definições de temas e estilos globais.
- **app/src/utils:** Funções utilitárias reutilizáveis.
- **app/src/views:** Principais telas da aplicação, como Home, MovieDetails, Login e Register.

**Funcionalidades:**

- **Autenticação de Usuários:** Telas de login e registro.
- **Listagem de Filmes:** Navegar e buscar filmes, visualizar detalhes dos filmes.
- **UI Responsiva e Intuitiva:** Garante uma experiência de usuário suave em dispositivos Android e iOS.

### **Teste da API: Postman**

Coleções do Postman são criadas para testar os endpoints da API, garantindo que todas as funcionalidades funcionem conforme o esperado. A coleção inclui testes para cadastro de usuários, login, operações CRUD de filmes e gerenciamento de categorias.

**Funcionalidades:**

- **Variáveis de Ambiente:** Gerenciamento de diferentes ambientes para desenvolvimento, staging e produção.
- **Testes Automatizados:** Scripts para verificar respostas e comportamentos da API.

### **Integração com Docker**

O CinePlus utiliza Docker para fácil implantação e consistência do ambiente. Contêineres Docker garantem que todos os componentes do projeto funcionem perfeitamente juntos, independentemente do ambiente de desenvolvimento local.

**Principais Funcionalidades do Docker:**

- **Serviços Containerizados:** Cada parte da aplicação (backend, frontend, banco de dados) roda em seu próprio contêiner.
- **docker-compose:** Simplifica a orquestração de múltiplos contêineres Docker.
- **Scripts de Pacote:** Comandos no **`package.json`** para construir, iniciar, parar e gerenciar contêineres Docker.
