import React from 'react';
import uuid from 'node-uuid'; //unikalne id
import AddForm from './AddForm'; //form do dodawania nowych zadan
import TodoCard from './TodoCard'; // cala karta Todo, zawiera liste zadan
import NewCard from './NewCard'; // cala karta Todo, zawiera liste zadan


class TodosList extends React.Component{
    //konstruktor
    constructor(){
        super();
        //pomocnicze zamaist w state by nie renderowac caly czas zawartosci state
        this.newTodoCardName = '';
        this.newTodoCardDate = '';
        this.newTodoCardVal = '';
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
                    name:'wazne',
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
                    name:'zakupy',
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
                    name:'todo',
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
                    name:'pranie',
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
        e.preventDefault();
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
    rememberValueName=(value)=>{
        this.newTodoCardName = value;
//        this.setState({
//            newTodoCardName:value
//        })
    }
    rememberValueDate=(value)=>{
        
            this.newTodoCardDate=value
        
    }
    rememberValueTodo=(value)=>{
        
            this.newTodoCardVal=value
       
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
    newCardHandler=(e)=>{
        e.preventDefault();
        let todos = this.state.todos;
        let name = this.newTodoCardName
        let date = this.newTodoCardDate
        let newTodo = this.newTodoCardVal
        
        if(name.length!==0 && date.length!==0 && newTodo.length!==0){
            todos = [...todos,
                     {name:name,
                      date:date,id:uuid(),
                      list:[{
                          content:newTodo,
                          id:uuid(),
                          done:false
                      }]}]
                this.setState({todos:todos})
                
            }

      
        
    }
    //renderowanie wlasciwe
    render(){
        return(
            
            <div className='todoMain'>
             <h2>TodoList</h2>
                <NewCard 
                    newCardHandler={this.newCardHandler}
                    rememberValueDate={this.rememberValueDate}
                    rememberValueName={this.rememberValueName}
                    rememberValueTodo={this.rememberValueTodo}
                    
                    
            />
               
                <div className='todoWall row is-flex'>
                    {this.generateTodos()}
                    
                    
                    
                </div>
                    
            </div>
        );
    }
}

export default TodosList;