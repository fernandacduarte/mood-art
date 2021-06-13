import React from 'react'
import styled from 'styled-components'
import Card from './Card'

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
                arts.map(art => {
                    return (
                        
                        <Card 
                            key={art.id} /* to avoid react warning: Each child in a list should have a unique "key" prop */
                            art={art}
                        />
                    );
                })
            }
        </List>
    );
}

export default CardsList;