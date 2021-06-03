import React from 'react';
import styled from 'styled-components'

const ScrollArea = styled.div`
    overflow-y: scroll;
    border: 1px solid grey;
    height: 700px;
`;

const Scroll = (props) => {
    // console.log(props)
    return(
        // <div style={{overflowY: 'scroll', border: '1px solid grey', height: '500px'}}>
        //     {props.children}
        // </div>
        <ScrollArea>
            {props.children}
        </ScrollArea>
    );
}

export default Scroll;