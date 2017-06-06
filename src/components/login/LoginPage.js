import React from 'react';

class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            login: { email: "", password: "" }
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onClickSave = this.onClickLogin.bind(this);
    }

    onEmailChange(event) {
        const login = this.state.login;
        login.email = event.target.value;
        this.setState({ login });
    }

    onPasswordChange(event) {
        const login = this.state.login;
        login.password = event.target.value;
        this.setState({ login });
    }

    onClickLogin() {
        // this.props.actions.loginUser(this.state.login);
        alert(`Login : ${this.state.login.email} / ${this.state.login.password}`);
    }

    render(){
        return (
             <div>
                <h1> Login </h1>
                <input
                    type="text"
                    onChange={this.onEmailChange}
                    value={this.state.login.email} />
                <input
                    type="password"
                    onChange={this.onPasswordChange}
                    value={this.state.login.password} />
                <input
                    type="submit"
                    value="Login"
                    onClick={this.onClickSave} />
            </div>
        );
    }

}

export default LoginPage;