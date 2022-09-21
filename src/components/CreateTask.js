import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description"){
            setDescription(value)
        }else if(name === "startDate"){
            setStartDate(value)
        }
        else if(name === "endDate"){
            setEndDate(value)
        }else if(name === "startTime"){
            setStartTime(value)
        }else if(name === "endTime"){
            setEndTime(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["StartDate"] = startDate;
        taskObj["EndDate"] = endDate;
        taskObj["StartTime"] = startTime;
        taskObj["EndTime"] = endTime;
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <input type="text" className = "form-control" placeholder='Write task title' value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <textarea rows = "5" className = "form-control" placeholder='Write task note' value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div style={{display:'flex'}} >
                    <input type="text" className = "form-control m-2" placeholder='Start date' value = {startDate} onChange = {handleChange} name = "startDate" style={{width:'200px'}}/>
                    <input type="text" className = "form-control m-2" placeholder='Start time' value = {startTime} onChange = {handleChange} name = "startTime" style={{width:'200px'}}/>
                    
                    </div>
                    <div style={{display:'flex'}} >
                    <input type="text" className = "form-control m-2" placeholder='End date' value = {endDate} onChange = {handleChange} name = "endDate" style={{width:'200px'}}/>
                    <input type="text" className = "form-control m-2" placeholder='End time' value = {endTime} onChange = {handleChange} name = "endTime" style={{width:'200px'}}/>
                    
                    </div>
                    
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" style={{width:'500px'}} onClick={handleSave}>Add ToDo</Button>{' '}
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;