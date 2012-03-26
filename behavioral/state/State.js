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