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