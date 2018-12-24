import React,{Component} from 'react';
import img5 from '../images/img5.JPG';

const HomeContent = (props) => (
    <div className = 'home-main-content'>

    <div className = 'content-row-1'>
    <div className ='content'>

    <div className = 'content-row-1-underlay'>
    <p className='top-heading'>NEXT EVENTS</p>

    <div className='row-1' id= 'summary'>
        <div className= 'col-1'> 
            <p className='heading'>25 / FEB</p>
            <p className='scope'> title: this is a statement </p>
            <p>Wednesday, February 25 at 15:00</p>
            <p style={{color:'#83730B'}}>More info >></p>
        </div>

        <div className='content-rule'/>

        <div className= 'col-1'>
            <p className='heading'>29 / FEB</p>
            <p className='scope'>this is a statement</p>
            <p>Sunday, February 29 at 19:00</p>
            <p style={{color:'#83730B'}}>More info >></p>
        </div>

        <div className='content-rule'/>
        
        <div className= 'col-1'>
            <p>"I'm a paragraph. Click here to add your own text and edit me.
                 It’s easy. Just click “Edit Text” or double click me to add
                 your own content and make changes to the font. I’m a great 
                 place for you to tell a story and let your users know a 
                 little more about you."
            </p>
            <p>Isaiah 41:10</p>
        </div>
    </div>
    </div>
    



       <div className ='content-row-2'>
        <div className = 'row-1'>

        <p> WELCOMING YOU HOME </p>
        <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to 
            add your own content and make changes to the font. 
            I’m a great place for you to tell a story and let your users 
            know a little more about you.</p>

        </div>

        <div className = 'row-2'>
            <div className = 'card'>
                <div className = 'image-container'>
                    <img src= {img5} alt="card image"/>
                    <p>ABOUT OUR PROGRAM</p>
                    <div style={{width:'70px', height:'1px', margin: '0 auto', backgroundColor:'#83730B'}}>&nbsp;</div>

                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content 
                        and make changes to the font.</p>
                    <p style={{color:'#83730B'}}>More info >></p>
                </div>
            </div>
            <div className = 'card'>
                <div className = 'image-container'>
                    <img src= {img5} alt="card image"/>
                    <p>ABOUT OUR PROGRAM</p>
                    <div style={{width:'70px', height:'1px', margin: '0 auto', backgroundColor:'#83730B'}}>&nbsp;</div>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content 
                        and make changes to the font.</p>
                    <p style={{color:'#83730B'}}>More info >></p>
                </div>
            </div>
            <div className = 'card'>
                <div className = 'image-container'>
                    <img src= {img5} alt="card image"/>
                    <p>OUR SERVICES</p>
                    <div style={{width:'70px', height:'1px', margin: '0 auto', backgroundColor:'#83730B'}}>&nbsp;</div>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content 
                        and make changes to the font.</p>
                    <p style={{color:'#83730B'}}>More info >></p>
                </div>
            </div>
        </div>
    </div>    


    </div>
    
    </div>

<div className='content-row-3'>   
    <div className='heading-container'>
        <p>AN INCLUSIVE COMMUNITY FOR ALL WHO </p>
        <p>This is a new section and paragraph</p>
        <div>Read more >></div>
    </div>
</div>

    </div>
);

export default HomeContent;

