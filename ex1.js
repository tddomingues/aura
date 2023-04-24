({
	showToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast")
        
        toastEvent.setParams({
            "title": "",
            "message": "Lead Criado Com Sucesso",
            "type": "success"            
        })

        toastEvent.fire()
	},
    
    handleReset: function(cmp, event, helper) {
        cmp.find('field').forEach(function(f) {
   	    f.reset(); 
    	});
	}
})
