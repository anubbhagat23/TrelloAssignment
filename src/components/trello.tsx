import React, { useState } from 'react';
import { TaskBoard } from './card';

export const TrelioBoard = (props: any) => {
    const [cardList , setCardList] = useState<any[]>([{cardname: 'default', value: Math.floor(Math.random() * 100) + 'card'}]);
    const addCard = () => {
        const carddata = {cardname: 'default', value: Math.floor(Math.random() * 100) + 'card'}
        const cardlist = [...cardList, carddata];
        setCardList(cardlist);

    }
    const editDeleteItem = (type: string, data: any, index: number) => {
        if(type === 'edit') {
         let updatedTask = [...cardList];
         updatedTask[index] = data;
         setCardList(updatedTask);
        } else {
            const result = [...cardList];
            result.splice(index, 1);
            setCardList(result);
        }
         
     }
    return (
        <div style={{display: 'flex'}}>
             {cardList.map((c: any, i: number) =>
                <div key={i}>
                    <TaskBoard action={editDeleteItem} cardData={c} ind={i}/>
                </div>)
             }
            <div className='add-card' onClick={addCard}>
                +
            </div>
        </div>
    )
}