import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>ChickenPicker</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
