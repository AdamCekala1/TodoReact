import React from 'react';

const Todo=(props)=>{
    return(
    <li style={props.item.done===true?props.doneStyle:null} 
        key={props.item.id}>
        <p>
            {props.item.content}
        </p>
        <i 
            onClick={(e)=>props.doneTodo(props.i,props.item.id) }
            className="fa fa-check" aria-hidden="true">
        </i>
        <i  
            onClick={(e)=>props.deleteTodoHandler(props.i,props.item.id)}
            className="fa fa-times" aria-hidden="true">
        </i>
    </li>
    );
}
export default Todo;