'use clinet'
import VideoReveal from "./VideoReveal";
import HowItWorks from "./ScrollHighlight";
import ImageScroller from "./ImageScroller";
import Footer from './Footer';
import Header from "./Header";
export default function Home() {
  
  return (
<>
<Header/>

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

<style>{`
.header-text{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 30px;
    left: 450px;
}
.header-text h1{
    font-size: 50px;
    margin-bottom: 0;
    font-family: 'Secular One',sans-serif;
    font-weight:400;
}
.header-text h4{
    font-size: 16px;
   margin-bottom: 65px;
   color: #CFCFCF;
     font-weight:500;
     font-family: 'Raleway', sans-serif; 
     line-height: 1.5;
}
.header-text span button{
width: 233px;
height: 44px;
border-radius: 100px;
background-color: #111111;
color: white;
    font-family: 'Secular One',sans-serif;
    font-weight:400;
    border:none;
}
 
.Hero-Section{
    padding-top: 100px;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    position: relative;
}
.header-text{
    padding-top: 250px;
}

.head-box-img{
  position: relative;
  height:1000px;
}



.hero-box1{
  width: 600px;
  height: auto;
  position: absolute;
  top: -250px;
z-index: -1;
  transform: rotate(-15deg);
}

.hero-box2{
  width: 700px;
  height: auto;
  position: absolute;
top: -200px;
  right: -1px;
  transform: rotate(10deg);
  z-index: -1;
}

.hero-box3{
  width: 650px;
  height: auto;
  position: absolute;
top: 370px;

  transform: rotate(5deg);
}

.hero-box4 {
  width: 800px;
  height: auto;
  position: absolute;
top: 100px;
  right: -100px;
  transform: rotate(-5deg);
}


.section-one{
    background-color: #111111;
    padding-top: 150px;
    padding-bottom: 30px;
}



.row-one{
    display: flex;
    flex-direction: column;
   
}



.head-section-one{
width: 100%;
max-width: 1800px;
margin: auto;
display: flex;
}






.gallery {
 
    margin: 50px auto;
    display: grid;
    grid-template-areas:
      "cardboard mailer mailer  custom"
      "shipper mailer mailer  custom"
      "shipper folded corrugated corrugated "
      "shipper gift setup  setup";
    grid-template-columns: 1fr 0.9fr 0.3fr 1fr;
    grid-template-rows: 300px 50px 200px 300px;
    gap: 25px;

  }

  
  .box {
    position: relative;
    border-radius: 25px;
    overflow: hidden;

  }

  .box img {
    width: 100%;
    height: 100%;
object-fit: cover;

  }

  .box-label {
    position: absolute;
top: 30px;
    left: 5.5%;
    color: white;
    font-size: 18px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
.box-label span{
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
}
  .box-label-two span{
    font-family: 'Raleway', sans-serif;
  font-weight: 100;
  }
  .box-label-three span{
    font-family: 'Raleway', sans-serif;
  font-weight: 100;
  }
.box-label-four span {
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
}
  .box-label-one {
    position: absolute;
top: 45%;
    left: 35%;
    color: white;
    font-size: 18px;
   font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
  .box-label-two {
    position: absolute;
top: 50%;
    left: 39%;
    color: white;
    font-size: 18px;
   font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
  .box-label-three {
    position: absolute;
bottom: 5%;
    left: 10%;
    color: white;
    font-size: 18px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
  .box-label-four {
    position: absolute;
bottom: 10%;
    left: 5%;
    color: white;
    font-size: 18px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
  .gallery .box:nth-child(7) {
    grid-area: gift;
    width: 121.5%; 
    justify-self: start;
    z-index: 1;
  }
  
  .gallery .box:nth-child(8) {
    grid-area: setup;
    width: 85%;
    justify-self: end; 
    z-index: 0;
  }
  

  
  .gallery .box:nth-child(1) { grid-area: cardboard; }
  .gallery .box:nth-child(2) { grid-area: mailer; }
  .gallery .box:nth-child(3) { grid-area: custom; }
  .gallery .box:nth-child(4) { grid-area: shipper; }
  .gallery .box:nth-child(5) { grid-area: folded; }
  .gallery .box:nth-child(6) { grid-area: corrugated; }
  .gallery .box:nth-child(7) { grid-area: gift; }
  .gallery .box:nth-child(8) { grid-area: setup; }

  .image {
  position: relative;

  width: 100%;
  padding-top: 120px;

}

.img {
  position: relative;
  width: 100%;
  overflow: hidden;
  filter: brightness(20%);
}

.order-con {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.order {
  background-color: white;
  color: black;
  font-size: 32px;
  font-weight: 600;
  padding: 12px 160px;
  border: none;
  border-radius: 50px;
   font-family: 'Raleway', sans-serif;
  cursor: pointer;
  z-index: 1;
  pointer-events: auto;
}  




`}</style>
</>
  );
}
