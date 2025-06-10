'use client';
export default function PageTwoSectionTwo(){



return(<>

<div style={{
  background:"#111111",
  width:"100%",
  padding:"100px 0 80px 0",
}}>


<div style={{
  position:"relative",
  padding:"0 70px 0 70px"
}}>

  <img src="/Mailer Box (2).png" style={{
    width:"100%",
    height:"1009px"
  }} />
  <div style={{
position:"absolute",
top:"5%",
left:"7%",
display:"flex",
gap:"15px"

  }}><img src="/Ellipse 3.png"/> 
  <img src="Ellipse 2.png"/>
  <img src="Ellipse.png"/>
  </div>
<div style={{
  position:"absolute",
  top:"50%",
  left:"50%",
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#11111159',
  borderRadius:"25px",
  padding:"30px 90px 40px 90px",
  backdropFilter: "blur(10px)",


}}>
  <div style={{
    textAlign:"center",
    color:"#FFFFFF"
  }}>
<h3 style={{
  fontSize:"24px",
  fontFamily: " 'Secular One',sans-serif",
}}>SHIP IN STYLE WITH PEACE OF MIND</h3>
<p style={{
  fontSize:"18px",
  fontFamily: " 'Raleway',sans-serif",
  fontWeight:"500",
      marginBottom:"25px"
}}>Our 1/16” E-Flute corrugate provides protection from the outside world for your products,<br/> while also being one of the best print surfaces available. Your recipients will be blown away<br/> by the vibrant, saturated colors and a sharp, detailed print.</p>
<p style={{
  fontSize:"18px",
  fontFamily: " 'Raleway',sans-serif",
  fontWeight:"500",
    marginBottom:"25px"
}}>Choose from gloss or matte finishes to make sure your box matches the feel you’re going<br/> for, while adding extra protection from scratches, scuffs, and skin oils.</p>
<p style={{
  fontSize:"18px",
  fontFamily: " 'Raleway',sans-serif",
  fontWeight:"500",
  marginBottom:"50px"
}}>Choose double sided printing to add a special element to the unboxing experience!</p>
<button style={{
width:"293px",
height:"44px",
borderRadius:"100px",
fontSize:"16px",
fontWeight:"600",
fontFamily: " 'Raleway',sans-serif",
border:"none",
color:"#111111",
cursor:"pointer"
}}>Order</button>
</div>
</div>
</div>

</div>
</>
)

}