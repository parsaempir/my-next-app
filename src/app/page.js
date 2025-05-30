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
.Hero-Section {
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 100px;
  overflow: hidden;
}

.head-box-img {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-box1,
.hero-box2,
.hero-box3,
.hero-box4 {
  position: absolute;
  z-index: 1;
}

/* 👇 باکس بالا سمت چپ */
.hero-box1 {
  width: 600px;
  top: 40px;
  left: 60px;
  transform: rotate(-8deg);
}

/* 👇 باکس بالا سمت راست */
.hero-box2 {
  width: 700px;
  top: 50px;
  right: 80px;
  transform: rotate(10deg);
}

/* 👇 باکس پایین سمت چپ */
.hero-box3 {
  width: 600px;
  bottom: 40px;
  left: 60px;
  transform: rotate(5deg);
}

/* 👇 باکس پایین سمت راست */
.hero-box4 {
  width: 800px;
  bottom: 20px;
  right: 60px;
  transform: rotate(-5deg);
}

.header-text {
  position: relative;
  text-align: center;
  z-index: 2;
  max-width: 900px;
}

.header-text h1 {
  font-size: 54px;
  font-family: 'Secular One', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
}

.header-text h4 {
  font-size: 18px;
  color: #CFCFCF;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  line-height: 1.7;
  margin-bottom: 50px;
}

.header-text span button {
  width: 240px;
  height: 50px;
  border-radius: 100px;
  background-color: #111111;
  color: white;
  font-family: 'Secular One', sans-serif;
  font-weight: 400;
  border: none;
  cursor: pointer;
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
cursor: pointer;  }

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
    font-size: 35px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
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
     font-size:35px;
   font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
  }
  .box-label-two {
    position: absolute;
top: 50%;
    left: 130px;
    color: white;
     font-size: 35px;
   font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
  }
  .box-label-three {
    position: absolute;
bottom: 5%;
    left: 10%;
    color: white;
    font-size: 35px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
  }
  .box-label-four {
    position: absolute;
bottom: 10%;
    left: 5%;
    color: white;
    font-size: 35px;
    font-weight: 400;
        font-family: 'Secular One',sans-serif;
    text-transform: uppercase;
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
