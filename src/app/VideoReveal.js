'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoReveal() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;


    gsap.set(video, {
      clipPath: 'circle(7% at 50% 50%)',
    });

  
    gsap.to(video, {
      clipPath: 'circle(150% at 50% 50%)',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      
      },
    });
  }, []);

  return (
    <div style={{ background: '#fff' }}>
      
   

      {/* بخش ویدیو که اسکرول‌زون انیمیشنیه */}
      <section
        ref={wrapperRef}
        style={{
          height: '220vh',
          position: 'relative',
          background: '#fff',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            src="/4816954-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

      
    </div>
  );
}
