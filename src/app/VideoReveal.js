'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoReveal() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const rotatingTextContainerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    /*gsap.set(video, {
      clipPath: 'circle(10% at 50% 50%)',
    });*/


    const screenWidth = window.innerWidth;

   
    let initialClipPath = 'circle(9.5% at 50% 50%)';
  
    if (screenWidth < 1700) {
      initialClipPath = 'circle(12% at 50% 50%)';
    } else if (screenWidth < 768) {
      initialClipPath = 'circle(20% at 50% 50%)';
    }
  
    gsap.set(video, {
      clipPath: initialClipPath,
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

    gsap.to(rotatingTextContainerRef.current, {
      rotation: 360,
      duration: 15,
      ease: "none",
      repeat: -1,
      transformOrigin: '50% 50%',
    });
  }, []);


  const textParts = [
    <tspan key="1" fill="#FFFFFF">PLAY VIDEO</tspan>,
    <tspan key="gap1" fill="transparent">{'..........'}</tspan>,
    <tspan key="2" fill="#FFFFFF">PLAY VIDEO</tspan>,
    <tspan key="gap2" fill="transparent">{'..........'}</tspan>,
    <tspan key="3" fill="#FFFFFF">PLAY VIDEO</tspan>,
  ];

  return (
    <div style={{ background: '#fff' }}>
      
      <section
        ref={wrapperRef}
        style={{
          height: '220vh',
          position: 'relative',
          background: '#fff',
        }}
      >
        <h3
  style={{
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 11,
    color: '#111111',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    pointerEvents: 'none',
    fontFamily: " 'Secular One',sans-serif",
    fontWeight: "400"
  }}
>
  About
</h3>

        <div
          style={{
            position: 'sticky',
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          
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
              position: 'absolute',
              top: 0,
              left: 0,
                cursor: "pointer"
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              borderRadius: '50%',
              width: '190px',
              height: '190px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/Play Icon.svg"
              alt="Play Icon"
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </div>

      
          <div
            ref={rotatingTextContainerRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9,
              pointerEvents: 'none',
              width: '250px',
              height: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
              <path
                id="circlePath"
                d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                fill="none"
              />
              <text style={{
                fontSize: '21px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'uppercase',
              }}>
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {textParts}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
