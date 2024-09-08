import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from '../Slideshow/Slideshow';
import { RiFlightTakeoffFill } from "react-icons/ri"; 
import './Home.css';
import Acc from'../NavBar/Accordian.jsx';
import img from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import { LuBaggageClaim } from "react-icons/lu";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { TbPlaneInflight } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';
import d4 from '../assets/d4.jpg';
import d5 from '../assets/d5.jpg';
import d6 from '../assets/d6.avif';
import d7 from '../assets/d7.jpg';
import d8 from '../assets/d8.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


const MyComponent = () => {
  
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
      <div className="logo-container">
          <RiFlightTakeoffFill size={50}/>
          <a className="navbar-brand" href="#"> FlyHigh </a>
      </div>

        <ul className="nav nav-pills flex-grow-1">
          <li className="nav-item">
            <a className="nav-link" href="#aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#destinations">Destination</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/searchflights">Search Flights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#help">Help</a>
          </li>
          </ul>
        </nav>

      <div className="slideshow-content">
        <Slideshow />
      </div>

      
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">

<h4 id="aboutus"></h4>

<div class="aboutus-container">
<div class="row">
<div class="col-md-4">
<div class="image-container rounded">
<img src={img} alt="Image 1" className="img-fluid image-hover"/>
</div></div>
<div class="col-md-4 text-container class1">
Embark on a journey through the vibrant tapestry of India with our airline, 
where every flight is an exquisite odyssey through eight of the nation's most enchanting cities. 
Step aboard and prepare to be whisked away to a realm where ancient traditions meet modern marvels, 
and where every destination promises a kaleidoscope of experiences.</div>
<div class="col-md-4"><div class="image-container rounded"><img src={p2} alt="Image 1" className="img-fluid image-hover"/> </div>
</div></div>
<div class="row">
<div class="col-md-4 text-container class1">
At our airline, we pride ourselves on delivering unparalleled quality and service to ensure that 
every journey with us is nothing short of extraordinary. From the moment you step foot on our 
aircraft, you'll be greeted with warmth and hospitality that reflects the legendary 
Indian hospitality.
</div>
<div class="col-md-4">  <div class="image-container rounded"><img src={p3} alt="Image 1" className="img-fluid image-hover"/> </div> </div>
<div class="col-md-4 text-container class1">Furthermore, we are committed to sustainability and environmental 
responsibility, striving to minimize our carbon footprint through initiatives such as fuel-efficient 
operations and waste reduction measures.
</div>
</div>

<div class="a2-container">
  <div class="a2-heading">
 Get more from our great flight options <hr /></div>
  <div class="row row-cols-4">
  
    <div class="col">

    <span className="large-text">
    <LuBaggageClaim size={40} className='icon1'/><br />Pre-book your baggage</span>      
    <br /> Pre-book your baggage allowance now and save up to 90% 
    of baggage charges paid at the airport</div>

    <div class="col">
    <span className="large-text">
    <MdOutlineAirlineSeatReclineNormal size={40} className='icon1'/><br />Reserve your preferred seat! </span> 
    <br />What will it be, window or aisle? Select your preferred seat prior to your 
    flight and guarantee that it is reserved for you.</div>

    <div class="col">
    <span className="large-text">
    <TbPlaneInflight size={40} className='icon1'/><br />Enjoy stress-free travel </span><br />Travel stress-free 
    by getting covered for flight modification, cancellation, accident & medical treatments</div>

    <div class="col">
    <span className="large-text">
    <GiMeal size={40} className='icon1'/><br />Pre-select your meal </span><br /> Pre-order your 
    preferred meal from our Sky Café menu and get served first onboard the flight</div>

  </div>
</div>


</div>




<h4 id="destinations">

</h4>        

<div class="destinations-container">
<div class="destination-heading">Discover Vibrant Destinations with Us</div>
  <div class="row row-cols-4">

  <div className="col">
      <img src={d1} alt="Image 1" className="i-hover"/> 
      <div className='caption'>Ahmedabad</div>  
      <span className="text-hidden">Sardar Vallabhbhai Patel International Airport (AMD)<br /><br />Experience the blend of heritage and modernity, visit the Sabarmati Ashram, 
      and explore the intricacies of Gujarati cuisine.</span>
    </div>

    <div class="col">
      <img src={d2} alt="Image 1" className="i-hover"/>  
    <div className='caption'>Assam</div>
    <span className="text-hidden">Lokpriya Gopinath Bordoloi International Airport (GAU)<br /><br />Embark on a journey to Assam, 
    where lush tea gardens, ancient temples,river cruise on the Brahmaputra and diverse wildlife await you.</span>
    </div>


    <div class="col">
      <img src={d3} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Mumbai</div> 
    <span className="text-hidden">Chhatrapati Shivaji Maharaj International Airport (BOM)<br /><br />Dive into the bustling streets of Bollywood, 
    visit the Gateway of India, and indulge in street food at Juhu Beach.</span>
    </div>

    <div class="col">
      <img src={d8} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Kolkata</div>
    <span className="text-hidden">Netaji Subhas Chandra Bose International Airport (CCU)<br /><br />Delve into the colonial 
    history of the 'City of Joy' at Victoria Memorial, explore Howrah Bridge, and sample authentic Bengali cuisine.</span>
    </div>

    <div class="col">
      <img src={d4} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Banglore </div>
    <span className="text-hidden">Kempegowda International Airport<br /> (BLR)<br /><br />Immerse yourself in the 
    Silicon Valley of India, explore Cubbon Park, and savor the vibrant nightlife of MG Road.</span>
    </div>

    <div class="col">
      <img src={d5} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Chennai</div>
    <span className="text-hidden">Chennai International Airport<br /> (MAA)<br /><br />Experience the cultural hub of 
    South India, visit the historic Fort St. George, and relax on Marina Beach.</span>
    </div>

    <div class="col">
      <img src={d6} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Delhi</div>
    <span className="text-hidden">Indira Gandhi International Airport <br />(DEL)<br /><br />Discover the capital city's 
    iconic landmarks, including the Red Fort, Jama Masjid, and Qutub Minar.</span>
    </div>

    <div class="col">
      <img src={d7} alt="Image 1" className="i-hover"/> 
    <div className='caption'>Jaipur</div>
    <span className="text-hidden">Jaipur International Airport <br />(JAI)<br /><br />Dive into the colorful culture of 
    Rajasthan,majestic Amer Fort, and the bustling streets of the Pink City.</span>
    </div>

  </div>
</div>


<h4 id="contact"></h4>
<div className='contact'>
<div className='contact-heading'>Contact Us <hr /></div>
<div className="center-text">
<p>Have a question or need assistance? <br />We're here to help! 
Reach out to us using any of the methods below, and our dedicated team will be happy to assist you.<br />
Reach out via phone/email for prompt assistance or Connect with us for latest news, promotions, and more. </p>
</div>
<div class="row">
<div className="col-md-6 column1 ">
<p>
<FaPhoneAlt size={30} /> +123-456-7890 <br /><br />
<SlSocialInstagram size={35} /> fly_high
</p></div>
<div className="col-md-6 column2 text-left"><p>
<HiOutlineMail size={37} /> info@flyhigh.com<br /><br />
<FaXTwitter size={35} /> flyhigh</p></div>
</div>
<hr />
<div className="center-text">Discover our branches nationwide, 
bringing convenient services closer to you across the country.</div>
<br />
<div className="row locrow">
      <div className="col-md-4 add">
        <MdLocationPin size={35} />
        <p>Mumbai<br />123, Main Street, Bandra West</p>
      </div>
      <div className="col-md-4 add">
        <MdLocationPin size={35} />
        <p>Bangalore<br />789, Silicon Road, Koramangala</p>
      </div>
      <div className="col-md-4 add">
        <MdLocationPin size={35} />
        <p>Kolkata<br />456, Park Avenue, Park Street</p>
      </div>
</div>
<hr />
<div className="center-text">We value your feedback! 
Share your views, suggestions, or concerns to help us improve our services and 
enhance your future travel experiences!!<br />feedback@flyhigh.com</div>
<br />
</div>


<h4 id="help"></h4>
<div className='h'>
<div className='contact-heading'> Need Help? <hr /></div>
If you have any further questions or require personalized assistance, 
our dedicated customer support team is here to help. <br />
<RiCustomerService2Line size={35} /> 1-800-123-4567<br /><br />
<div className='bold-text'>Top FAQ'S</div>
<p>Browse through our extensive list of frequently asked questions to find quick answers to common inquiries 
about booking flights, managing reservations, baggage allowances, and more.</p>
<div className="App"><Acc /></div>

<hr />

<div className='footer'>
<div className='bold-text'>Terms and Conditions</div>
Review our terms and conditions to understand the policies and guidelines governing your use of our website and services, 
including booking terms, privacy policies, and legal disclaimers.<br /><br /></div>


</div>


     </div>
    </div>
  );
}

export default MyComponent;

