class TestEmitter {

    static showSectionRequest($scope, sectionId) {
        var a = '';
        var b = {   // ok
            'test': 'value'
        };
        var payload = { // off-by-one
            sectionId
        };
    }
    
}

export = TestEmitter;
