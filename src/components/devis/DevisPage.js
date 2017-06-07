import React, {PropTypes} from 'react';
import * as devisActions from '../../actions/devisActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DevisForm from './DevisForm';

class DevisPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            devis: Object.assign({}, this.props.devis),
            errors: {}
        };
        this.updateDevisState = this.updateDevisState.bind(this);
        this.sendDevis = this.sendDevis.bind(this);
    }

    updateDevisState(event) {
        const field = event.target.name;
        let devis = this.state.devis;
        devis[field] = event.target.value;
        return this.setState({ devis: devis });
    }

    sendDevis(event) {
        event.preventDefault();
        this.props.actions.sendDevis(this.state.devis);
    }

    render() {
        return (
            <DevisForm
                onChange={this.updateDevisState}
                onSave={this.sendDevis}
                allCars={this.props.cars}
                devis={this.state.devis}
                errors={this.state.errors}
            />
        );
    }

}

DevisPage.propTypes = {
    devis: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let devis = { name: "", idCar: "", value:"" };
    const carsFormattedForDropdown = state.cars.map(car => {
        return {
            value : car.id,
            text : car.name
        };
    });
    
    return {
        devis : devis , 
        cars: carsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(devisActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevisPage);