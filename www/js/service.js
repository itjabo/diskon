angular.module('app.services', [])

.service('Survey', ['$http', function($http){
    
    var api_url = 'http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php';
    var currentID = 1;
    
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.Kode != '';
        });
    }
    
    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                if (results.length > 0) currentID = parseInt(results[results.length-1].Kode);
                return results;
            });
            
        }
        
    }
    
    ret.all();
    
    return ret;

}]);