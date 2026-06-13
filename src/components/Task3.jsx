import React from 'react'
import img1 from "../assets/img-01.jpg";
import img2 from "../assets/img-02.jpg";
import img3 from "../assets/img-03.jpg";
import img4 from "../assets/img-04.jpg";
import img5 from "../assets/img-05.jpg";
import img6 from "../assets/img-06.jpg";
import img7 from "../assets/img-07.jpg";
import img8 from "../assets/img-08.jpg";
import img9 from "../assets/img-09.jpg";
import img10 from "../assets/img-10.jpg";
import img11 from "../assets/img-11.jpg";
import img12 from "../assets/img-12.jpg";
import img13 from "../assets/img-13.jpg";
import img14 from "../assets/img-14.jpg";
import img15 from "../assets/img-15.jpg";
import img16 from "../assets/img-16.jpg";
import { IoIosSearch } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";

const Task3 = () => {
  return (
    <div>
      
            {/* home section  */}
<div className="home">
   <div className="z">
    <GrCatalog className='g' />
    Catalog-Z</div>
   <div className="photo">
    <div className="hov">Photos</div>
 <div className="hov">Videos</div>
  <div className="hov">About</div>
   <div className="hov">Contact</div>
    
   </div>
</div>
 

  {/* search bar  */}
  <div className="search">
    <input type="text" placeholder="Search" className="search1"/>
    <div className="icon">
      <IoIosSearch className='n' />
      </div>
    
  </div>

{/* image section  */}

  <div className="first">
  <div className="latest">Latest Photos</div>
  <div className="page">
     <div className="">Page</div>
  <div className="number">1</div>
  <div className="">of 200</div>
</div>
 
  </div>


<div className="ghugh">

  <div className="gallery-item">
    <img src={img3} className="" />
    <div class="overlay">
        <div class="title-box">
          CLOCKS
        </div>
      </div>

  </div>
  
   <div className="gallery-item">
    <img src={img4}  className=""/>
<div class="overlay">
        <div class="title-box">
          PLANTS
        </div>
      </div>
  </div>
  
   <div className="gallery-item">
    <img src={img5}  className=""/>
<div class="overlay">
        <div class="title-box">
          MORNING
        </div>
      </div>
  </div>
</div>


 

  
<div className="jutt">
<div className="oct">
    <div className="view">18 Oct 2020</div>
    <div className="view">9,960 views</div>

  </div>
  <div className="oct">
    <div className="view">14 Oct 2020</div>
    <div className="view">16,100 views</div>

  </div>
  <div className="oct">
    <div className="view">12 Oct 2020</div>
    <div className="view">12,460 views</div>

  </div>


 </div>
{/* second  */}


<div className="ghugh">

  <div className="gallery-item">
    <img src={img6} className=""/>
<div class="overlay">
        <div class="title-box">
          PINKY
        </div>
      </div>
  </div>
  <div className="gallery-item">
    <img src={img1} className=""/>
<div class="overlay">
        <div class="title-box">
          HANGERS
        </div>
      </div>
  </div>
  
   <div className="gallery-item">
    <img src={img2} className=""/>
<div class="overlay">
        <div class="title-box">
          PERFUMES
        </div>
      </div>
  </div>

</div>

   <div className="jutt">
<div className="oct">
    <div className="view">10 Oct 2020</div>
    <div className="view">11,402 views</div>

  </div>
  <div className="oct">
    <div className="view">24 Sep 2020</div>
    <div className="view">16,008 views</div>

  </div>
   <div className="oct">
    <div className="view">20 Sep 2020</div>
    <div className="view">12,860 views</div>

  </div>
   </div>
  
   
 {/* third  */}
  <div className="ghugh">
 <div className="gallery-item">
    <img src={img7} className=""/>
<div class="overlay">
        <div class="title-box">
          BUS
        </div>
      </div>
  </div>
   <div className="gallery-item">
    <img src={img8} className=""/>
<div class="overlay">
        <div class="title-box">
          NEW YORK
        </div>
      </div>
  </div>
  <div className="gallery-item">
    <img src={img9} className=""/>
<div class="overlay">
        <div class="title-box">
          ABSTRCAT
        </div>
      </div>
  </div>
  </div>
 
 <div className="jutt">
<div className="oct">
    <div className="view">16 Sep 2020</div>
    <div className="view">10,900 views</div>

  </div>
 
  <div className="oct">
    <div className="view">12 Sep 2020</div>
    <div className="view">11,300 views</div>

  </div>
  
  <div className="oct">
    <div className="view">10 Sep 2020</div>
    <div className="view">42,700 views</div>

  </div>
 </div>
{/* forth  */}
  
 <div className="ghugh">
 <div className="gallery-item">
    <img src={img10} className=""/>
<div class="overlay">
        <div class="title-box">
          FLOWERS
        </div>
      </div>
  </div>
   <div className="gallery-item">
    <img src={img11} className=""/>
<div class="overlay">
        <div class="title-box">
          ROSY
        </div>
      </div>
  </div>
  <div className="gallery-item">
    <img src={img12} className=""/>
<div class="overlay">
        <div class="title-box">
          ROCKI
        </div>
      </div>
  </div>
 </div>
 
 <div className="jutt">
  <div className="oct">
    <div className="view">8 Sep 2020</div>
    <div className="view">11,402 views</div>

  </div>
 
  <div className="oct">
    <div className="view">4 Sep 2020</div>
    <div className="view">32,906 views</div>

  </div>
  
  <div className="oct">
    <div className="view">28 Aug 2020</div>
    <div className="view">50,700 views</div>

  </div>
 </div>
 {/* fifth  */}
  <div className="ghugh">
 <div className="gallery-item">
    <img src={img13}  className=""/>
<div class="overlay">
        <div class="title-box">
          PURPLE
        </div>
      </div>
  </div>
   <div className="gallery-item">
    <img src={img14}  className="" />
<div class="overlay">
        <div class="title-box">
          SEA
        </div>
      </div>
  </div>
   <div className="gallery-item">
    <img src={img15} className=""/>
<div class="overlay">
        <div class="title-box">
          TURTLE
        </div>
      </div>
  </div>
  </div>
  
  <div className="jutt">
<div className="oct">
    <div className="view">22 Aug 2020</div>
    <div className="view">107,510 views</div>

  </div>
  
  <div className="oct">
    <div className="view">14 Aug 2020</div>
    <div className="view">118,006 views</div>

  </div>
  
  <div className="oct">
    <div className="view">9 Aug 2020</div>
    <div className="view">121,300 views</div>

  </div>
  </div>
  <div className='ty'>
    <div className="gallery-itm">
    <img src={img16} className="last"/>
<div class="overlay">
        <div class="title-box">
          PEACE
        </div>
      </div>
  </div>
  </div>
   
  <div className="oc">
    <div className="view">3 Aug 2020</div>
    <div className="view">21,204 views</div>

  </div>

{/* end image section  */}

  <div className="end">
<div className="previous">
  <button className="btn">Previous</button>
</div>

  <div className="previous">
  <button className="btns">1</button>
   <button className="btns2">2</button>
    <button className="btns2">3</button>
     <button className="btns2">4</button>
</div>

<div className="previous">
  <button className="btn">Next Page</button>
</div>
</div>



<div className="about">
  <div className="link">
    <div className="catalog">About Catalog-Z</div>
<div className="">
<div className='content'>catalog-z is free <span className="boot"><a href="https//v5.getbootstrap.com" className='k'>Bootstrap 5</a> </span> AlphaHTML Template for video</div><br></br>
 <div className='content'>and photowebsite.You can freely use thisTemplateMo layout</div><br></br>
 <div className='content'>for a front-endintegration with any kind of CMSwebsite</div><br></br>
</div>
  </div>

<div className="lin">
  <div className="catalo">Our Links</div>
  <div>
    <a className='conten' href='#'>Advertise</a><br></br>
    <a className='conten' href='#'>Support</a><br></br>
    <a className='conten' href='#'>our Company</a><br></br>
    <a className='conten' href='#'>Contact</a><br></br>
  </div>

</div>
<div className="lnk">
  <div className="catlo">
<div className='ci'><a href="http://www.facebook.com" className='ank'><CiFacebook className='oo'/></a></div>
<div className='ci'><a href='http://www.twitter.com' className='ank'><FaTwitter className='oo'/></a></div>
<div className='ci'><a href='http://www.instagram.com' className='ank'><RiInstagramLine className='oo'/></a></div>
<div className='ci'><a href='http://www.pinterest.com' className='ank'><FaPinterest className='oo'/></a></div>



  </div>
  <div>
  <a className='conte' href='#'>Terms of Use</a><br></br>
    <a className='conte' href='#'>Privacy Policy</a><br></br>
  </div>

</div>
</div>
<div className='theend'>


<div className='conent'>
  Copyright 2020 Catalog-Z company. All right reserved.
</div>
<div className='conen'>
 Designed by 
 <a href='#' className='wa'>TemplateMo</a>
</div>

</div>
</div>
  
  )
}

export default Task3