import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {
    const {data:images ,loading} = useFetchGifs( category );
    /*
    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages(imgs) )
            //.then( setImages);
    }, [ category ])

*/
    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft">
                {category}
            </h3>
            { loading && <p className="animate__animated animate__flash"> Loading...</p> }
            <div className="card-grid">    
            {
                images.map( img => (
                    <GiftGridItem 
                    key={ img.id }

                    {...img } 
                    />
                )) 
            }   
            </div>
        </>
    )
}
/*images.map( ( {id, tittle } ) => (
   <li key={id}>
    {title}
</li>  
)) */