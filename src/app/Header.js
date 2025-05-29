"use client";
import { useState, useRef } from "react"; // useRef را اضافه کنید
import './globals.css';

function Header() {
    let [divShow, setDivShow] = useState(false);
    let [divShowOne, setDivShowOne] = useState(false);
    let [divShowTwo, setDivShowTwo] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // برای مدیریت تایم‌اوت‌ها از useRef استفاده می‌کنیم
    const timeoutRef = useRef(null);
    const timeoutRefOne = useRef(null);
    const timeoutRefTwo = useRef(null);

    const images = [
        "/Mailer Box.png",
        "/Shipper Box.png",
        "/Foldwd Box.png"
    ];
    const imagesOne = [
        "/7.png",
        "/10.png"
    ];
    const imagesTwo = [
        "/13.png",
        "/20.png",
        "/17.png"
    ];
    const isAnyHovered = divShow || divShowOne || divShowTwo;

    // توابع جدید برای مدیریت hover
    const handleMouseEnter = (setFn, ref) => {
        // اگر تایم‌اوت فعال بود، آن را کنسل کن
        if (ref.current) {
            clearTimeout(ref.current);
        }
        setFn(true); // دراپ‌دان را باز کن
    };

    const handleMouseLeave = (setFn, ref) => {
        // یک تایم‌اوت کوتاه تنظیم کن تا فرصت رفتن روی دراپ‌دان را داشته باشی
        ref.current = setTimeout(() => {
            setFn(false); // دراپ‌دان را ببند
        }, 100); // 100 میلی‌ثانیه تأخیر
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
                   
                                {images.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`img-${index}`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`image-item ${hoveredIndex !== null && hoveredIndex !== index ? 'blurred' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <span
                            onMouseEnter={() => handleMouseEnter(setDivShowOne, timeoutRefOne)}
                            onMouseLeave={() => handleMouseLeave(setDivShowOne, timeoutRefOne)}
                        >Product box <img src="Expand_right_light.svg" className={divShowOne ? 'rotated' : ''} alt="Expand Icon" /></span>
                        <div className={`hover-box-showone ${divShowOne ? "showone" : ""}`}
                            onMouseEnter={() => handleMouseEnter(setDivShowOne, timeoutRefOne)}
                            onMouseLeave={() => handleMouseLeave(setDivShowOne, timeoutRefOne)}
                        >
                            <div className="image-container">
                                {imagesOne.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`img-${index}`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`image-item ${hoveredIndex !== null && hoveredIndex !== index ? 'blurred' : ''}`}
                                    />
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
                            {imagesTwo.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`img-${index}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`image-item ${hoveredIndex !== null && hoveredIndex !== index ? 'blurred' : ''}`}
                                />
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
                    right: 0%;    
                    background-color: white;    
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    z-index: 999;
                    display: none; 
                }

                .hover-box-showone {
                    background-color: #FFF1F1;
                }
                .hover-box-showtwo {
                    background-color: #DDFFFF;
                }

                .show, .showone, .showtwo { 
                    display: block; 
                }
                
                /* کلاس جدید برای چرخش */
                .head-nav-center span img {
                    transition: transform 0.3s ease;
                }
                .head-nav-center span img.rotated {
                    transform: rotate(87deg);
                }

                .overlay-backdrop {
                    position: fixed;
                    top: 70px; /* از 44px (ارتفاع nav) + مقداری فاصله برای اطمینان شروع شود */
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5); 
                    z-index: 98; /* باید کمتر از دراپ‌دان‌ها باشد */
                }
                .image-container {
                    display: flex;
               
                    justify-content: center;
                    align-items: center;
                    margin-top: 40px;
                    padding-bottom: 20px; /* اضافه شده برای فاصله از پایین */
                }

                .image-item {
                    width: 600px; /* ممکن است این مقدار برای همه تصاویر خیلی زیاد باشد */
                    height: auto;
                    transition: filter 0.3s ease, transform 0.3s ease;
                    cursor: pointer;
                }

                .image-item.blurred {
                    filter: blur(1px) brightness(0.5);
                    transform: scale(0.95);
                    opacity: 0.6;
                }
            `}</style>
        </>
    );
}

export default Header;