import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(<div className='footer-field'>
                <input type='text' className='text'/>
                <div className='submit'>Subscribe for emails</div>
        </div>);
    }
}

export default Field;