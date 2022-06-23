import React, { useState } from 'react';
import { TaskComponent } from './task';

interface cardProps {
    cardData: any;
    action: any;
    ind: number;
}

export const TaskBoard = (props: cardProps) => {
    const {cardData, action, ind} = props;
    const [task, setTask] = useState({name:'', value:''});
    const [taskList, setTaskList] = useState<any[]>([]);
    const [isEdit, setisEdit] = useState(false);
    const addTask = () => {
        if(task) {
            const list = [...taskList, task];
            setTaskList(list);
            setTask({name: '', value: ''});
        }
    }
    const editDeleteItem = (type: string, data: any, index: number) => {
       if(type === 'edit') {
        let updatedTask = [...taskList];
        updatedTask[index] = data;
        setTaskList(updatedTask);
       } else {
           const result = [...taskList];
           result.splice(index, 1);
           setTaskList(result);
       }
        
    }
    return (
            <div className='trello-card'>
                <div className='trello-card-header text-center' style={{paddingTop: '10px'}}>
                    {!isEdit && <div onClick={()=>setisEdit(true)}><b>{cardData.cardname}</b></div>}
                    {isEdit && <div key={cardData.value} className='form-element'>
                        <input type='search' value={cardData?.cardname}
                        onBlur={()=>setisEdit(false)}
                        onChange={(e: any) =>
                            action('edit', {cardname: e.target.value, value: cardData.value}, ind)} />
                    </div>}
                <TaskComponent task={taskList} action={editDeleteItem}/>
                <div className='add-task'>
                    <input type={'text'} value={task.name} onChange={(e: any)=>
                        setTask({name: e.target.value, value: Math.floor(Math.random() * 100) + 'task'})}/>
                    <label onClick={addTask}>+</label>
                </div>

            </div>
            <div className='deletebtn'><button onClick={() => action('delete', cardData, ind)}>Delete</button></div>
        </div>
    )
}