'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './globals.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Calculate the total scrollable width
    const trackWidth = trackRef.current.scrollWidth;
    const wrapperWidth = sectionRef.current.querySelector('.slider-box').clientWidth; // Get the width of the visible container

    gsap.to(trackRef.current, {
      x: -(trackWidth - wrapperWidth), // Move by the difference between total content width and visible width
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true, // Crucial for responsive adjustments
      },
    });

    const items = trackRef.current.querySelectorAll('.slider-item, .slider-item1');

    items.forEach(item => {
      const photos = item.querySelectorAll('img#hovre-box');

      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        photos.forEach((img, index) => {
          gsap.to(img, {
            x: x * 0.03 * (index + 1),
            y: y * 0.03 * (index + 1),
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });

      item.addEventListener('mouseleave', () => {
        photos.forEach(img => {
          gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (<>
    <section ref={sectionRef} className="slider-section">
      <div className="slider-wrapper">
        <div className="slider-box">
          <div ref={trackRef} className="slider-track">

            <div className="text-div"><h3>Take your pick<br />from the following <br />box styles!</h3></div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3> MAILER <span>BOX</span></h3>
                <p>Sturdy, Self-Locking Packaging.</p>
                <div className='photo-slider'>
                  <img className='photo-one' src='/10569485 3.png' id='hovre-box'/>
                  <img className='photo-two' src='10569485 4.png'  id='hovre-box'/>
                  <img className='photo-three' src='m021t006_paper_food_box_mockup_02 4.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3> SHIPPER <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-four'  id='hovre-box' src='/4.png' />
                  <img className='photo-five' id='hovre-box' src='/3.png' />
                  <img className='photo-six' src='/5.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>FOLDED <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-seven' id='hovre-box' src='/1.png' />
                  <img className='photo-eight' id='hovre-box' src='/6.png' />
                  <img className='photo-nine' src='/2.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3> COUROGATED <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-ten' id='hovre-box' src='/8.png' />
                  <img className='photo-eleven' id='hovre-box' src='/9.png' />
                  <img className='photo-twelve' src='/7.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>  CARDBOARD <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-thirteen' id='hovre-box' src='/11.png' />
                  <img className='photo-fourteen' id='hovre-box' src='/12.png' />
                  <img className='photo-fifteen' src='/10.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3>GIFT  <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-sixteen' id='hovre-box' src='/19.png' />
                  <img className='photo-seventeen' id='hovre-box' src='/21.png' />
                  <img className='photo-eighteen' src='/13.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3> CUSTOM <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-nineteen' id='hovre-box' src='/15.png' />
                  <img className='photo-twenty' id='hovre-box' src='/16.png' />
                  <img className='photo-twentyone' src='/17.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3>  SETUP <span>BOX</span></h3>
                <div className='photo-slider'>
                  <img className='photo-twentyfour' id='hovre-box' src='/19.png' />
                  <img className='photo-twentytwo' id='hovre-box' src='/18.png' />
                  <img className='photo-twentythree' src='/20.png' />
                </div>
              </div>
 
            </div>

            <div style={{
width:"800px",
height: "auto",
opacity: "0"
}}>&nbsp; vacant
</div>
          </div>
        </div>
      </div>
    </section>
    
    <style>{`
    
     
  .slider-section {
    height: 800vh;
    position: relative;

  background-color: transparent;
  }
  
  .slider-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
     margin-top: 250px;
  }
  
  .slider-box {
    width: 100%;
    height: 800px;
    background: white;
    border-radius: 24px;
    overflow: hidden;
    padding: 350px 0px 0px 250px ;

 
  }
  
  .slider-track {
    display: flex;
    height: 100%;
    gap:50rem;
  }
  
  .slider-item {
    flex-shrink: 0;
    width: 800px;
    height: 480px;
    background: #111111;
    border-radius: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: white;
    transform: rotate(-5deg);
cursor: pointer;
    position: relative;
  }
  
  .slider-item1 {
    flex-shrink: 0;
   width: 800px;
    height: 480px;
    background: #111111;
    border-radius: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
 color: white;
    transform: rotate(5deg);
    position: relative;
cursor: pointer;
  }
 
.in-slider h3{
position: absolute;
font-size: 60px;
width: 100%;
top:-35px;
left: 45px;
font-weight: 400;
  font-family: 'Secular One',sans-serif;
}
.in-slider h3 span{
  font-weight: 100;
   font-family: 'Raleway', sans-serif; 
}
.in-slider p{
  position: absolute;
  font-size: 25px;
top:60px;
left: 45px;
  font-weight: 100;
   font-family: 'Raleway', sans-serif; 
  }
  .photo-slider{
    position: relative;
  }
  .photo-one{
    position: absolute;
    width: 280px;
    height: auto;
    object-fit: cover;
    top: 70px;
left: -100px; 
transform: rotate(5deg); }
  .photo-two{
    position: absolute;
    width: 350px;
    height: auto;
    top: 150px;
    left: 50px; 
    transform: rotate(5deg);
  }
  .photo-three{
    position: absolute;
    width: 1750px;
    height: auto;
top: -330px;
left: -200px; 
transform: rotate(10deg); 
pointer-events: none;
}
.photo-four{
  position: absolute;
  width: 330px;
  height: auto;
  object-fit: cover;
  top: 90px;
left: -130px; 
transform: rotate(-10deg);

 }
.photo-five{
  position: absolute;
  width: 270px;
  height: auto;
  object-fit: cover;
top: 198px;
left: 150px;

 }
.photo-six{
  position: absolute;
  width: 950px;
  height: auto;
  object-fit: cover;
  top: -125px;
left: 200px; 
transform: rotate(-5deg);
pointer-events: none;
}
.photo-seven{
  position: absolute;
  width: 350px;
  height: auto;
  object-fit: cover;
  top: 70px;
left: -110px; 
transform: rotate(5deg)

 }
.photo-eight{
  position: absolute;
  width: 350px;
  height: auto;
  object-fit: cover;
top: 115px;
left: 140px;
transform: rotate(5deg)

 }
.photo-nine{
  position: absolute;
  width: 1100px;
  height: auto;
  object-fit: cover;
  top: -130px;
left: 110px; 
 transform: rotate(10deg);
 pointer-events: none;
}
.photo-ten{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
  top: 120px;
left: -170px; 
transform: rotate(-10deg);
 }
.photo-eleven{
  position: absolute;
  width: 350px;
  height: auto;
  object-fit: cover;
top: 220px;
left: 160px;

 }
.photo-twelve{
  position: absolute;
  width: 1200px;
  height: auto;
  object-fit: cover;
  top: -300px;
left: 140px; 
transform: rotate(-10deg);
pointer-events: none;
}
.photo-thirteen{
  position: absolute;
  width:310px;
  height: auto;
  object-fit: cover;
  top: 85px;
left: -85px; 
transform: rotate(5deg);
 }
.photo-fourteen{
  position: absolute;
  width: 300px;
  height: auto;
  object-fit: cover;
top: 195px;
left: 170px;
transform: rotate(10deg);

 }
.photo-fifteen{
  position: absolute;
  width: 1200px;
  height: auto;
  object-fit: cover;
  top: -170px;
left: 120px; 
transform: rotate(10deg);
pointer-events: none;

}
.photo-sixteen{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
  top: 20px;
left: -135px; 
transform: rotate(-10deg);
 }
.photo-seventeen{
  position: absolute;
  width: 300px;
  height: auto;
  object-fit: cover;
top: 145px;
left: 150px;
transform: rotate(-10deg);

 }
.photo-eighteen{
  position: absolute;
  width: 1020px;
  height: auto;
  object-fit: cover;
  top: -150px;
left: 160px; 
transform: rotate(-5deg);
pointer-events: none;

}
.photo-nineteen{
  position: absolute;
  width: 520px;
  height: auto;
  object-fit: cover;
  top: -20px;
left: -240px; 
transform: rotate(10deg);

 }
.photo-twenty{
  position: absolute;
  width: 350px;
  height: auto;
  object-fit: cover;
top: 185px;
left: 130px;
transform: rotate(5deg);

 }
.photo-twentyone{
  position: absolute;
  width: 1000px;
  height: auto;
  object-fit: cover;
  top: -250px;
left:210px; 
transform: rotate(5deg);
pointer-events: none;

}
.photo-twentytwo{
  position: absolute;
  width:220px;
  height: auto;
  object-fit: cover;
top: 255px;
left: 140px;
 }
.photo-twentythree{
  position: absolute;
  width: 1200px;
  height: auto;
  object-fit: cover;
  top: -270px;
left: 180px; 
transform: rotate(-5deg);
pointer-events: none;
}
.photo-twentyfour{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
  top: 15px;
left: -140px; 
transform: rotate(-10deg);
 }
.text-div h3 {
 text-align: center;
font-size: 80px;
  border-radius: 50px;
  color: #111111;
    position: absolute;
font-weight: 400;
  font-family: 'Secular One',sans-serif;
}
.text-div{
padding:0 150px 0 50px;}

    `}

    </style>
    </>
  );
}