import React from 'react'
import styled from 'styled-components'
import Card from './Card'
// import FlipCard from './FlipCard'

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
`;

const CardsList = ({ arts }) => {
    return (
        <List >
            {
                // <Card 
                //     art=     {arts[0]} // to avoid react warning: Each child in a list should have a unique "key" prop
                // />
                arts.map(art => {
                    return (
                        
                        <Card 
                            key={art.id} // to avoid react warning: Each child in a list should have a unique "key" prop
                            art={art}
                            // mood={art.mood} 
                            // keywords={art.keywords} 
                            // artist={art.artist} 
                            // email={art.email} 
                            // filepath={art.filepath} 
                        />
                        // <FlipCard 
                        //     key={art.id} // to avoid react warning: Each child in a list should have a unique "key" prop
                        //     art={art}
                        //     // mood={art.mood} 
                        //     // keywords={art.keywords} 
                        //     // artist={art.artist} 
                        //     // email={art.email} 
                        //     // filepath={art.filepath}
                        //     // onFlip={onFlip}
                        //     // isFlipped={isFlipped} 
                        // />
                    );
                })
            }
        </List>
    );
}

export default CardsList;