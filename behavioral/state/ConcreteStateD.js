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