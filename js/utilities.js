var MYMODULE = (function(module) {
    module.Go = function(resultObject) {
        resultObject.prepend(Date() + '<br/>');
    };
    
    return module;
}(MYMODULE || {} ));