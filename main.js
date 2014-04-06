function ListControl($scope) {
    $scope.lists = [
        {text: "some text", done: false},
        {text: "some text", done: false},
        {text: "some text", done: false},
    ];
        
        
    $scope.addItem = function() {
        var item = {
        text: $scope.newText,
        done: false,
        };
        
        $scope.lists.push(item);
        $scope.newText = "";
        };
        
    $scope.removeItem = function(start) {
        $scope.lists.splice(start, 1)
        };
        
};