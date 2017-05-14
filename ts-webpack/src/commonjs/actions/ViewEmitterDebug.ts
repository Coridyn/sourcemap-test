import TestEmitter = require("./TestEmitter");

class ViewEmitterDebug {
    
    static generateForecastData($scope){
        debugger;
        var a = '';
        TestEmitter.showSectionRequest($scope, 'test');
    }

}

export = ViewEmitterDebug;