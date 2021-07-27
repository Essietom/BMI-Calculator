import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}>
                <button>
                    {this.props.label}
                </button>
            </div>

        )
    }
}

export default Button;