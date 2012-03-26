State design pattern
====================

Como você está? Uma abordadem sobre State design pattern em Javascript
----------------------------------------------------------------------

Tentei deixar o título o mais intuitivo possível para tentar representar a ideia
sobre State Design Pattern. Antes de começar a falar sobre State, queria apenas
deixar claro um ponto de vista meu, altamente pessoal, mas que vai de encontro
com uma tradução amplamente aceita:

É comum vermos por ai a tradução padrão de projeto para design pattern. Vejam,
em um único projeto, podemos ter N problemas recorrentes de design, problemas
esses que podem ser resolvidos com um ou N design patterns ou padrões de design.
Então, caso você veja, em qualquer texto que eu tenha escrito, o termo padrão de
design, saiba que estou falando sobre design pattern ou, se preferir, padrão de
projeto.

Outro ponto importante é que padrões de design são como remédios, você não vai
tomar um remédio só porque achou o rótulo bonito. Utilizar um padrão de design,
sem ter um problema de design, certamente fará com que você passe a ter um.
Então, antes de decidir sobre utilizar ou não um padrão de design, tome o cuidado
de ler sua aplicabilidade.

Agora, sobre State, sabemos que os objetos possuem características e comportamentos,
porém, existe uma grande diferença entre ser e estar. Por exemplo: Imaginem uma
garota linda, mas que de tão desarrumada nesse instante, está feia. Quando falamos
sobre estado, estamos falando sobre a condição atual de determinado objeto, não
sobre as características que diferenciam determinado objeto de outros objetos.
Uma porta, continuará tendo as características de uma porta, independente de estar
aberta ou fechada. Mas estando aberta, não podemos abri-la e estando fechada, não
podemos fechá-la. Ainda aberta, não tem sentido trancá-la, afinal, se está aberta,
a tranca não servirá de nada. O ponto onde quero chegar é o relacionamento entre
as coisas se dá através de seus comportamentos e, algumas vezes, o comportamento
das coisas varia segundo seu estado.

Usamos State quando o comportamento de um objeto depende de seu estado atual e é
necessário mudá-lo em tempo de execução ou quando temos várias condicionais que
dependem do estado do objeto, por exemplo, se o checkbox estiver marcado, faça
isso, senão, faça aquilo. Imaginem que essa verificação condicional de estado
repete-se para todas as operações do objeto, ou seja, temos uma repetição de
verificação que poderia ser encapsulada em objetos de estado.

A estrutura de State é a seguinte:
----------------------------------

![State structure](http://img815.imageshack.us/img815/2317/structuret.png)

Temos três participantes ai:

*Context* define a interface que nossos Clients utilizarão, por exemplo, em uma
conexão FTP, open, close, put, get são operações que podem ser definidas no
Context. O Context armazenará uma instância de um objeto State, que define o
estado atual do objeto.

*State* define a interface para encapsular o comportamento associado com
determinado estado.

*ConcreteStateA*, *ConcreteStateB*,etc. Cada classe concreta de State implementa
o comportamento associado com o estado do Context.

Implementação:
--------------

*State.js*
	/**
	 * Define a interface para encapsular o comportamento associado com um estado
	 * específico.
	 * @constructor
	 */
	function State() {}
	
	State.prototype = {
		/**
		 * Operação A
		 * @param {Context} context
		 */
		operationA: function(context){console.log("operação indisponível");},
		
		/**
		 * Operação B
		 * @param {Context} context
		 */
		operationB: function(context){console.log("operação indisponível");},
		
		/**
		 * Operação C
		 * @param {Context} context
		 */
		operationC: function(context){console.log("operação indisponível");},
		
		/**
		 * Operação D
		 * @param {Context} context
		 */
		operationD: function(context){console.log("operação indisponível");}
	};
	
*ConcreteStateA.js*
	/**
	 * Implementação do estado A
	 * @constructor
	 */
	function ConcreteStateA(){}
	ConcreteStateA.prototype = new State();
	
	/**
	 * Implementação do comportamento da operação A para esse estado específico.
	 * @param {Context} context
	 */
	ConcreteStateA.prototype.operationA = function(context) {
		console.log("Operação A executada");
		context.changeState(new ConcreteStateB());
	};
	
*ConcreteStateB.js*
	/**
	 * Implementação do estado B
	 * @constructor
	 */
	function ConcreteStateB(){}
	ConcreteStateB.prototype = new State();
	
	/**
	 * Implementação do comportamento da operação B para esse estado específico.
	 * @param {Context} context
	 */
	ConcreteStateB.prototype.operationB = function(context) {
		console.log("Operação B executada");
		context.changeState(new ConcreteStateC());
	};
	
*ConcreteStateC.js*
	/**
	 * Implementação do estado C
	 * @constructor
	 */
	function ConcreteStateC(){}
	ConcreteStateC.prototype = new State();
	
	/**
	 * Implementação do comportamento da operação C para esse estado específico.
	 * @param {Context} context
	 */
	ConcreteStateC.prototype.operationC = function(context) {
		console.log("Operação C executada");
		context.changeState(new ConcreteStateD());
	};
	
*ConcreteStateD.js*
	/**
	 * Implementação do estado D
	 * @constructor
	 */
	function ConcreteStateD(){}
	ConcreteStateD.prototype = new State();
	
	/**
	 * Implementação do comportamento da operação D para esse estado específico.
	 * @param {Context} context
	 */
	ConcreteStateD.prototype.operationD = function(context) {
		console.log("Operação D executada");
		context.changeState(new ConcreteStateA());
	};

*Context.js*
	/**
	 * Interface que os Clients conhecem e sabem utilizar, poderia ser uma conexão
	 * de banco de dados, FTP, SSH, etc.
	 * 
	 * @constructor
	 * @param {State} state Estado inicial
	 */
	function Context(state){
		if (state===undefined) state = new ConcreteStateA();
		
		this.state = state;
	}
	
	Context.prototype = {
		/**
		 * Essa operação é utilizada para variar o estado do Context
		 * @param {State} state O novo estado do Context.
		 */
		changeState: function(state){
			this.state = state;
		},
		
		/**
		 * Operação A
		 */
		operationA: function() {
			this.state.operationA(this);
		},
		
		/**
		 * Operação B
		 */
		operationB: function() {
			this.state.operationB(this);
		},
		
		/**
		 * Operação C
		 */
		operationC: function() {
			this.state.operationC(this);
		},
		
		/**
		 * Operação D
		 */
		operationD: function() {
			this.state.operationD(this);
		}
	};
	
*Client.js*
	/**
	 * Um client que utiliza a interface do Context para fazer alguma coisa.
	 */
	var Client = {
		/**
		 * Utiliza a interface do Context para fazer alguma coisa
		 * @param {Context} context
		 */
		execute: function(context) {
			context.operationA();
			context.operationD();
			context.operationB();
			context.operationC();
		}
	};
	
	Client.execute(new Context());
	
Como podemos ver, o Client conhece apenas o Context, ele sabe como utilizar sua
interface, mas desconhece como as coisas acontecem. No exemplo acima o Client
executa as operações em sequência e a saída é a seguinte:

ConcreteStateA - Operação A executada
ConcreteStateB - Operação B executada
ConcreteStateC - Operação C executada
ConcreteStateD - Operação D executada