# SocioDex

## 📚 Descrição Geral
A **SocioDex** é uma plataforma interativa e gamificada que proporciona uma experiência única para explorar a vida e as contribuições dos grandes pensadores da sociologia. Este site combina tecnologia de ponta e um design envolvente para oferecer informações detalhadas sobre os sociólogos, permitindo aos usuários interagir com mapas dinâmicos, visualizar informações personalizadas e participar de quizzes educativos. O sistema também conta com um painel administrativo completo para gerenciar os dados.

## ⚙️ Funcionalidades

### 1. **📈 Visualização de Sociólogos**
- **Cards Dinâmicos**: Cada sociólogo é representado em um card contendo:
  - Nome
  - Foto
  - Características principais
- **Informações Detalhadas**: Ao clicar em um card, uma nova página é aberta exibindo dados mais aprofundados sobre o sociólogo.

### 2. **🌍 Mapa Interativo**
- **API da Mapbox**: Integração com a API Mapbox para exibir marcações geográficas interativas.
- **Marcações Personalizadas**: Cada marcação no mapa inclui uma foto e informações do respectivo sociólogo.

### 3. **🎯 Quiz Educacional**
- **Perguntas sobre Sociólogos**: Um quiz interativo para testar o conhecimento dos usuários sobre os pensadores apresentados no site.
- **CRUD de Questões**: Painel administrativo para adicionar, editar e excluir perguntas do quiz.

### 4. **🔧 Sistema CRUD Completo**
- **Administração de Sociólogos**: 
  - Adicionar novos sociólogos.
  - Editar informações existentes.
  - Excluir socólogos.
- **Gestão de Dados Centralizada**: Todo o gerenciamento ocorre em uma interface intuitiva e segura.

## 💻 Tecnologias Utilizadas

### **Frontend**
- **🖋 HTML**: Estrutura do site.
- **🌈 CSS**: Estilização responsiva e atraente.
- **🔁 EJS**: Template engine para renderização dinâmica de conteúdo.

### **Backend**
- **⚡ Node.js**: Servidor backend robusto e escalável.
- **🚪 Express.js**: Framework para gerenciamento de rotas e lógica de aplicação.
- **📊 MongoDB**: Banco de dados NoSQL para armazenamento dos dados dos socólogos e perguntas do quiz.

### **Integrações**
- **🌎 Mapbox API**: Exibição de mapas interativos com marcações personalizadas.

### **Outras Ferramentas**
- **🔧 Git e GitHub**: Controle de versão e colaboração no desenvolvimento.
- **🛠️ Visual Studio Code**: IDE para desenvolvimento do projeto.

## 🏆 Principais Diferenciais
1. **Design Intuitivo**: Navegação fluida e interface atraente para todos os tipos de usuários.
2. **Interatividade**: Uso de mapas dinâmicos e quizzes educativos para engajar o usuário.
3. **Foco em Administração**: Sistema CRUD completo para facilitar a gestão de conteúdo.
4. **Escalabilidade**: Arquitetura modular que permite a expansão futura do projeto.

## 🔍 Como Utilizar
### Para Usuários Gerais
1. Acesse a página inicial para visualizar os sociólogos em forma de cards.
2. Clique em um card para acessar informações detalhadas.
3. Explore o mapa interativo para localizar sociólogos e suas contribuições.
4. Participe do quiz para testar seus conhecimentos.

## 🚀 Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie uma conta no MongoDB e no Mapbox para utilizar o banco de dados e a API do mapa:

   - Acesse MongoDB aqui: [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)
   - Acesse Mapbox aqui: [https://account.mapbox.com/auth/signup/](https://account.mapbox.com/auth/signup/)

4. Configure o arquivo `config.js` e `token.js` com suas credenciais respectivamente (exemplo abaixo):
   ```config.js
   mongoURI: 'mongodb+srv://[username]:[senha]@[nomeDoCluster].4mcic.mongodb.net/?retryWrites=true&w=majority&appName=[nomeDoCluster]'
   tokenAcess = '[Seu Token da Mapbox aqui]';
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. Acesse o site em [http://localhost:3000](http://localhost:3000).

## 🔄 Possibilidades de Expansão
- Integração com outras APIs para enriquecer os dados.
- Gamificação adicional para engajar ainda mais os usuários.
- Implementação de autenticação para os usuários gerais.

## ❤️ Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção de bug:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no GitHub.

## 📢 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

