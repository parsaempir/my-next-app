import VideoReveal from "./VideoReveal";
import HowItWorks from "./ScrollHighlight";
import ImageScroller from "./ImageScroller";
import Footer from './Footer'
export default function Home() {
  
  return (
<>

<nav>
<div className="head-nav">

  <span>
<img src="/logo.svg" />
   </span>
   <span className="head-nav-center">
<span>Mailer <img src="Expand_right_light.svg"/></span>
<span>Product box <img src="Expand_right_light.svg"/></span>
<span>Rigged Box <img src="Expand_right_light.svg"/></span>
   </span>

   <span className="head-nav-end">
    <img src="/Basket_alt_3_fill.svg"/>
    <button>Account <img src="Expand_right_light (1).svg"/></button>
   </span>
</div>

</nav>
<div className="Hero-Section">
  <div className="head-box-img"><img src="/Screenshot 2025-03-25 at 4.44.07 PM 1 2.png" alt="Box1" className="hero-box1"/>
        <img src="/Screenshot 2025-03-25 at 4.43.58 PM 1 2.png" alt="Box 2" className="hero-box2"/>
        <img src="/Screenshot 2025-03-25 at 4.44.21 PM 1 2.png" alt="Box 3" className="hero-box3"/>
        <img src="/Screenshot 2025-03-25 at 4.44.15 PM 1 2.png" alt="Box 4" className="hero-box4"/></div>


<div className="header-text">
<h1>Rush Box <br/>The name is (mostly) literal.</h1>
<h4>Select a packaging style, quantity, and choose from custom or stock sizes – then start <br/>designing your custom boxes. Add customization options like images, text, and any 
<br/>color your brand requires. As you design you'll see an instant quote so you know exactly <br/>what your final order will come to.
</h4>
<span><button>ORDER</button></span>
</div>


</div>


       <div className="section-one">
<div className="head-section-one">

{/*
   <div className="gallery">
  
    <span className="row-one"> <img src="Credit.png" alt="Cardboard Box" className="Credit"/>
    
    <img src="COMPANIES.png" className="companies" alt="Shipper Box"/>
    </span>

<div>
        <span className="row-two"> <img src="Design your box.png" alt="Mailer Box"  className="Mailer"/>

          <img src="Custom Box.png" alt="Custom Box" className="Custom"/></span>
        
   
      
       
        <span> <img src="AI bank.png" alt="Folded Box" className="Folded"/>
  
      <img src="EASY PAY.png" alt="Corrugated Box" className="Corrugated"/></span>
       
    
    
<span > <img src="Paymaent.png" alt="Gift Box" className="Gift"/>
       <img src="invested.png" alt="Setup Box" className="Setup"/></span>
      
       </div>
         
            </div> */}
  

  <div className="gallery">
    <div className="box">
      <img src="Credit.png" alt="Cardboard Box"/>
      <div className="box-label">Cardboard <span>Box</span></div>
    </div>

    <div className="box">
      <img src="Design your box.png" alt="Mailer Box"/>
      <div className="box-label-one">Mailer <span>Box</span></div>
    </div>

    <div className="box">
      <img src="Custom Box.png" alt="Custom Box"/>
      <div className="box-label-three">Custom <span>Box</span></div>
    </div>

    <div className="box">
      <img src="COMPANIES.png" alt="Shipper Box"/>
      <div className="box-label">Shipper <span>Box</span></div>
    </div>

    <div className="box">
      <img src="AI bank.png" alt="Folded Box"/>
      <div className="box-label-two">Folded <span>Box</span></div>
    </div>

    <div className="box">
      <img src="EASY PAY.png" alt="Corrugated Box"/>
      <div className="box-label-four">Corrugated <span>Box</span></div>
    </div>

    <div className="box">
      <img src="Paymaent.png" alt="Gift Box"/>
      <div className="box-label">Gift <span>Box</span></div>
    </div>

    <div className="box">
      <img src="invested.png" alt="Setup Box"/>
      <div className="box-label">Setup <span>Box</span></div>
    </div>
  </div>

 
</div>

       </div>
     

     <div className="section-two">
<div className="head-section-two">

<main>
      <VideoReveal />
    </main>
    
    
</div>
     </div>
     <div className="section-three">
<div className="head-section-three">

<HowItWorks/>
</div>

     </div>

     <div className="section-four">
      <div className="head-section-four">

    

  


      <ImageScroller />


   
 
      </div>
     </div>
     <div className="image">
    <img src="/What we do Section.png" className="img"/>
    <div className="order-con">
      <button className="order">ORDER</button>
    </div>
  </div>
<Footer/>
</>
  );
}
