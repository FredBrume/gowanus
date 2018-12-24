import React, {Component} from 'react';
import Field from '../component/Field';

class Footer extends Component {

    render(){
        return(
            <div className='footer'>
                <div className = 'content'>
                    <div className='row-1'>
                        <div className ='col-1'>
                            <p>ABOUT US</p>
                            <p>I'm a paragraph. Click here to add your own 
                               text and edit me. I’m a great place for you 
                               to tell a story and let your users know a little more about you.</p>
                        </div>
                        <div style={{width:'1px', height:'180px', margin: '30px auto', backgroundColor:'#9E9E9C'}}>&nbsp;</div>

                        <div className ='col-2'>
                            <p>ADDRESS</p>
                            <p>123-456-7890</p>
                            <p>500 Terry Francois Street San Francisco, CA 94158</p>
                            <p>info@mysite.com</p>
                        </div>
                    <div style={{width:'1px', height:'180px', margin: '30px auto', backgroundColor:'#9E9E9C'}}>&nbsp;</div>
                        <div className ='col-3'>
                            <p>SUBSCRIBE FOR EMAILS</p>
                            <Field/>
                            <div className = 'social-container'>
                            <ul className = 'social-list'>
                                <li><a href= '/'><i className="fab fa-facebook-square" style={{fontSize: '25px', color:'#9E9E9C'}}></i></a></li>
                                <li><a href= '/'><i className="fab fa-twitter" style={{fontSize: '25px', color:'#9E9E9C'}}></i></a></li>
                                <li><a href= '/'><i className="fab fa-instagram" style={{fontSize: '25px', color:'#9E9E9C'}}></i></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='col-1'>
                        <p>Privacy Policy | User Agreement. ©2018 Gowanus. </p>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;