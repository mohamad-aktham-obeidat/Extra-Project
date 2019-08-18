import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : ''
        }
    }
    

    verify = (email, name, phone, url) => {
        console.log(this);
        
        if ((email && name && phone && url) === true){
            this.setState({message: 'Form Verified'})
        } else { 
            this.setState({message: 'Form Not Verified'})
        }    
    }

    render() {
        return (
        <div>
            <Form verify={this.verify}/>

            <Message msg={this.state.message}/>
        </div>
        )};
}

export default App;
