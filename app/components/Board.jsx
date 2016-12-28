import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    render() {
        
        let notes = [];
        
        for(let i=0; i<10; i++)
            notes.push(<Note text={`Note # ${i}`}/>);
        
        return(
            <div className="board">
                {notes}
            </div>
        );
    }
}

export default Board;