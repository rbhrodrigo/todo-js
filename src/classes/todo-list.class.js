import { Todo } from "./todo.class";

export class TodoList {

    constructor () {
        this.todos = [];

    }

    nuevoTodo ( todo ) {
        this.todos.push( todo );
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id )
    }

    marcarCompletado ( id ) {

        for( const todo of this.todos ) {
            console.log(id, todo.id );

            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados ( id ) {
        this.todos = this.todos.filter( todo => !todo.completado )
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage(){
        this.todos = ( localStorage.getItem('todo'))
                    ? JSON.parse( localStorage.getItem('todo') )
                    : [];
        this.todos = this.todos.map( Todo.fromJason );
    }
}