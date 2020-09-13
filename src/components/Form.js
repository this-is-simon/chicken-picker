import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.props.handleFormSubmit}>
                    <h2>Beginner Friendly</h2>
                    <div className="form-check">
                        <label>Yes</label>
                            <input
                                type="radio"
                                name="beginnerFriendly"
                                value="true"
                                className="form-check-input"
                            />
                        <label>No</label>
                            <input
                                type="radio"
                                name="beginnerFriendly"
                                value="false"
                                className="form-check-input"
                            />
                    </div>
                    <br/>
                    <div className="form-check">
                        <h2>Cold Hardy</h2>
                        <label>Yes</label>
                            <input
                                type="radio"
                                name="coldHardy"
                                value="true"
                                className="form-check-input"
                            />
                        <label>No</label>
                            <input
                                type="radio"
                                name="coldHardy"
                                value="false"
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
