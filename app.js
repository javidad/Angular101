//Fichero app.js
var miModulo=angular.module('ListaTareas',[]);
miModulo.factory('ListaTareasHelper', function(){});
miModulo.service('ListaTareasService', function(){});
miModulo.controller('MainCtrl', function(){

    var main= this;
    //Definición inicial de tareas
    main.tareas=[
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
main.createTarea=function(){
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


miModulo.directive('tarea', function(){});
