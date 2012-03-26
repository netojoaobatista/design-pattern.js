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