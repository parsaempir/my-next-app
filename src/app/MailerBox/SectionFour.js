'use client';

import { useRef, useState, useEffect } from 'react';

const AccordionItem = ({ index, title, children, openIndex, toggleItem }) => {
  const contentRef = useRef(null);
  const isOpen = openIndex === index;
  const [height, setHeight] = useState('0px');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
      setOpacity(1);
    } else {
      setHeight('0px');
      setOpacity(0);
    }
  }, [isOpen]);

  return (
    <div style={{
      backgroundColor: 'rgba(17, 17, 17, 0.35)',
      color: '#fff',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      marginBottom: '15px',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
    }}>
      <div
        onClick={() => toggleItem(index)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '1px 20px',
          fontWeight: 'bold',
          height: '60px',
        }}
      >
        <span>{title}</span>
        <img
          src={isOpen ? '/Vector (2).svg' : '/Vector (1).svg'}
          alt={isOpen ? 'Close' : 'Open'}
          style={{
            transition: 'transform 0.4s ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>
      <div
        ref={contentRef}
        style={{
          height,
          opacity,
          transition: 'height 0.4s ease, opacity 0.4s ease',
          padding: isOpen ? '0 20px 15px 20px' : '0 20px',
        }}
      >
        <div style={{ paddingTop: '15px' }}>{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'url(/Sustainability.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px', position: 'relative', top: '200px',
           fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
       }}>
        <AccordionItem
          index={0}
          title="OUR FOCUS ON SUSTAINABILITY"
          openIndex={openIndex}
          toggleItem={toggleItem}
        >
        <p style={{
      fontFamily:" 'Raleway',sans-serif",
      fontWeight:"200"


        }}>At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. 

That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.</p> 
        </AccordionItem>

        <AccordionItem
          index={1}
          title="OUR TECHNOLOGY & MATERIALS"
          openIndex={openIndex}
          toggleItem={toggleItem}
        >
     <p style={{
      fontFamily:" 'Raleway',sans-serif",
      fontWeight:"200"


        }}>At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. 

That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.</p> 
        </AccordionItem>

        <AccordionItem
          index={2}
          title="OUR FOCUS ON SUSTAINABILITY"
          openIndex={openIndex}
          toggleItem={toggleItem}
        >
    <p style={{
      fontFamily:" 'Raleway',sans-serif",
      fontWeight:"200"


        }}>At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. 

That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.</p> 
        </AccordionItem>

        <AccordionItem
          index={3}
          title="OUR COMMITMENT TO THE PLANET"
          openIndex={openIndex}
          toggleItem={toggleItem}
        >
<p style={{
      fontFamily:" 'Raleway',sans-serif",
      fontWeight:"200"


        }}>At Rush, we care deeply about our planet and its inhabitants and we believe it is everyone’s responsibility to do what they can to help them survive, heal and thrive. 

That is why we take every step we can to do just that. We use the latest in sustainable technology, materials and supplies as well as taking part in HP’s Planet Partners recycling program to ensure we are being as friendly to our planet as possible while operating.</p> 
        </AccordionItem>
      </div>
    </div>
  );
};

export default Accordion;
