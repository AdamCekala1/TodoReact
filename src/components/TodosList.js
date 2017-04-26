import React from 'react';
import uuid from 'node-uuid'; //unikalne id
import AddForm from './AddForm'; //form do dodawania nowych zadan
import TodoCard from './TodoCard'; // cala karta Todo, zawiera liste zadan


class TodosList extends React.Component{
    //konstruktor
    constructor(){
        super();
        //styl do kreslenia zrobionego zadania
        this.doneStyle={
            textDecoration: 'line-through',
        }
        //przykladowe dane
        this.state={
            addNew:false,
            todos:[
                {
                    id:uuid(),
                    date:'xx-xx-xxxx',
                    list:[
                    {
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 1 '
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 2 '
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 3 '
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 4 '
                    },]
                },{
                    id:uuid(),
                    date:'xx-xx-xxxx',
                    list:[{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 5'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 6'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 7'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 8'
                    },]
                },{
                    id:uuid(),
                    date:'xx-xx-xxxx',
                    list:[{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 9'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 9'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 66'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 77'
                    },]
                },{
                    id:uuid(),
                    date:'xx-xx-xxxx',
                    list:[{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 3'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 43'
                    },{
                        id:uuid(),
                        done:false,
                        content:'Przykladowe 4'
                    },{
                        id:uuid(),
                        done:true,
                        content:'Przykladowe 55'
                    },]
                },

            ]
        };
    }
    //pokazuje form do dodania nowego zadania w danej liscie
    showAddFormHandler=()=>{
        this.setState((prevState=>{
            return{
                addNew : !prevState.addNew
            }
        }));
    }
    //dodanie nowego zadania do listy
    addTodoHandler=(e,i,items)=>{
        let newTodo = {content:this.state.newTodoValue.value,id:uuid(),done:false}
        let update = this.state.todos
        if(i == this.state.newTodoValue.id){
            update[i].list = [...update[i].list,newTodo]
            this.setState({
                todos:update
            })
        }
    }
    
    //pobranie wartosci z inputa, wykorzystujemy pozniej w celu dodania nowego zadania
    rememberValue=(value,i)=>{
        this.setState({
            newTodoValue:{
                id:i,
                value:value
            }
        })
    }
    
    //usuwanie danego zadania z listy
    deleteTodoHandler=(i,idTodo)=>{
        let todos= this.state.todos;
        let newList = []

        todos[i].list.map((todo)=>{
            if(todo.id!==idTodo){
                newList= [...newList,todo]
            }
        })
        todos[i].list = newList;
        this.setState({
            todos:todos
        })
    }

    //wykonanie wybranego zadania na danej liscie
    doneTodo=(i,itemid)=>{
        let todos = this.state.todos
        todos[i].list.map((todo)=>{
            if(todo.id===itemid){
                todo.done=!todo.done
            }
        })
        this.setState({
            todos:todos
        })
    }
    //redneruje html z form, dumb component
    addNewForm=(i,items)=>{
        if(this.state.addNew==true){
            return(
                <AddForm 
                    rememberValue={this.rememberValue} 
                    addTodoHandler={this.addTodoHandler} 
                    showAddFormHandler={this.showAddFormHandler}
                    i={i}
                    items={items}
                    />
            );
        }else{
            return(
            <h4 onClick={(e)=>this.showAddFormHandler()}>
                Add new...                
            </h4>
            );
            
        }
    }

    //renderuje cala tablice Tod, dubm component
    generateTodos(){
       let todosLists = this.state.todos.map((items,i)=>{
            if (items.list.length!==0){
                return( 
                    <TodoCard
                        doneStyle={this.doneStyle}
                        items={items}
                        i={i}
                        deleteTodoHandler={this.deleteTodoHandler}
                        addNewForm={this.addNewForm}
                        doneTodo={this.doneTodo}
                        />
                    );
            }
        })
       return todosLists;
    }
    //renderowanie wlasciwe
    render(){
        return(
            
            <div className='todoMain'>
                <h2></h2>
                <h2>TodoList like Trello</h2>
                <div className='todoWall'>
                    {this.generateTodos()}
                    
                    <div className='clearfix'></div>
                </div>
            </div>
        );
    }
}

export default TodosList;