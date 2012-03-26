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