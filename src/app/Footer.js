"use client"
export default function Footer() {
    return (
        <>
            <div className="footer">
           
                <div className="text-left">Rush box</div>

         
                <div className="text-right">
         
                    <div className="link-column">
                        <span className="head-link">Mailer</span>
                        <ul>
                            <li><a href="#">MailerBox</a></li>
                            <li><a href="#">Shipper Box</a></li>
                            <li><a href="#">Folded Box</a></li>
                        </ul>
                    </div>

            
                    <div className="link-column">
                        <span className="head-link">Rigged Box</span>
                        <ul>
                            <li><a href="#">Gift Box</a></li>
                            <li><a href="#">setup Box</a></li>
                            <li><a href="#">Custom Box</a></li>
                        </ul>
                    </div>

                
                    <div className="link-column">
                        <span className="head-link">Product Box</span>
                        <ul>
                            <li><a href="#">Cardstock Box</a></li>
                            <li><a href="#">Corrugated Box</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    width: 100%;
            
                    display: flex;
                    justify-content: space-between; 
                    align-items: flex-end; 
      
                    padding-top: 100px; 
                    padding-bottom: 50px;
                    background-color: white; 
           
                }

                .text-left {
                    font-size: 7rem; 
                    font-family: system-ui;
                    color: rgb(228, 228, 228); 
                    font-weight: 600;
                    text-align: left;
                    line-height: 1;
                    padding-left: 40px;

                }

                .text-right {
                    display: flex;
                    gap: 60px; 
                    align-items: flex-start; 
                         padding-right: 80px;
       
                }

                .link-column {
                    display: flex;
                    flex-direction: column; 
                    align-items: flex-start;
                }

                .head-link { 
                    color: #D2D5DB; 
                    font-size: 16px;
                    font-weight: bold; 
                    margin-bottom: 30px; 
                    display: block; 
                               font-family: 'Raleway', sans-serif;
               font-weight: 400;
                }

                .link-column ul {
                    list-style: none; 
                    padding: 0; 
                    margin: 0; 
                }

                .link-column li {
                    font-size: 14px; 
                    color: #111111; 
                    line-height: 1.5; 
                    margin-bottom: 5px; 
                               font-family: 'Raleway', sans-serif;
                                                     transition: all 0.2s ease;

                }
 .link-column li:hover{
 opacity:0.6;}
                .link-column a {
                    text-decoration: none;
                    cursor: pointer; 
                
                    
                        color: #111111; 
                    }
                }
            `}</style>
        </>
    );
}