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
    const total = 10; 

    gsap.to(trackRef.current, {
      xPercent: -100 * (total - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
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

  return (
    <section ref={sectionRef} className="slider-section">
      <div className="slider-wrapper">
        <div className="slider-box">
          <div ref={trackRef} className="slider-track">

            <div className="text-div"><h3>Take your pick<br />from the following <br />box styles!</h3></div>

            <div className="slider-item">
              <div className='in-slider'>
                <h3>Mailer <span>Box</span></h3>
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
  );
}
