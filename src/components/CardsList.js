import React from 'react'
// import Card from './Card'
import FlipCard from './FlipCard'

const CardsList = ({ arts }) => {
    return (
        <>
            {
                arts.map(art => {
                    return (
                        // <Card 
                        //     key={art.id} // to avoid react warning: Each child in a list should have a unique "key" prop
                        //     mood={art.mood} 
                        //     keywords={art.keywords} 
                        //     artist={art.artist} 
                        //     email={art.email} 
                        //     filepath={art.filepath} 
                        // />
                        <FlipCard 
                            key={art.id} // to avoid react warning: Each child in a list should have a unique "key" prop
                            mood={art.mood} 
                            keywords={art.keywords} 
                            artist={art.artist} 
                            email={art.email} 
                            filepath={art.filepath}
                            // onFlip={onFlip}
                            // isFlipped={isFlipped} 
                        />
                    );
                })
            }
        </>
    );
}

export default CardsList;