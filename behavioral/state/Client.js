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