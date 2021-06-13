import React from 'react';

export function HistoryPlays(props) {
    
        return( 
            <div>
                <p className='my-3 mx-5 status'>{props.status}</p>
                    <ol>{props.moves}</ol>
            </div>
        );
    
}

export default HistoryPlays;
