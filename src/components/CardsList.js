import React from 'react'
import Card from './Card'

const CardsList = ({ arts }) => {
    return (
        <>
            {
                arts.map(art => {
                    return (<Card 
                                key={art.id} // to avoid react warning: Each child in a list should have a unique "key" prop
                                mood={art.mood} 
                                keywords={art.keywords} 
                                artist={art.artist} 
                                email={art.email} 
                                filepath={art.filepath} 
                    />
                    );
                })
            }
        </>
    );
}

export default CardsList;