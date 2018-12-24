import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../App.css';
import img1 from '../images/img1.JPG';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.JPG';


class BackdropSlider extends Component {

  constructor(props){
    super(props);

  this.state = {
    images: []
  }

  this.settings = {
    dots: false,
    infinite: true,
    speed: 100,
    fade: true,
    easing: 'linear',
    arrow: false,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true
  };
  }

  componentDidMount(){
    this.setState({images: [img1, img2, img3, img4]});
  }

  imageSlides = () => {
   
    const images = this.state.images.map((img, key) => {
      return( 
            <div className="mySlides" key= {key}>
              <img src={img} alt='slide' style={{width: '100%'}}/> 
              <div className='after'></div> 
            </div>);
    });

    return images;
  }

  render(){
    return(
        <div className= 'banner-container'>
          <Slider {...this.settings}>
            {this.imageSlides()}
          </Slider>

          <div className='heading-container'>
              <p>Gowanus Wifii commmunity </p>
              <p>a project of Gowanus Initiative, 
                is a community-led effort to close the digital divide</p>
            <div>Read more >></div>
          </div>
        </div>
    );
  }
}


export default BackdropSlider;
