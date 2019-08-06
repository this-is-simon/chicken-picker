import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.props.handleFormSubmit}>
                    <h2>Appearance</h2>
                    <div className="form-check">
                        <label>Option 1</label>
                            <input
                                type="radio"
                                name="appearance"
                                value="1"
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="appearance"
                                value="2"
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
                                className="form-check-input"
                            />
                        <label>Option 2</label>
                            <input
                                type="radio"
                                name="friendliness"
                                value="2"
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
