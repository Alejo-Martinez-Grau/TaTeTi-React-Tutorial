import React from 'react';

export function HistoryPlays(props) {
    
        return( 
            <div>
                <div>{props.status}</div>
                    <ol>{props.moves}</ol>
            </div>
        );
    
}

export default HistoryPlays;
