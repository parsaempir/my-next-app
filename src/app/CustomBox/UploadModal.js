"use client";
import React, { useRef, useState } from 'react';

const UploadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleBrowseFilesClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(imageUrl);
      console.log('فایل انتخاب شده:', selectedFile.name);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      overflow: "hidden"
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '25px',
        position: 'relative',
        padding: '35px 50px 90px 50px',
      }}>
        <img
          onClick={onClose}
          src='/Menu.svg'
          alt="Close"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "40px",
          }}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.2fr 1fr",
        }}>
          <div>
            <h3 style={{
              fontSize: "30px",
              lineHeight: "50px",
              marginTop: "0",
                  fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
            }}>Step 1</h3>
            <h4 style={{
              fontSize: "24px",
              lineHeight: "60px",
                  fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
            }}>Set up your box artwork</h4>
            <p style={{
              fontSize: "20px",
              marginBottom: "35px",
              fontFamily: " 'Secular One',sans-serif",
              fontWeight:"400",
            }}>STEP 1: Open the template file in your preferred program.</p>
            <p style={{
              fontSize: "20px",
              marginBottom: "35px",
              fontFamily: " 'Secular One',sans-serif",
              fontWeight:"400",
            }}>STEP 2: Place your artwork on a layer beneath the die-line<br /> layer</p>
            <p style={{
              fontSize: "20px",
              marginBottom: "35px",
              fontFamily: " 'Secular One',sans-serif",
              fontWeight:"400",
            }}>STEP 3: Save your work as a vector file (Ai, PDF, EPS, SVG).</p>
            <p style={{
              fontSize: "20px",
              marginBottom: "110px",
              fontFamily: " 'Secular One',sans-serif",
              fontWeight:"400",
            }}>STEP 4: Upload your new file to Rush Boxes!</p>
            <button style={{
              background: "#111111",
              width: "552px",
              height: "44px",
              color: "#FFFFFF",
              fontSize: "16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
                fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
            }}>Download die-line</button>
          </div>

          <div style={{
            width: "2px",
            height: "500px",
            background: "#F1F1F1",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            top: "48px"
          }}></div>

          <div>
            <h3 style={{
              fontSize: "30px",
              lineHeight: "50px",
              marginTop: "0",
                  fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
            }}>Step 2</h3>
            <h4 style={{
              fontSize: "24px",
              marginBottom: "30px",
                  fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
            }}>Upload your artwork</h4>

<div style={{
  border: '2px dashed #111111',
  borderRadius: '25px',
  width: "552px",
  height: "321px",
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2.5rem',

}}>
  {previewImage ? (
    <img
      src={previewImage}
      alt="Preview"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '15px',
        objectFit: 'contain'
      }}
    />
  ) : (
    <>
      <p style={{ color: '#000000', marginBottom: '0.5rem', fontSize: "18px",           fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400" }}>
        Drag and drop here to upload
      </p>
      <p style={{ color: '#000000', marginBottom: '1rem', fontSize: "18px",           fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"}}>
        or
      </p>
      <button
        onClick={handleBrowseFilesClick}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#000000',
   
          textDecoration: 'underline',
          cursor: 'pointer',
          fontSize: "18px",
                    fontFamily:" 'Secular One',sans-serif",
      fontWeight:"400"
        }}
      >
        Browse your files
      </button>
    </>
  )}

  <input
    type="file"
    ref={fileInputRef}
    onChange={handleFileChange}
    style={{ display: 'none' }}
    accept="image/*"
  />
</div>


            <button style={{
              background: "#00DB63",
              width: "552px",
              height: "44px",
              color: "#FFFFFF",
              fontSize: "16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
                fontFamily: " 'Raleway',sans-serif",
        fontWeight:"600"
            }}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
