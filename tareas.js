var ListaTareas = /** @class */ (function () {
    function ListaTareas() {
        this.tareas = [];
    }
    ListaTareas.prototype.agregarTarea = function (tarea) {
        this.tareas.push(tarea);
    };
    ListaTareas.prototype.marcarTareaCompleta = function (id) {
        var tarea = this.tareas.find(function (t) { return t.id === id; });
        if (tarea) {
            tarea.completada = true;
        }
    };
    ListaTareas.prototype.listarTareas = function () {
        console.log("Lista de tareas:");
        this.tareas.forEach(function (tarea) {
            console.log("ID: ".concat(tarea.id, ", Descripci\u00F3n: ").concat(tarea.descripcion, ", Completada: ").concat(tarea.completada ? "Sí" : "No"));
        });
    };
    return ListaTareas;
}());
// Ejemplo de uso:
var lista = new ListaTareas();
// Agregar tareas
lista.agregarTarea({ id: 1, descripcion: "Hacer ejercicio", completada: false });
lista.agregarTarea({ id: 2, descripcion: "Comprar alimentos", completada: false });
lista.agregarTarea({ id: 3, descripcion: "Estudiar para el examen", completada: true });
// Marcar tarea como completada
lista.marcarTareaCompleta(2);
// Listar tareas
lista.listarTareas();
