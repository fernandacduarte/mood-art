import React from 'react';
import styled from 'styled-components'

const ScrollArea = styled.div`
    overflow-y: scroll;
    border: 1px solid grey;
    height: 700px;
`;

const Scroll = (props) => {
    return(
        <ScrollArea>
            {props.children}
        </ScrollArea>
    );
}

export default Scroll;