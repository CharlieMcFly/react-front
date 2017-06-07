import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const LoginForm = ({ login, onSave, onChange, loading, errors }) => {
    return (
        <form>
            <h1>Login</h1>
            <TextInput
                name="username"
                label="username"
                value={login.username}
                onChange={onChange}
                error={errors.username} />
            <PasswordInput
                name="password"
                label="password"
                value={login.password}
                onChange={onChange}
                error={errors.password} />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Login...' : 'Log me'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

LoginForm.propTypes = {
    login: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default LoginForm;