({
	getAccount : function(component) {
		let action = component.get("c.getAccountNR")
        /*
        SetCallBack: define a função de retorno de uma chamada que é executada após o retorno de uma ação do apex
        verifica se irá ativar
        */
        
        
        action.setCallback(this, function(response){
            //há 3 tipos de respostas(status): sucess, error, ou incomplete
        	let state = response.getState()
            console.log(state)
            
            if(state == "SUCCESS") {
                component.set("v.accs", response.getReturnValue());
                console.log(responde.getReturnValue())
            }
        })
        //da acesso a biblioteca do Aura e enfileira as ações do fron do servidor
        $A.enqueueAction(action);
	}
})
