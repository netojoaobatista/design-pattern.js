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