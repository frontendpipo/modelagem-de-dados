/* Sistemas Gerenciadores de Bancos de Dados:

1. Oracle;
2. MySQL;
3. Microsoft SQL Server;
4. PostgreSQL (SGBDRO);
5. IBM DB1. 

Proteção e Recuperação de Dados;

Interação = Transação
 Processo ou determinado programa que pode incluir vários
 ou parte de bancos de dados, realizando atividades como consultas,
 alterações e até exclusão de informações da base de dados;

Requisitos de um SGDB - ACID:
 A - Atomicidade;
 C - Consistência;
 I - Isolamento;
 D - Durabilidade;

Resolução da SP:
 Uma empresa familiar de pequeno porte, com atendimento mensal de aprox. 30 clientes
Desenvolva um relatório de informações sobre o cliente, e ainda suas necessidades de
utilização do SGBD mais apropriado.
 1. Devemos avaliar o volume de dados gerado (capacidade de armazenamento);
 2. Quantidade de aplicações/usuários interagindo com SGBD;
 3. Subestimar -- Superestimar -- Cloud Computing;
 4. SGBD Freeware .vs. SGBD Licenciado;
 5. SGBD Cloud.

Banco de Dados Relacional;

Modelagem de Dados:
 Baseado na teoria de conjuntos da álgebra relacional.
 Um 'modelo de dados' é a representação abstrata e simplificada de um sistema real (gráfico).

Apoio à decisão:
 Não é um mero repositório de dados;
 Possibilita a produção de inteligência de negócio;
 Facilita a tomada de decisões;
 Sistemas de apoio à decisão visam obter informações de alto nível
 a partir de informacões detalhadas armazenadas nos SGBDs.

Dados X Informações;

Data Warehouse:
 Arquivo ou repositório de informações obtidas de várias origens (bancos de dados)
 e armazenados em um único local e com um esquema unificado, permitindo consultas
 para o apoio à decisão.
Gerando valor em um DW:
 Através da mineração de dados ou 'Data Mining', conseguimos analisar os bancos de dados
 de forma semiautomática, e assim responder à perguntas estratégicas em tempo apropriado.

OLTP (Online Transaction Processing, Transações em Tempo Real):
 Operações de rotina;
 Baixo desempenho em consultas;
 Sem histórico de consultas;
 Estruturas convencionais de armazenamento;
 Dados voláteis.
OLAP:
 Operações analíticas;
 Alto desempenho em consultas;
 Possibilita histórico de consultas;
 Armazenamento em DW;
 Dados históricos e não voláteis.
*/