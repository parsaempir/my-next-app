'use client';
import { useState, useRef } from "react";
import './globals.css';

function Header() {
    let [divShow, setDivShow] = useState(false);
    let [divShowOne, setDivShowOne] = useState(false);
    let [divShowTwo, setDivShowTwo] = useState(false);

    const [hoveredIndexMailer, setHoveredIndexMailer] = useState(null);
    const [hoveredIndexProduct, setHoveredIndexProduct] = useState(null);
    const [hoveredIndexRigged, setHoveredIndexRigged] = useState(null);


    const timeoutRef = useRef(null);
    const timeoutRefOne = useRef(null);
    const timeoutRefTwo = useRef(null);

    const mailerImages = [
        { src: "/Mailer Box.png", text: "Mailer Box", itemWidth: "500px", itemHeight: "auto" },
        { src: "/Shipper Box.png", text: "Shipper Box", itemWidth: "500px", itemHeight: "auto" },
        { src: "/Foldwd Box.png", text: "Folded Box", itemWidth: "500px", itemHeight: "auto" }
    ];
    const productImages = [
        { src: "/10.png", text: "Cardboard Box", itemWidth: "600px", itemHeight: "auto" },
        { src: "/7.png", text: "Corrugated Box", itemWidth: "500px", itemHeight: "auto" }
    ];
    const riggedImages = [
        { src: "/13.png", text: "Gift Box", itemWidth: "500px", itemHeight: "auto" },
        { src: "/20.png", text: "Setup Box", itemWidth: "500px", itemHeight: "auto" },
        { src: "/17.png", text: "Custom Box", itemWidth: "450px", itemHeight: "auto" }
    ];

    const isAnyHovered = divShow || divShowOne || divShowTwo;

    const handleMouseEnter = (setFn, ref) => {
        if (ref.current) {
            clearTimeout(ref.current);
        }
        setFn(true);
    };

    const handleMouseLeave = (setFn, ref) => {
        ref.current = setTimeout(() => {
            setFn(false);
        }, 100);
    };

    return (
        <>
            {isAnyHovered && <div className="overlay-backdrop" />}

            <nav>
                <div className="head-nav">

                    <span>
                        <img src="/logo.svg" alt="Logo" />
                    </span>
                    <span className="head-nav-center">
                        <span
                            onMouseEnter={() => handleMouseEnter(setDivShow, timeoutRef)}
                            onMouseLeave={() => handleMouseLeave(setDivShow, timeoutRef)}
                        >
                            Mailer <img src="Expand_right_light.svg" className={divShow ? 'rotated' : ''} alt="Expand Icon" />
                        </span>
                        <div
                            className={`hover-box-show ${divShow ? "show" : ""}`}
                            onMouseEnter={() => handleMouseEnter(setDivShow, timeoutRef)}
                            onMouseLeave={() => handleMouseLeave(setDivShow, timeoutRef)}
                        >
                            <div className="image-container">
                                {mailerImages.map((item, index) => (
                                    <div
                                        key={item.src}
                                        className={`image-item-wrapper ${hoveredIndexMailer !== null && hoveredIndexMailer !== index ? 'blurred' : ''}`}
                                        onMouseEnter={() => setHoveredIndexMailer(index)}
                                        onMouseLeave={() => setHoveredIndexMailer(null)}
                                    >
                                        <p className="image-text">{item.text}</p>
                                        <img
                                            src={item.src}
                                            alt={item.text}
                                            className="image-item"
                                            style={{ width: item.itemWidth, height: item.itemHeight }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <span
                            onMouseEnter={() => handleMouseEnter(setDivShowOne, timeoutRefOne)}
                            onMouseLeave={() => handleMouseLeave(setDivShowOne, timeoutRefOne)}
                        >Product box <img src="Expand_right_light.svg" className={divShowOne ? 'rotated' : ''} alt="Expand Icon" /></span>
                        <div
                            className={`hover-box-showone ${divShowOne ? "showone" : ""}`}
                            onMouseEnter={() => handleMouseEnter(setDivShowOne, timeoutRefOne)}
                            onMouseLeave={() => handleMouseLeave(setDivShowOne, timeoutRefOne)}
                        >
                            <div className="image-container">
                                {productImages.map((item, index) => (
                                    <div
                                        key={item.src}
                                        className={`image-item-wrapper ${hoveredIndexProduct !== null && hoveredIndexProduct !== index ? 'blurred' : ''}`}
                                        onMouseEnter={() => setHoveredIndexProduct(index)}
                                        onMouseLeave={() => setHoveredIndexProduct(null)}
                                    >
                                        <p className="image-text">{item.text}</p>
                                        <img
                                            src={item.src}
                                            alt={item.text}
                                            className="image-item"
                                            style={{ width: item.itemWidth, height: item.itemHeight }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <span
                            onMouseEnter={() => handleMouseEnter(setDivShowTwo, timeoutRefTwo)}
                            onMouseLeave={() => handleMouseLeave(setDivShowTwo, timeoutRefTwo)}
                        >Rigged Box <img src="Expand_right_light.svg" className={divShowTwo ? 'rotated' : ''} alt="Expand Icon" /></span>
                    </span>
                    <div
                        className={`hover-box-showtwo ${divShowTwo ? "showtwo" : ""}`}
                        onMouseEnter={() => handleMouseEnter(setDivShowTwo, timeoutRefTwo)}
                        onMouseLeave={() => handleMouseLeave(setDivShowTwo, timeoutRefTwo)}
                    >
                        <div className="image-container">
                            {riggedImages.map((item, index) => (
                                <div
                                    key={item.src}
                                    className={`image-item-wrapper ${hoveredIndexRigged !== null && hoveredIndexRigged !== index ? 'blurred' : ''}`}
                                    onMouseEnter={() => setHoveredIndexRigged(index)}
                                    onMouseLeave={() => setHoveredIndexRigged(null)}
                                >
                                    <p className="image-text">{item.text}</p>
                                    <img
                                        src={item.src}
                                        alt={item.text}
                                        className="image-item"
                                        style={{ width: item.itemWidth, height: item.itemHeight }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className="head-nav-end">
                        <img src="/Basket_alt_3_fill.svg" alt="Basket Icon" />
                        <button>Account <img src="Expand_right_light (1).svg" alt="Expand Icon" /></button>
                    </span>
                </div>
            </nav>

            <style jsx>{`
                nav {
                    width: 100%;
                    height: 44px;
                }
                .head-nav {
                    width: 100%;
                    max-width: 1750px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .head-nav-center {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                }
                .head-nav-center span {
                    font-size: 18px;
                    align-items: center;
                    display: flex;
                    gap: 10px;
                    z-index: 999;
                    cursor: pointer;
                    height: 50px;
                }
                .head-nav-end {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .head-nav-end button {
                    font-size: 16px;
                    padding: 10px 16px 10px 28px;
                    border-radius: 100px;
                    background-color: #111111;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .hover-box-show,
                .hover-box-showone,
                .hover-box-showtwo {
                    position: absolute;
                    top: 50px;
                    left: 0;
                    background-color: white;    
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    z-index: 999;
                    display: none; 
                    height: 500px;
                    box-sizing: border-box; 
                    padding-top: 40px;
                    padding-bottom: 20px;
                    overflow: hidden; 
                }

                .hover-box-showone {
                    background-color: #FFF1F1;
                }
                .hover-box-showtwo {
                    background-color: #DDFFFF;
                }

                .show, .showone, .showtwo { 
                    display: flex; 
                    justify-content: center; 
                    align-items: flex-start; 
                }
                
                .head-nav-center span img {
                    transition: transform 0.3s ease;
                }
                .head-nav-center span img.rotated {
                    transform: rotate(90deg);
                }

                .overlay-backdrop {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5); 
                    z-index: 98;
                }
                .image-container {
                    display: flex;
                    gap: 20px; 
                    justify-content: center; 
                    align-items: flex-start; 
                    margin-left: auto; 
                    margin-right: auto; */
                    overflow-x: auto; 
                    flex-wrap: nowrap; 
                    height: 100%; 
                    padding: 0 20px; 

                  
                    /* برای 3 آیتم 500px: (500*3) + (2*20) = 1500 + 40 = 1540px */
                    /* برای 2 آیتم 600px: (600*2) + (1*20) = 1200 + 20 = 1220px */
                    /* برای 3 آیتم 500px: (500*3) + (2*20) = 1500 + 40 = 1540px */
                    min-width: calc(100% - 40px); 

              
              
                .hover-box-show .image-container {
                    width: 1540px; 
                }
                .hover-box-showone .image-container {
                    width: 1220px; 
                }
                .hover-box-showtwo .image-container {
                    width: 1540px; 
                }

                .image-item-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                    cursor: pointer;
                    transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease; 
                    flex-shrink: 0; 
                    box-sizing: border-box; 
                    justify-content: flex-start;
                    /* height: 350px; 
                }
                
                .image-item-wrapper:hover {
                    transform: translateY(-5px);
                }

                .image-item-wrapper.blurred {
              
                    opacity: 0.3;
                }

                .image-text {
                    font-size: 1.1em;
                    color: #333;
                    margin-bottom: 10px;
                    text-align: center;
                    font-weight: 500;
                    white-space: nowrap; 
                    flex-shrink: 0;
                }

                .image-item {
                    display: block; 
                    margin-left: auto; 
                    margin-right: auto; 
                    object-fit: contain; 
                   
                }
            `}</style>
        </>
    );
}

export default Header;