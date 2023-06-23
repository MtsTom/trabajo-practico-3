interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
  }
  
  class ListaTareas {
    private tareas: Tarea[];
  
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea: Tarea): void {
      this.tareas.push(tarea);
    }
  
    marcarTareaCompleta(id: number): void {
      const tarea = this.tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = true;
      }
    }
  
    listarTareas(): void {
      console.log("Lista de tareas:");
      this.tareas.forEach((tarea) => {
        console.log(
          `ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${
            tarea.completada ? "Sí" : "No"
          }`
        );
      });
    }
  }
  
  // Ejemplo de uso:
  const lista = new ListaTareas();
  
  // Agregar tareas
  lista.agregarTarea({ id: 1, descripcion: "Hacer ejercicio", completada: false });
  lista.agregarTarea({ id: 2, descripcion: "Comprar alimentos", completada: false });
  lista.agregarTarea({ id: 3, descripcion: "Estudiar para el examen", completada: true });
  
  // Marcar tarea como completada
  lista.marcarTareaCompleta(2);
  
  // Listar tareas
  lista.listarTareas();
  