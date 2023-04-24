({
    confirma : function(component, event, helper) {
        var tst = $A.get("e.force:showToast");
        tst.setParams({
            title: '',
            message: 'Material Criado Com Sucesso!',
            type: 'success',
            duration: 4000,
            mode: 'dismissible'
        });
        tst.fire();
        /*
        //getParams obtem um conjunto de inf do evento
        var registroCriado = event.getParams()
        console.log(registroCriado.response.id)
      	var navService = component.find("navService")
        
        //direcionamento de página
        var pageReference = {
            "type": 'standard_recordPage',
            "attributes": {
                "recordId": registroCriado.response.id,
            	"actionName": 'view',
            	"objectApiName": 'materialCompraInterna'
            }  
        }
        
        console.log(pageReference)
        component.set("v.pageReference", pageReference)
        var redirect = component.get("v.pageReference")
        navService.navigate(redirect)
        */
	},
    
    handleReset: function(cmp, event, helper) {
        cmp.find('field').forEach(function(f) {
   	    f.reset(); 
    	});
	}
})
