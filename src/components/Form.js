import React from 'react';
import TextInput from './TextInput';
import '../styles/Form.css';
import Button from './Button';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value:''};
        this.weightChange = this.weightChanged.bind(this);
        this.heightChange = this.heightChanged.bind(this);
    
    }

    
    weightChanged(event) {
        this.setState({ weight : event.target.value });
    }
    
    heightChanged(event) {
        this.setState({ height:  event.target.value });
    }
    computeBmi =() =>{
        let bmiValue = (this.state.weight * this.state.height)/this.state.height;
        this.setState({bmi:bmiValue});
        let bmiClass = this.getBmi(bmiValue);
        this.setState({bmiClass: bmiClass});
        console.log("bmiclass",bmiClass);
    }

    getBmi(bmi){
        if(bmi < 18.5) {
            return "Underweight";
        }
        if(bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        }
        if(bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        }
        if(bmi >= 30) {
            return "Obesity";
        }
    
    }
    render(){
        return(
            <div>
                <div className="row">
                    <TextInput label="Height" placeholder="Enter heights in meters" value={this.state.height} onChange={this.heightChange}/>
                </div>

                <div className="row">
                    <TextInput label="Weight" placeholder="Enter weight in kgs" value={this.state.weight} onChange={this.weightChange}/>
                </div>

                <div className="row">
                    <Button label="SUBMIT" onClick={this.computeBmi}/>
                </div>

                <div className="row">
                    <h3>BMI = {this.state.bmi}</h3>
                </div>
                <div className="row">
                    <h3>{this.state.bmiClass}</h3>
                </div>

               
            </div>
        )
    }
}

export default Form;