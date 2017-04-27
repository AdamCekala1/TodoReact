import React from 'react';

const AddForm =(props)=>{
    return(
                <div className='addForm'>
                    <div className="input-group input-group-lg">
                        <form>
                            <input 
                                onChange={(e)=>props.rememberValue(e.target.value,props.i)} type="text" 
                                className="form-control"
                                placeholder="type here..." 
                                aria-describedby="sizing-addon1"
                            />
                            <button 
                                type='submit'
                                onClick={(e)=>props.addTodoHandler(e,props.i,props.items)}
                                className='btn btn-primary'>
                                    Add new!
                            </button>
                            <button 
                                onClick={(e)=>props.showAddFormHandler()}
                                className='btn btn-danger'>
                                    Don't Add
                            </button>
                        </form>
                    </div>
                </div>
    );
}
export default AddForm;