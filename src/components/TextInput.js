import React from 'react';

class TextInput extends React.Component{
    constructor(props){
        super(props);
       this.state = {value:''};
    }

   
    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input type= "text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}></input>
            </div>
        )
    }

    
}

export default TextInput;