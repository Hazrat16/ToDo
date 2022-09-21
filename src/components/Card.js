import React, { useState } from 'react';
import EditTask from './EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray,taskList}) => {
    const [modal, setModal] = useState(false);
    const [todos,setTodos] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    const handleCheckBox = (Name) => {
        console.log(taskObj.Name);
        
    }

    return (
                <div className="row mb-1 shadow p-3 mb-5 bg-white rounded" style={{borderRadius:'10px'}}>
                    <div className='col-11'>
                        <p className= 'mt-3 '>
                            {taskObj.Name}
                            </p>
                        <p className= "mt-3">{taskObj.Description}</p>
                        <p className= "mt-3"> Start date : {taskObj.StartDate} at {taskObj.StartTime} - End date: {taskObj.EndDate} at {taskObj.EndTime} </p>
                        <p>{handleCheckBox.clickedBox}</p>
                    </div>

                    <div className='col-1 pt-5' >
                        {/* <i className= "fa-regular fa-square mr-3" style={{color:'##B517FF'}}  onClick = {handleCheckBox}></i> */}
                        <i className= "far fa-edit mr-3" style={{color:'##B517FF'}}  onClick = {() => setModal(true)}></i>
                        <i className="fas fa-trash-alt"  onClick = {handleDelete}></i>
                    </div>
                    <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>

                </div>
        
    );
};

export default Card;