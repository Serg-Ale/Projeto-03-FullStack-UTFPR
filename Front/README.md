# Projeto 2 - Desenvolvimento da Camada Frontend com React.js



## Descrição do Projeto

O Projeto 2 da disciplina Programação Web Fullstack consiste no desenvolvimento da camada Frontend de uma aplicação web utilizando a biblioteca React.js. Este projeto visa reimplantar as funcionalidades desenvolvidas no Projeto 1, porém utilizando React.js.

Cada equipe deve utilizar a mesma API JSON Aberta que foi utilizada no projeto anterior. Além disso, é necessário selecionar uma funcionalidade específica da biblioteca React.js, dentre as opções disponíveis, como useMemo, useReducer, useRef, forwardRef, memo, lazy e createPortal.

## Instruções de Execução

1. **Clone o Repositório:** `git clone https://github.com/seu-usuario/projeto-2.git`
2. **Instale as Dependências:** `npm install` ou `yarn install`
3. **Execute o Projeto Localmente:** `npm start` ou `yarn start`
4. **Acesse a Aplicação:** Abra seu navegador e visite `http://localhost:3000`

## Detalhes da Implementação

### Link para o projeto
[https://serg-ale.github.io/Projeto-02-FullStack-UTFPR/](https://serg-ale.github.io/Projeto-02-FullStack-UTFPR/)

### Principais componentes React

1. **Header.jsx:**
   - Descrição: Este componente representa o cabeçalho da aplicação, exibindo o título principal.
   - Funcionalidade: Exibe o título "Rick and Morty API Search".
   - Localização: `/src/components/Header.jsx`.

2. **Search.jsx:**
   - Descrição: O componente principal da busca, que inclui o seletor de tipo de busca e o campo de entrada.
   - Funcionalidade: Permite ao usuário selecionar o tipo de busca (personagem, localização ou episódio) e inserir o termo de pesquisa.
   - Localização: `/src/components/Search.jsx`.

3. **CharacterCard.jsx:**
   - Descrição: Componente para exibição dos detalhes de um personagem.
   - Funcionalidade: Renderiza os detalhes de um personagem, como nome, imagem, status, espécie e número total de episódios.
   - Localização: `/src/components/CharacterCard.jsx`.

4. **EpisodeCard.jsx:**
   - Descrição: Componente para exibição dos detalhes de um episódio.
   - Funcionalidade: Renderiza os detalhes de um episódio, como nome, data de lançamento e número do episódio.
   - Localização: `/src/components/EpisodeCard.jsx`.

5. **LocationCard.jsx:**
   - Descrição: Componente para exibição dos detalhes de uma localização.
   - Funcionalidade: Renderiza os detalhes de uma localização, como nome, dimensão e tipo.
   - Localização: `/src/components/LocationCard.jsx`.

6. **CardContainer.jsx:**
   - Descrição: Componente contêiner para encapsular os componentes de cartão (CharacterCard, EpisodeCard, LocationCard).
   - Funcionalidade: Fornece uma estrutura comum para os componentes de cartão, aplicando estilos e comportamentos consistentes.
   - Localização: `/src/components/CardContainer.jsx`.

7. **SearchSelect.jsx:**
   - Descrição: Componente de seleção do tipo de busca.
   - Funcionalidade: Permite ao usuário selecionar o tipo de busca (personagem, localização ou episódio) através de um menu suspenso.
   - Localização: `/src/components/SearchSelect.jsx`.


### Contexto e Custom Hooks

1. **SearchContext.js:**
   - Descrição: Contexto utilizado para compartilhar estados entre os componentes relacionados à busca na aplicação.
   - Funcionalidade: Armazena os estados de `searchSelect`, `searchInputValue`, `responseData` e `error`, permitindo que esses estados sejam acessados e atualizados por diferentes componentes.
   - Localização: `/src/context/SearchContext.js`.

2. **useDataFetching.js:**
   - Descrição: Hook personalizado utilizado para buscar dados da API com base nos parâmetros de busca fornecidos.
   - Funcionalidade: Utiliza o `useEffect` para executar a busca de dados da API quando o estado de `searchInputValue` ou `searchSelect` é modificado, e atualiza os estados de `responseData` e `error` com os resultados da busca.
   - Localização: `/src/hooks/useDataFetching.js`.

3. **useInputChange.js:**
   - Descrição: Hook personalizado utilizado para lidar com mudanças de entrada no campo de busca.
   - Funcionalidade: Utiliza o `useCallback` para memoizar a função `handleInputChange`, que atualiza o estado de `searchInputValue` com o valor do campo de entrada.
   - Localização: `/src/hooks/useInputChange.js`.


### Utilização de Hooks

1. **`useEffect` em `useDataFetching`:**
   - Descrição: Utilizado para realizar a busca de dados da API quando o estado de `searchInputValue` ou `searchSelect` é modificado.
   - Funcionalidade: Dispara a busca de dados da API sempre que ocorrem alterações nos estados de `searchInputValue` ou `searchSelect`.
   - Localização: `/src/hooks/useDataFetching.js`.

2. **`useCallback` em `useInputChange`:**
   - Descrição: Utilizado para memoizar a função `handleInputChange` e evitar recriação desnecessária em cada renderização.
   - Funcionalidade: Memoriza a função de manipulação de mudanças de entrada no campo de busca, otimizando o desempenho do componente.
   - Localização: `/src/hooks/useInputChange.js`.

3. **`useState` em `SearchContext`:**
   - Descrição: Utilizado para gerenciar os estados de `searchSelect`, `searchInputValue`, `responseData` e `error`.
   - Funcionalidade: Mantém os estados relacionados à busca na aplicação, permitindo o acesso e a atualização desses estados por diferentes componentes.
   - Localização: `/src/context/SearchContext.js`.

4. **`useMemo` em `useDataFetching`:**
   - Descrição: Utilizado para memoizar o resultado da busca de dados da API.
   - Funcionalidade: Memoriza o resultado da busca de dados da API, garantindo eficiência ao renderizar os componentes novamente apenas quando o conteúdo da requisição muda.
   - Localização: `/src/hooks/useDataFetching.js`.

### Atendimento aos Requisitos

1. **Busca com Envio de Parâmetros para a API JSON:**
   - Descrição: A aplicação realiza a busca de dados da API JSON enviando os parâmetros `searchSelect` (tipo de busca) e `searchInputValue` (termo de pesquisa).
   - Funcionalidade: Ao selecionar o tipo de busca (personagem, localização ou episódio) e inserir um termo de pesquisa, os parâmetros são enviados para a API JSON, que retorna os resultados correspondentes.
   - Implementação: Utiliza os estados de `searchSelect` e `searchInputValue` no hook `useDataFetching` para construir a URL da requisição à API.
   
2. **Verificação de Preenchimento de Campos Obrigatórios na Busca:**
   - Descrição: A aplicação verifica se o campo de entrada de pesquisa está preenchido antes de realizar a busca na API.
   - Funcionalidade: Antes de fazer a requisição à API, é verificado se o campo de pesquisa está vazio. Se estiver vazio, a busca não é realizada e nenhum resultado é exibido.
   - Implementação: Feita no hook `useDataFetching`, onde é verificado se o `searchInputValue` está vazio antes de fazer a requisição à API.

3. **Apresentação de Mensagens de Erro de Validação:**
   - Descrição: A aplicação apresenta mensagens de erro caso ocorra algum problema durante a busca na API.
   - Funcionalidade: Em caso de erro ao buscar os dados da API, a aplicação exibe uma mensagem indicando o problema ocorrido, como "Personagem não encontrado" ou "Erro ao buscar dados".
   - Implementação: O hook `useDataFetching` trata os erros ao realizar a busca na API e atualiza o estado de `error`, que é exibido na interface.

4. **Implementação de Componentes e Comunicação entre Componentes com a Context API:**
   - Descrição: Os componentes relacionados à busca utilizam a Context API para compartilhar estados e funcionalidades.
   - Funcionalidade: Os estados de `searchSelect`, `searchInputValue`, `responseData` e `error` são compartilhados entre os componentes `Header` e `Search` por meio do contexto `SearchContext`.
   - Implementação: Utiliza o contexto `SearchContext` para prover os estados e funções de manipulação de busca para os componentes envolvidos na busca.

5. **Implementação da Funcionalidade/Hook Selecionado (`useMemo`):**
   - Descrição: A funcionalidade selecionada foi o hook `useMemo`, utilizado para memoizar o resultado da busca de dados da API.
   - Funcionalidade: O resultado da busca é memoizado pelo `useMemo`, garantindo que os componentes sejam renderizados novamente apenas quando o conteúdo da requisição muda.
   - Implementação: Utilizado no hook `useDataFetching` para memoizar o resultado da busca de dados da API, melhorando a eficiência da aplicação.

6. **Implementação de Bibliotecas:**
   - **Tailwindcss:**
     - Descrição: Utilizado para simplificar o desenvolvimento de estilos, o Tailwindcss oferece uma abordagem utility-first, permitindo a criação rápida e flexível de interfaces.
   - **shadcn/UI:**
     - Descrição: Esta biblioteca fornece uma coleção de componentes de interface de usuário prontos para uso, ajudando a acelerar o desenvolvimento de aplicações web.

## Autor

Desenvolvido por *Sérgio Alexandre*
