'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './globals.css'
gsap.registerPlugin(ScrollTrigger);

export default function ProductSlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const total = 8; // تعداد اسلایدها

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

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="slider-section">
      <div className="slider-wrapper">
        <div className="slider-box">
          <div ref={trackRef} className="slider-track">

            {/* === Slide 1 === */}
            <div className="slider-item">
              <div className='in-slider'>
              <h1>Mailer <span>Box</span></h1>
                 <p>Sturdy, Self-Locking Packaging.</p>
               <div className='photo-slider'>
               <img className='photo-one' src='/10569485 3.png' />
<img className='photo-two' src='10569485 4.png'/>
<img className='photo-three' src='m021t006_paper_food_box_mockup_02 4.png'/>
               </div>
          
              </div>
            </div>

            {/* === Slide 2 === */}
            <div className="slider-item1">
              <div>
                <span>  </span>
              </div>
            </div>

            {/* === Slide 3 === */}
            <div className="slider-item">
              <div>
              </div>
            </div>

            {/* ... ادامه برای اسلایدهای دیگر */}

            <div className="slider-item1"><div><img src="/images/product4.png" /></div></div>
            <div className="slider-item"><div><img src="/images/product5.png" /></div></div>
            <div className="slider-item1"><div><img src="/images/product6.png" /></div></div>
            <div className="slider-item"><div><img src="/images/product7.png" /></div></div>
            <div className="slider-item1"><div><img src="/images/product8.png" /></div></div>

          </div>
        </div>
      </div>
    </section>
  );
}
