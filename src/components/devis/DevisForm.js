import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const DevisForm = ({ devis, allCars, onSave, onChange, loading, errors }) => {
    return (
        <form>
            <h1>Login</h1>
            <TextInput
                name="name"
                label="name"
                value={devis.name}
                onChange={onChange}
                error={errors.name} />
             <SelectInput
                name="idCar"
                label="Cars"
                value={devis.idCar}
                defaultOption="Select Car"
                options={allCars}
                onChange={onChange}
                error={errors.idCar} />
            <TextInput
                name="value"
                label="value"
                value={devis.value}
                onChange={onChange}
                error={errors.value} />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Getting Price...' : 'Get Price'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

DevisForm.propTypes = {
    allCars: React.PropTypes.array.isRequired,
    devis: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default DevisForm;