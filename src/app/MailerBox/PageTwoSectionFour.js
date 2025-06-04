'use client';
import { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src="/Sustainability.png" alt="Background" style={{ width: '100%', height: 'auto' }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <div style={{ padding: '10px 0' }}>
          <div
            onClick={() => toggleItem(0)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              padding: '15px 20px',
              borderRadius: openIndex === 0 ? '25px 25px 0 0' : '25px',
              color: '#fff',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>OUR FOCUS ON SUSTAINABILITY</span>
            <img
              src={openIndex === 0 ? '/Vector (2).svg' : '/Vector (1).svg'}
              alt={openIndex === 0 ? 'Close' : 'Open'}
            />
          </div>
          <div
            style={{
              maxHeight: openIndex === 0 ? '500px' : '0px',
              transform: openIndex === 0 ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              overflow: 'hidden',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              borderRadius: '0 0 25px 25px',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              transition: 'max-height 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            <div style={{ padding: openIndex === 0 ? '15px 20px' : '0 20px' }}>
              At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.
            </div>
          </div>
        </div>

        <div style={{ padding: '10px 0' }}>
          <div
            onClick={() => toggleItem(1)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              padding: '15px 20px',
              borderRadius: openIndex === 1 ? '25px 25px 0 0' : '25px',
              color: '#fff',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>OUR FOCUS ON SUSTAINABILITY</span>
            <img
              src={openIndex === 1 ? '/Vector (2).svg' : '/Vector (1).svg'}
              alt={openIndex === 1 ? 'Close' : 'Open'}
            />
          </div>
          <div
            style={{
              maxHeight: openIndex === 1 ? '500px' : '0px',
              transform: openIndex === 1 ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              overflow: 'hidden',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              borderRadius: '0 0 25px 25px',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              transition: 'max-height 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            <div style={{ padding: openIndex === 1 ? '15px 20px' : '0 20px' }}>
              At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.
            </div>
          </div>
        </div>

        <div style={{ padding: '10px 0' }}>
          <div
            onClick={() => toggleItem(2)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              padding: '15px 20px',
              borderRadius: openIndex === 2 ? '25px 25px 0 0' : '25px',
              color: '#fff',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>OUR FOCUS ON SUSTAINABILITY</span>
            <img
              src={openIndex === 2 ? '/Vector (2).svg' : '/Vector (1).svg'}
              alt={openIndex === 2 ? 'Close' : 'Open'}
            />
          </div>
          <div
            style={{
              maxHeight: openIndex === 2 ? '500px' : '0px',
              transform: openIndex === 2 ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              overflow: 'hidden',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              borderRadius: '0 0 25px 25px',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              transition: 'max-height 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            <div style={{ padding: openIndex === 2 ? '15px 20px' : '0 20px' }}>
              At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.
            </div>
          </div>
        </div>

        <div style={{ padding: '10px 0' }}>
          <div
            onClick={() => toggleItem(3)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              padding: '15px 20px',
              borderRadius: openIndex === 3 ? '25px 25px 0 0' : '25px',
              color: '#fff',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span>OUR FOCUS ON SUSTAINABILITY</span>
            <img
              src={openIndex === 3 ? '/Vector (2).svg' : '/Vector (1).svg'}
              alt={openIndex === 3 ? 'Close' : 'Open'}
            />
          </div>
          <div
            style={{
              maxHeight: openIndex === 3 ? '500px' : '0px',
              transform: openIndex === 3 ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              overflow: 'hidden',
              backgroundColor: 'rgba(17, 17, 17, 0.35)',
              borderRadius: '0 0 25px 25px',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              transition: 'max-height 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            <div style={{ padding: openIndex === 3 ? '15px 20px' : '0 20px' }}>
              At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;