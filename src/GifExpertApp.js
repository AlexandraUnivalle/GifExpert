import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
    
    //const categories = ['One punch', 'Samurai x', 'Dragon Ball'];
    const [categories , setCategories ] = useState(['One punch']);
    /*const handleAdd = () => {
        //setCategories(categories.concat('hunter x'));  
        setCategories(['HUNTER X',...categories]);
        console.log(categories);
        <button onClick={ handleAdd }> Agregar </button>
    } */
    
    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>   
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GiftGrid 
                            key={category}
                            category = {category}
                        />
                    )) 
                    
                }
            </ol>
        
        </>

    )
}

