import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
    }
    validateName = (event) =>{
        let name = event.target.value;
        const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*/
        this.setState({isNameValid: regex.test(name)});
    }
    validateEmail = (event) =>{
        let email = event.target.value;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.setState({isEmailValid: regex.test(email)});
    }
    validatePhone = (event) =>{
        let phone = event.target.value;
        const regex = /^2+[0-9]{10}$/;
        this.setState({isPhoneValid: regex.test(phone)});
    }
    validateUrl = (event) =>{
        let url = event.target.value;
        const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        this.setState({isUrlValid: regex.test(url)});
    }
    
    render() {
        const {isEmailValid, isNameValid, isPhoneValid, isUrlValid} = this.state;
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h5>Name:
                </h5> <input type='text' placeholder='Enter Your Name' onChange={this.validateName}></input>
                <h5>Email:
                </h5> <input type='email' placeholder='Enter Your Email' onChange={this.validateEmail}></input>
                <h5>Phone:
                </h5> <input type='tel' placeholder='Enter Your Phone Number' onChange={this.validatePhone}></input>
                <h5>Blog URL:
                </h5> <input type='url' placeholder='Blog Url Here...' onChange={this.validateUrl}></input>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.props.verify.bind(isEmailValid, isNameValid, isPhoneValid, isUrlValid)}>Verify</a>
                </div>
            </form>
        </div>);
    }
}
export default Form;
