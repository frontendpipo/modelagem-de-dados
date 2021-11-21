/*
NORMALIZAÇÃO DE DADOS NA COMPUTAÇÃO.
 Processos de modelagem visam o refinamento.
 Devemos evitar ao máximo a redundância.
A normalização é uma tecnica para avaliar e corrigir estruturas
e tabelas, ao modo de tornar mínimas as redundâncias.
 Vantagens:
 - Diminuição de dados repetidos;
 - Aumento de performance;
 - Armazenamento de forma lógica;
 - Facilidade na criação de consultas;
 - Facilidade na manutenção dos dados.
// 

RESOLUÇÃO DA SITUAÇÃO-PROBLEMA.
 Uma pequena loja de material de construção faz o controle dos produtos
 levados pelos clientes em um caderno com fichas coladas de forma manual.
 Banco de dados para agilizar o processo de controle e consulta
 de informações.
 - Cliente: Ficha; Cliente; RG; CPF; Data; Cidade; Endereço; UF.
 - Produtos: Código; Descrição; Quantidade; Preço unitário; Preço total.
// 

Normalizando os dados.
 Forma Normal Boyce-Codd: Se baseiam na dependência funcional entre
 atributos de uma entidade do banco de dados e nas chaves primárias;
 Segundo elas: 1FN, 2FN, 3FN e 4FN.
Dependência Funcional (Exemplificação)
 Dados dois conjuntos de atributos X e Y de uma entidade pode-se afirmar
 que:
 - Y é dependente funcional de X ou
 - X determina Y ou
 - Y depende de X, logo
 - Podemos representar a dependência funcional como: X -> Y.
Em uma dependência funcional TOTAL, o segundo elemento precisa do primeiro
para poder existir.
 Ex.: Fiscal responsável por um bairro. O elemento "fiscal" necessita
 do elemento "bairro" pelo qual ele é responsável.
*/
 
 
