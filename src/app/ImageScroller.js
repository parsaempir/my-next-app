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
                <h3> MAILER <span>Box</span></h3>
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
                <h3>Shipper <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-four'  id='hovre-box' src='/4.png' />
                  <img className='photo-five' id='hovre-box' src='/3.png' />
                  <img className='photo-six' src='/5.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>FOLDED <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-seven' id='hovre-box' src='/1.png' />
                  <img className='photo-eight' id='hovre-box' src='/6.png' />
                  <img className='photo-nine' src='/2.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3>Courogated<br /> <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-ten' id='hovre-box' src='/8.png' />
                  <img className='photo-eleven' id='hovre-box' src='/9.png' />
                  <img className='photo-twelve' src='/7.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>Cardboard  <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-thirteen' id='hovre-box' src='/11.png' />
                  <img className='photo-fourteen' id='hovre-box' src='/12.png' />
                  <img className='photo-fifteen' src='/10.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3>Gift  <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-sixteen' id='hovre-box' src='/19.png' />
                  <img className='photo-seventeen' id='hovre-box' src='/21.png' />
                  <img className='photo-eighteen' src='/13.png' />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>Custom <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-nineteen' id='hovre-box' src='/15.png' />
                  <img className='photo-twenty' id='hovre-box' src='/16.png' />
                  <img className='photo-twentyone' src='/17.png' />
                </div>
              </div>
            </div>

            <div className="slider-item1">
              <div className='in-slider'>
                <h3>Setup <span>Box</span></h3>
                <div className='photo-slider'>
                  <img className='photo-twentyfour' id='hovre-box' src='/19.png' />
                  <img className='photo-twentytwo' id='hovre-box' src='/18.png' />
                  <img className='photo-twentythree' src='/20.png' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    <style>{`
    
     
  .slider-section {
    height: 800vh;
    position: relative;
  
  }
  
  .slider-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slider-box {
    width: 100%;
    height: 800px;
    background: white;
    border-radius: 24px;
    overflow: hidden;
    padding: 300px 0px 300px 400px ;
 margin-top: 200px;
 
  }
  
  .slider-track {
    display: flex;
    height: 100%;
    gap:50rem;
  }
  
  .slider-item {
    flex-shrink: 0;
    width: 850px;
    height: 500px;
    background: #111111;
    border-radius: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: white;
    transform: rotate(-5deg);

    position: relative;
  }
  
  .slider-item1 {
    flex-shrink: 0;
    width: 1000px;
    height: 600px;
    background: #111111;
    border-radius: 50px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
 color: white;
    transform: rotate(5deg);
    position: relative;

  }
 
.in-slider h3{
position: absolute;
font-size: 89px;
width: 100%;
left: 5%;
top: -15%;
}
.in-slider h3 span{
font-weight: 200;
}
.in-slider p{
  position: absolute;
  font-size: 25px;
  width: 100%;
  left: 5%;
  top:15%;
  font-weight: 300;
  }
  .photo-slider{
    position: relative;
  }
  .photo-one{
    position: absolute;
    width: 350px;
    height: auto;
    object-fit: cover;
    top: 100px;
left: -130px; 
    display:none;
transform: rotate(5deg); }
  .photo-two{
    position: absolute;
    width: 450px;
    height: auto;
    top: 200px;
    left: 40px; 
    transform: rotate(5deg);
    display:none;
  }
  .photo-three{
    position: absolute;
    width: 2200px;
    height: auto;
top: -420px;
left: -250px; 
    display:none;
transform: rotate(10deg); }
.photo-four{
  position: absolute;
  width: 370px;
  height: auto;
    
  object-fit: cover;
  top: 135px;
left: -130px; 
transform: rotate(-10deg)
 }
.photo-five{
  position: absolute;
  width: 300px;
  height: auto;
  object-fit: cover;
top: 287px;
left: 200px;

 }
.photo-six{
  position: absolute;
  width: 1100px;
  height: auto;
  object-fit: cover;
  top: -85px;
left: 280px; 
transform: rotate(-5deg)
}
.photo-seven{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
  top: 100px;
left: -130px; 
transform: rotate(5deg)

 }
.photo-eight{
  position: absolute;
  width: 420px;
  height: auto;
  object-fit: cover;
top: 140px;
left: 170px;

 }
.photo-nine{
  position: absolute;
  width: 1300px;
  height: auto;
  object-fit: cover;
  top: -115px;
left: 190px; 
 transform: rotate(10deg);
}
.photo-ten{
  position: absolute;
  width: 450px;
  height: auto;
  object-fit: cover;
  top: 170px;
left: -190px; 
transform: rotate(-10deg);
 }
.photo-eleven{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
top: 310px;
left: 180px;

 }
.photo-twelve{
  position: absolute;
  width: 1500px;
  height: auto;
  object-fit: cover;
  top: -380px;
left: 120px; 
transform: rotate(-10deg);
}
.photo-thirteen{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
  top: 95px;
left: -110px; 
transform: rotate(5deg);
 }
.photo-fourteen{
  position: absolute;
  width: 380px;
  height: auto;
  object-fit: cover;
top: 240px;
left: 210px;
transform: rotate(10deg);

 }
.photo-fifteen{
  position: absolute;
  width: 1400px;
  height: auto;
  object-fit: cover;
  top: -150px;
left: 210px; 
transform: rotate(10deg);

}
.photo-sixteen{
  position: absolute;
  width: 470px;
  height: auto;
  object-fit: cover;
  top: 0px;
left: -160px; 
transform: rotate(-10deg);
 }
.photo-seventeen{
  position: absolute;
  width: 350px;
  height: auto;
  object-fit: cover;
top: 210px;
left: 165px;
transform: rotate(-10deg);

 }
.photo-eighteen{
  position: absolute;
  width: 1300px;
  height: auto;
  object-fit: cover;
  top: -185px;
left: 180px; 
transform: rotate(-5deg);

}
.photo-nineteen{
  position: absolute;
  width: 650px;
  height: auto;
  object-fit: cover;
  top: -30px;
left: -300px; 
transform: rotate(10deg);

 }
.photo-twenty{
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: cover;
top: 260px;
left: 150px;

 }
.photo-twentyone{
  position: absolute;
  width: 1350px;
  height: auto;
  object-fit: cover;
  top: -370px;
left: 235px; 
transform: rotate(10deg);

}
.photo-twentytwo{
  position: absolute;
  width:260px;
  height: auto;
  object-fit: cover;
top: 340px;
left: 170px;
 }
.photo-twentythree{
  position: absolute;
  width: 1500px;
  height: auto;
  object-fit: cover;
  top: -310px;
left: 200px; 
transform: rotate(-5deg);

}
.photo-twentyfour{
  position: absolute;
  width: 510px;
  height: auto;
  object-fit: cover;
  top: 0px;
left: -200px; 
transform: rotate(-10deg);
 }
.text-div h3 {
 text-align: center;
font-size: 80px;
  border-radius: 50px;
  color: #111111;
left: -10%;
position: absolute;
}

    
    `}

    </style>
    </>
  );
}