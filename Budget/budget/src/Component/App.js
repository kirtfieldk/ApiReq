 import React from 'react';
 import NameBlock from './NameBlock.js';


class App extends React.Compoent{
   
    state = {
        name: " ",
        userName: " "
    }
    render(){
        return(
            <NameBlock   />
        )
    }
}


export default App;