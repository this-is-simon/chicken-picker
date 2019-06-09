import React, {Component} from 'react';

class Form extends Component {

    //I have been following this tutorial recently: https://react.tips/radio-buttons-in-react-16/

    constructor(props) {
        super(props);
        this.state = {
            chicken: {}
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("You have submitted:", this.event);
    };

    handleOptionChange(event) {
        this.setState({
            chicken: Object.assign({}, this.state.chicken, {
                [event.target.name]: event.target.value,
            }),
        });
    }

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.handleFormSubmit}>
                    <h2>Appearance</h2>
                    <div className="form-check">
                        <label>Option 1</label>
                            <input
                                type="radio"
                                name="Appearance"
                                value="1"
                                onChange={e => this.handleOptionChange(e)}
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="Appearance"
                                value="2"
                                onChange={e => this.handleOptionChange(e)}
                                className="form-check-input"
                            />
                    </div>
                    <br/>
                    <div className="form-check">
                        <h2>Friendliness</h2>
                        <label>Option 1</label>
                            <input
                                type="radio"
                                name="Friendliness"
                                value="1"
                                onChange={e => this.handleOptionChange(e)}
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="Friendliness"
                                value="2"
                                onChange={e => this.handleOptionChange(e)}
                                className="form-check-input"
                            />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary mt-2" type="submit">
                            Pick Chicken
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
