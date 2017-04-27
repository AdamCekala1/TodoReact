import React from 'react';
import Todo from './Todo';

const TodoCard = (props) =>{
    return(
        <div key={props.i} className='todoGroup col-xs-12 col-md-6 col-lg-3'>

            <div className='todoCard'>
                <h4>{props.items.name}</h4>
                <h4>data {props.items.date}</h4>
                <ul>
                    {props.items.list.map((item,j)=>{
                        return(
                            <Todo 
                                deleteTodoHandler={props.deleteTodoHandler}
                                i={props.i}
                                item={item}
                                doneStyle={props.doneStyle}
                                doneTodo={props.doneTodo}
                                />
                        );
                    })}
                </ul>
                <div className='addNewToDo '>
                    {props.addNewForm(props.i,props.items)}
                </div>
            </div>
        </div>
    );
}
export default TodoCard;