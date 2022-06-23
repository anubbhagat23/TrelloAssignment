import React from 'react';

interface taskProps {
    task: any;
    action: any
}

export const TaskComponent = (props: taskProps) => {
    const {task, action} = props;

    return (
        <>
        {
            task.map((x: any, i: number)=>{
                return <div key={x.value} className='form-element'>
                    <input type='search' value={x?.name} onChange={(e: any) =>
                        action('edit', {name: e.target.value, value: x.value}, i)} className='' />
                    <label onClick={() => action('delete', x, i)}>X</label>
                </div>
            })
            
        }
        </>
    )
}