import React from 'react';

import { ToDoContext} from './index';

export default class ToDoContextWrapper extends React.Component {

    state = {
        setData: (val) => {
            this.setState(prevState => {
                prevState["todoArray"].push(val)
                return prevState;
            })
        },  
        todoArray: []
    }

    render() {
        
        console.log("THIS",this.state)
        return <ToDoContext.Provider value={this.state}>
            {this.props.children}
        </ToDoContext.Provider>
    }
}