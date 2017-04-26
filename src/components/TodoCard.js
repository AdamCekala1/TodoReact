import React from 'react';
import Todo from './Todo';

const TodoCard = (props) =>{
    return(
        <div key={props.i} className='todoGroup'>
            {props.items.date}
            <div className='todoCard'>
                <h4>Todo Name</h4>
                <h4>data dodania xx-xx-xxxx</h4>
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