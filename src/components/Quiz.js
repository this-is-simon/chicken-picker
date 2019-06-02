import React, {Component} from 'react';

class Quiz extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
    };

    render() {
        return (
            <div className='Quiz'>
                <h2>How important are these things to you?</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='appearance'>
                        <label>Appearance</label>
                        <input type='radio' name='appearance' value='1'/>
                        <input type='radio' name='appearance' value='2'/>
                        <input type='radio' name='appearance' value='3'/>
                        <input type='radio' name='appearance' value='4'/>
                        <input type='radio' name='appearance' value='5'/>
                    </div>
                    <div className='appearance'>
                        <label>Friendliness</label>
                        <input type='radio' name='friendliness' value='1'/>
                        <input type='radio' name='friendliness' value='2'/>
                        <input type='radio' name='friendliness' value='3'/>
                        <input type='radio' name='friendliness' value='4'/>
                        <input type='radio' name='friendliness' value='5'/>
                    </div>
                    <button type='submit'>Pick My Chicken</button>
                </form>
            </div>
        )
    }
}

export default Quiz;
