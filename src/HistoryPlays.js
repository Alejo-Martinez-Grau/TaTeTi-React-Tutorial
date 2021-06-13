import React from 'react';

export function HistoryPlays(props) {
    
        return( 
            <div>
                <div className='my-3 mx-5'>{props.status}</div>
                    <ol>{props.moves}</ol>
            </div>
        );
    
}

export default HistoryPlays;
