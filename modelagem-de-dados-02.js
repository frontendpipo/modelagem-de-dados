/* Modelos de Banco de Dados:

 Um modelo de dados é um deatalhamento dos tipos de informações que serão guardadas em um banco de dados (COUGO, 1997).
 A modelagem de dados é um processo progrssivo, partindo de uma compreensão simples de um problema, e na medida que haja um melhor entendimento, então o nível de detalhes se ampliará.

COMO MODELAR? Utilizamos linguagem de modelagem de dados:
 Linguagem textual: formal, menos formal e informal.
 Linguagem gráfica.
FASE DE DESENVOLVIMENTO:
 De acordo com Abreu e Machado, o projeto de um sistem da informações é uma atividade complexa, que inclui planejamentos, especificações e desenvolvimento de vários componentes.
 Se faz necessário que haja uma sequência lógica, pautada em organização e técnicas, para guiar o processo d modelagem do banco de dados.
SEQUÊNCIA ESTRUTURADA:
 Análise de requisito - Modelo conceitual - Modelo lógico - Modelo físico (Loop).

Cougo levantou os seguintes pontos que devem ser considerados na análise de requisito:
 Abrangência;
 Nível de detalhamento;
 Tempo para a produção de modelo;
 Recursos disponíveis.

FASES DE MODELAGEM:
Modelo conceitual:
 A modelagem conceitual é uma descrição concisa das informações
 que o fostware deverá possuir, de acordo com seus requisitos.
 Representação do que precisa ser realizado, e não como deverá ser realizado.
 Utilizamos linguagens textuais ou gráficas,
 sem a preocupação com regras de modelagem de dados, que são inerentes ao modelo utilizado.
//  Visão de nível macro;
 Independência de hardware e software;
 Focado no problema e não na solução.
Modelo Entidade Relacionamento:
 Utilizamos para descrever as entidades e seus relacionamentos.
 Um relacionamento consiste na relação que existe entre duas ou mais entidades.
Modelo lógico:
 Aplicamos o conceito de modelos de entidade e relacionamentos com o foco na criação do banco de dados.
 Entidade são transformadas em tabelas.
 Relacionamentos são reproduzidos ou criados.
 Tipos de dados e suas escalas são definidos.
Modelo físico:
 Determinamos as estruturas de armazenamento interno, as chaves (ou índices)
 e outras considerações relacionadas à aplicação do banco de dados.
// Ex: CREATE TABLE Departamento (cod_dep int primary key not null, departamento varchar(150).

Modelagem de dados através do modelo entidade-relacionamento.
 Permite aperfeiçoar o projeto de banco de dados;
 Modelo amplamente utilizado em implementações de SGBD (aula 01);
 Elaborado por Edgar F. Cood (1970);
 Adoção inicia-se na década de 1987.
Definindo o MER:
 Abordagem relacional para do princípio que as informações em um base de dados podem ser consideradas com relações matemáticas, e que devem ser representadas em forma de tabelas (ABREU; MACADO, 2009).
Vantagens de MER (ainda segundo Abreu e Machado):
 Independência total dos dados;
 Visão múltipla dos dados;
 Melhor comunicação entre analistas e usuários comuns;
 Redução de tempo: desenvolvimento e manutenção;
 Segurança e agilidade no gerenciamento.
// mODELO PETER CHEN E MODELO JAMES MARTIN.

Definindo um modelo conceitual.

*Situação-problema*
 Você como um analista de sistemas, deverá efetuar o levantamento
 dos requisitos para saber as necessidades do cliente, e assim iniciar o processo de modelagem.
 Uma oficina mecânica de carros importados deseja o controle de peças usadas nos serviços efetuados.
Análise já levantada.
 Necessário o cadastro de clientes e seus carros;
 Existe um pequeno estoque de peças (de alto giro);
 Controle de atividades dos funcionários;
 Controle sobre os serviços executados;
 Sem agendamento prévio, atendimento por ordem de chegada (clientes VIPs com preferência).
Devemos definir o modelo conceitual, identificando: entidades, atributos e SGBD.

TIPOS DE ENTIDADES E RELACIONAMENTOS.
 Entidades fortes;
 Entidades fracas ou dependentes;
 Entidades agregadas;
 Entidades subordinadas;
 Entidades associativas.
GRAU DE CARDINALIDADE.
 A cardinalidade atribui um valor específico ao relacionamento,
 expressando a faixa de ocorrências permitidas (mínimas e máximas) entre as tabelas.
Grau de relacionamento:
 Unário, binário, ternário, quadrinário e n-ário.
Graus de cardinalidade:
 1-1 / 1-N / N-1 / N-N.
// Criando um modelo entidade-relacionamento.

*Situação-problema*
Você estará trabalhando no banco de dados de uma oficina mecânica.
Identifique as entidades e crie o MER de forma gráfica e textual,
com os seguintes objetivos atendidos:
 Principais campos de cada tabela;
 Chaves;
 Chaves estrangeiras;
 Tabelas associativas.
// Diagrama de Entidade-Relacionamento (DER).

Objetivos:
 Preparação para implementação física do banco de dados;
 Possibilita uma visão mais técnica relativa à estrutural real do banco de dados.
// CHAVE PRIMÁRIA, CHAVE PRIMÁRIA COMPOSTA, CHAVE SUBSTITUTA, CHAVE ESTRANGEIRA. */