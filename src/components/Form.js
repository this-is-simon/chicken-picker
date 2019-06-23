import React, {Component} from 'react';

class Form extends Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("You have submitted:", this.event);
    };

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.handleFormSubmit}>
                    <h2>Appearance</h2>
                    <div className="form-check">
                        <label>Option 1</label>
                            <input
                                type="radio"
                                name="appearance"
                                value="1"
                                onChange={e => this.props.handleOptionChange(e)}
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="appearance"
                                value="2"
                                onChange={e => this.props.handleOptionChange(e)}
                                className="form-check-input"
                            />
                    </div>
                    <br/>
                    <div className="form-check">
                        <h2>Friendliness</h2>
                        <label>Option 1</label>
                            <input
                                type="radio"
                                name="friendliness"
                                value="1"
                                onChange={e => this.props.handleOptionChange(e)}
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="friendliness"
                                value="2"
                                onChange={e => this.props.handleOptionChange(e)}
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
