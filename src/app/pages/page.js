"use client";
import '../globals.css';
import Header from '../Header';
import React, { useState } from 'react';
import UploadModal from './UploadModal';

const Pagetwo = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => {
  setIsModalOpen(true)
};
const handleCloseModal = () => {
  setIsModalOpen(false);
};
  return (<>
  <Header/>
  <div style={{
    width:"100%",
    height:"100%"

  }}>
    <div style={{
            width: '1116px',
            height:"auto",
        
   padding:"100px 0 0 70px",



    }}>
      <h1 style={{
        fontSize:"50px",
        textAlign:"center",
        paddingBottom:"30px",
        fontFamily: " 'Secular One',sans-serif",
        fontWeight:"400"

      }}>MAILER BOX</h1>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px 0px 30px 50px',
        borderRadius: '25px',
        width: '1116px',
height:"400px",
position:"relative",
        zIndex:"10"
      }} className='head-sectionone-pagetwo'>
        <h3 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#111111',
          paddingLeft:"50px",
             fontFamily: " 'Secular One',sans-serif",
        fontWeight:"400",
 
        }}>
          Configure & Price
        </h3>

        <div style={{
          display: 'flex',

          alignItems: 'flex-start',
      
        }}>
          <div style={{
            flex: '1 1 65%',
            width: '306px',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '0',
            }}>
              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="printColor" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Print Color:
                </label>
                <select
                  id="printColor"
                  style={{
                    display: 'block',
                    width: '306px',
                    height: '44px',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #E3E8EE',
                    borderRadius: '4px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5em 1.5em',
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                  }}
                >
                  <option>Full Color</option>
                </select>
              </div>

              {/* Print Finish */}
              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="printFinish" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Print finish:
                </label>
                <select
                  id="printFinish"
                  style={{
                    display: 'block',
                    width: '306px',
                    height: '44px',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #E3E8EE',
                    borderRadius: '4px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5em 1.5em',
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                  }}
                >
                  <option>HDPrint matte</option>
                </select>
              </div>

              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="size" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Size (L x W x D):
                </label>
                <select
                  id="size"
                  style={{
                    display: 'block',
                    width: '306px',
                    height: '44px',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #E3E8EE',
                    borderRadius: '4px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5em 1.5em',
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                  }}
                >
                  <option>9.5&quot; x 7.75&quot; x 4&quot;</option>
                </select>
              </div>

              {/* Printed sides */}
              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="printedSides" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Printed sides:
                </label>
                <select
                  id="printedSides"
                  style={{
                    display: 'block',
                    width: '306px',
                    height: '44px',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #E3E8EE',
                    borderRadius: '4px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5em 1.5em',
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                  }}
                >
                  <option>Outside</option>
                </select>
              </div>

              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="material" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Material:
                </label>
                <select
                  id="material"
                  style={{
                    display: 'block',
                    width: '306px',
                    height: '44px',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #E3E8EE',
                    borderRadius: '4px',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.5em 1.5em',
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                  }}
                >
                  <option>White</option>
                </select>
              </div>

              <div style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '200px' }}>
                <label htmlFor="quantity" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Quantity:
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <select
                    id="quantity"
                    style={{
                      display: 'block',
                      width: '214px',
                      height: '44px',
                      padding: '10px',
                      fontSize: '14px',
                      border: '1px solid #E3E8EE',
                      borderRadius: '4px',
                      outline: 'none',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      backgroundSize: '1.5em 1.5em',
                             fontFamily: " 'Raleway',sans-serif",
        fontWeight:"400"
                    }}
                  >
                
                    <option>600</option>
                 
                  </select>
                  <span style={{
                    color: '#4b5563',
                    whiteSpace: 'nowrap',
                    fontSize: '14.5px',
                    border:"1px solid #E3E8EE",
                    padding:"9px",
                    borderRadius:"4px",
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                  }}>
                     $
                <span style={{ fontSize: '1em',  position:"relative", top:"2px"  }}>3</span>
                .
                <span style={{ fontSize: '0.8em',   }}>2</span>
                <span style={{ fontSize: '1em',  position:"relative" }}>6</span>  each          </span>
                </div>
                <p style={{
                  color: '#00DB63',
                  fontSize: '10px',
                  marginTop: '0.25rem',
                         fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
                }}>
                  Save 8<span style={{   fontSize: '0.875rem',  position:"relative", top:"2px"  }}>4</span>%          

                </p>
              </div>
            </div>
          </div>

          <div style={{
            flex: '0 0 38%',
            paddingTop:"15px"
         
          }}>
            <div style={{
     
        
       
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#111111',
                textAlign: 'center',
                    margin:"0",
                           fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
              }}>
                Subtotal
                <p style={{
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#111111',
                textAlign: 'center',
                margin:"0",
                   fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
              }}>
                <span style={{ fontSize: '1.2em' }}>$</span>
                <span style={{ fontSize: '0.9em' }}>1,</span>
                <span style={{ fontSize: '1em', position:"relative", top:"5px" }}>93</span>
                <span style={{ fontSize: '1em', position:"relative", bottom:"3px"}}>8</span>
                <span style={{ fontSize: '1em', }}>.00</span>
              </p>
              </h3>
        
              <p style={{
                color: '#00DB63',
                fontSize: '14.5px',
                textAlign: 'center',
   margin:"0 0 75px 0",
position:"relative",
left:"50px",
       fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
              }}>
                $
                <span style={{ fontSize: '1em',  position:"relative", top:"2px"  }}>3</span>
                .
                <span style={{ fontSize: '0.8em',   }}>2</span>
                <span style={{ fontSize: '1em',  position:"relative" }}>6</span> each
              </p>
            </div>
<div style={{
display:"flex",
justifyContent:"center"


}}>


<button onClick={handleOpenModal} style={{
              backgroundColor: '#604BA0',
              color: '#FFFFFF',
              fontWeight: 'bold',
              borderRadius: '100px',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
         
              width: '293px',
            height:"44px"
            }}>
              Upload
            </button>
</div>
        
          </div>
        </div>

        <p style={{
          fontSize: '18px',
          color: '#707070',
          marginTop: '2.5rem',
          fontFamily: " 'Raleway',sans-serif",
          fontWeight:"600",
  
        }}>
          Remember to use one of our pre-made die-line templates! All downloads can be found here.
        </p>
      </div>
    </div>
    <div style={{
position:"relative"

    }}><img src='Screenshot 2025-03-25 at 4.44.15 PM 1 (2).png' height="1200px" className='box-img-pagetwo'  style={{
      position:"absolute",
   right:"-17%", transform: 'translate(-50%, -65%)',
      zIndex:"0",

    }}
    /></div>
    <div className='text-secondary' style={{
         padding:"50px 0 0 70px",
       fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600",
        fontSize:"18px",
        color:"#707070"
    }} >
      <p>22 Reviews Go for a stylish and sturdy custom mailer box designed to ship directly in the mail. Choose between<br/> black ink or colored printing to suit your brand. Perfect  for retail-ready gift boxes, subscription boxes, and e-<br/>commerce packaging. Need something different? You can check out our customizable<span style={{
        textDecoration:"underline"}}> Shipping<br/> Boxes </span>and <span style={{ textDecoration:"underline"}}>Product Boxes </span>for your different packaging needs!</p>
    </div>
    <div className='img-btn-container' style={{
         padding:"0 0 0 70px",
display:"flex",
alignItems:"center",
gap:"5rem"

    }}><img src='Frame 142343482.png' /> 
    <div>  <button style={{
background:"#604BA0",
color:"#FFFFFF",
border:"none",
borderRadius:"100px",
fontSize:"32px",
fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600",
        width:"627px",
        height:"80px",
        

    }}>Download the die-line for this box</button></div>
  </div>
    </div>
    <UploadModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    <style>
      {`
     body, html{
    width: 100%;
height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
   background-color: #f3f4f6;
}

 
      
    @media (max-width:1800px) {
  
     
      .box-img-pagetwo {
    left: 80%;           

    height: 800px;        
  }
        
    }
   @media (max-width:1600px) {
   .head-sectionone-pagetwo,
   .text-secondary,
   .img-btn-container
   {  transform: scaleX(0.9); 
}
        .box-img-pagetwo {
    left: 82.5%;           

    
  }
   }
      `}
    </style>
    </>
  );
};

export default Pagetwo;