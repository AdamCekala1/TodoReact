import React from 'react';

const NewCard =(props)=>{
    return(
        <div  className='todoGroup cols-xs-12'>
            <div className='todoCard newCardRow'>
                 <div className="input-group input-group-lg  ">
                     <form >
                        <input 
                            onChange={(e)=>props.rememberValueName(e.target.value)} type="text" 
                            className="form-control"
                            placeholder="Todo Name" 
                            aria-describedby="sizing-addon1"
                        />
                     <input 
                            onChange={(e)=>props.rememberValueDate(e.target.value)} type="date" 
                            className="form-control"
                            placeholder="Todo Date" 
                            aria-describedby="sizing-addon1"
                        />
                         <input 
                            onChange={(e)=>props.rememberValueTodo(e.target.value)} type="text" 
                            className="form-control"
                            placeholder="Todo :)" 
                            aria-describedby="sizing-addon1"
                        />
                     
                        <button 
                            type='submit'
                            onClick={(e)=>props.newCardHandler(e)}
                            className='btn btn-primary'>
                                Add new!
                        </button>
                     </form>

                    </div>
                
               
            </div>
        </div>
    );  
}

export default NewCard;