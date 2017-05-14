export var TestEmitter = {

    showSectionRequest: function($scope, sectionId) {
        var a = '';
        var b = {   // ok
            'test': 'value'
        };
        var payload = { // off-by-one
            sectionId
        };
    }
    
}
