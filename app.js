//Fichero app.js
var miModulo=angular.module('ListaTareas',[]);

miModulo.factory('ListaTareasHelper', function(){
    var buildIndex=function(source, property){
        var tempArray=[];
        for(var i=0, len= source.length; i<len;++i){
            tempArray[source[i][property]]= source[i];
        }
        return tempArray;
    };
    return {
        buildIndex: buildIndex
    };
});
miModulo.service('ListaTareasModel', function(){
    var service= this,
    tareas=[
        {titulo: 'Primera tarea',
        descripcion: 'La primera tarea',
        criterio: 'Pendiente de definir',
        estado:'Pendiente',
        tipo: 'Tipo 1',
        creador: 'Creador 1',
        responsable: 'Responsable 1'

},
 {titulo: 'Segunda tarea',
        descripcion: 'La Segunda tarea',
        criterio: 'Pendiente de definir',
        estado:'Pendiente',
        tipo: 'Tipo 2',
        creador: 'Creador 2',
        responsable: 'Responsable 2'

}
    ];
    service.getTareas=function(){
        return tareas;
    };
});
miModulo.controller('MainCtrl', function(ListaTareasModel){

    var main= this;
    //Definición inicial de tareas
    main.tareas= ListaTareasModel.getTareas();


main.createTarea=function(){
    //Con este método añadimos un elemento a un array
    main.tareas.push({
    titulo: 'Nueva',
        descripcion: 'Sin descripcion',
        criterio: 'Pendiente de definir',
        estado:'Pendiente',
        tipo: 'No definido',
        creador: 'No definido',
        responsable: 'No definido'
    })
};

});


miModulo.directive('tarea', function(){
    return{
        scope: true,
        replace: true,
        template: '<div><h4>{{tarea.titulo}}</h4><p>{{tarea.descripcion}}</p></div>'
    }
});
