import React, {PropTypes} from 'react';
import LoginForm from './LoginForm';
import * as loginActions from '../../actions/loginActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            login: { email: "", password: "" },
            errors: {}
        };
        this.updateLoginState = this.updateLoginState.bind(this);
        this.logUser = this.logUser.bind(this);
    }

    updateLoginState(event) {
        const field = event.target.name;
        let login = this.state.login;
        login[field] = event.target.value;
        return this.setState({ login: login });
    }

    logUser(event) {
        event.preventDefault();
        this.props.actions.logUser(this.state.login);
    }

    render() {
        return (
            <LoginForm
                onChange={this.updateLoginState}
                onSave={this.logUser}
                login={this.state.login}
                errors={this.state.errors}
            />
        );
    }

}

LoginPage.propTypes = {
    login: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let login = { email: "", password: "" };
    return {
        login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);