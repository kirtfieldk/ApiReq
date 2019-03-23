import React from 'react';

class NameBlock extends React.Component{
   
    render(){
        return(
            <form>
                <input 
                    type = 'text' 
                    value = 'name' 
                    placeholder = 'Name'>
                    Input Name
                </input>
            </form>
        );
    };

}
export default NameBlock; 