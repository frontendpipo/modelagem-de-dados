/* Modelagem de Dados através do Modelo 
Entidade-relacionamento usando DER (Diagrama Entidade-relacionamento)

Ciclo de vida de software:
 Estudo Inicial;
 Projeto (MER e DER);
 Implementaçãoo e carga;
 Teste e avaliação;
 Operação;
 Manutenção e evolução.
//
Desenvolvimento em equipe.

Dicionário de Dados:
 Descrição dos nomes, tabelas, relações e atributos;
 Tipos de dados (domínio) e seus respectivos tamanhos;
 Descrição detalhada de chaves;
 Usuários e permissões.
// 
Descrição da situação-problema:
 No bairro onde você mora há um centro comunitário que recebeu
 alguns livros usados de todos os tipos: romances, pesquisas científicas,
 escolares, infantis etc.
 Surgiu a ideia de criar uma pequena biblioteca para disponibilizar
 os livros.
Resolução da situação-problema:
 Instalar uma OS Linux e um SGBD freeware como o Kexi ou o Base.
 (Telas intuitivas para usuários leigos)
Ajudar nos empréstimos e doações: modelo lógico textual do banco de dados.
 Livro (#codLivro, Titulo, &codTipoLivro, &IdAutor, &IdEditora);
 Tipo de livro (#codTipoLivro, Tipo de Livro);
 Autor (#IdAutor, Nome);
 Editora (#IdEditora, Editora).
 Pessoa (#matrículaPessoa, Nome, DtNasc, NomeResponsável, Endereço, foto);
 Empréstimo (#codEmpréstimo, DtRetirada, DtDevolução, &codLivro, &matriculaPessoa).
// 

MySQL: EER Diagram.

Modelagem de dados através do modelo identidade-relacionamento usando UML.

Programação Orientada a Objetos
 Paradigma amplamente utilizado e adotado por importantes linguagens,
 como: Java, C# e Python.
 Existe uma impedância entre os modelos OO e Realacional.
 Podemos utilizar ferramentas de modelagem de aplicações orientadas a
 objetos, para modelar o banco de dados.
 Quando converter o banco de dados em um programa/software,
 vamos transformar as TABELAS em CLASSES.
//
Conceitos base POO (Programação Orientada a Objetos)
 O que é um objeto e seus tipos?
 O que é uma classe?
 O que são atributos e comportamentos de uma classe/objeto?
  Uma classe "pessoa" seria um objeto,
 e seus tipos seriam as informações na classe.
// 

DIAGRAMA DE CLASSE

CARRO      = Nome

Ano
Modelo     = Atributos
Placa

Andar ()   
Freiar()   = Métodos

//

UML (Linguagem de Modelagem Unificada), é composta pelos
seguintes diagramas:
 Classe;
 Objetos;
 Caso de Uso;
 Sequência;
 Atividades;
 Estados;
 Componentes.
// 

RESOLUÇÃO DA SITUAÇÃO-PROBLEMA.
 Cliente: Salão de Beleza da Dona Áurea;
 Objetivo: Informatizar o atendimento e o controle dos clientes
 e dos funcionários.
 Desenvolva o Modelo ER e a documentação das tabelas geradas:
 - Cliente;
 - Fornecedor de Produtos e Serviços;
 - Produtos Comprados;
 - Serviços executados;
 - Funcionários.
Análise levantada.
 Qual funcionário realizou o serviço e como controlar
 o agendamento de horários dos clientes?
// 

Reutilizando especificações:
 Quando definimos uma tabela, estamos especificando as características
 de uma estrutura de dados, deixando para o implementador, no caso
 do banco de dados, a responsabilidade de viabilização.
 Na orientação a objetos, isso se pratica da mesma forma, diferenciando
 apenas nos detalhes da implementação.
//

HERANÇA NA PROGRAMAÇÃO ORIENTADA A OBJETOS.
 Classe generalizada com atributos comuns e classes
 específicas com atributos específicos.
 Generalização é quando várias classes específicas têm atributos
 em comum. Uma entidade contém a outra.
 - Restrição de Disjunção: Uma entidade pode pertencer a, no máximo,
 um subconjunto de entidade especializada.
 - Sobreposição: Uma entidade especializada pode pertencer a mais de
 um subconjunto de entidades ao mesmo tempo.
 - Parcial: nem toda ocorr~Encia da entidade genérica possui uma
 ocorrência correspondente em uma entidade especializada.
 - Total: para cada ocorrência da entidade genérica existe sempre uma
 ocorrência em uma das entidades especializadas.
// 

Ferramentas CASE de modelagem do DER.
 Computer Aided Software Engineering.
 (Software produzindo software!)
Classificadas em:
 - LowerCASE;
 - UperCASE.
 A junção das duas é a IntegralCASE.
Tipos de ferramentas CASE:
 P/ geração de código;
 Geração de documentação;
 Execução de testes;
 Geração de relatórios.
Ferramentas CASE para MER:
 Criação de gráficos;
 Modelagem de Banco de Dados;
 Geração de scripts SQL;
 Forward Engineering;
 Reverse Engineering;
 Documentação.
Padrão UML. Ex.: Astah; Rose; Draw.io.

*/
