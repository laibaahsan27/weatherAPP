import React from 'react'
import Rain from '../images/Rain Cloud.png'

export default function Section2() {
  return (
    <div className='sec2Con'>
      <h1 className='sec2Head'>CURRENT <span style={{color:'rgba(161, 250, 225, 1)'}}>&nbsp;WEATHER&nbsp;</span>  GENERATED ACROSS SOME MAJOR CITIES</h1>
      <div>
      {/* border-radius: 21px;
background: #A2BABE;
box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.28); */}

        <div style={{backgroundColor:'#A2BABE', borderRadius:'21px', boxShadow:'-4px 4px 4px 0px rgba(0, 0, 0, 0.28)', width:'280px', padding:'10px'}}>
          <div style={{color:'#FFF', fontSize:'41px', fontFamily:'Fjalla One', paddingLeft:'20px'}}>Noida, <span style={{
            color:'rgba(34, 52, 25, 0.52)', fontSize:'25px'}}>India</span> </div>
          <div>
          <div style={{display:'inline-block', paddingLeft:'8px', paddingRight:'20px'}}>
            <img style={{display:'inline-block'}} src={Rain} alt="" />
          </div>
          <div style={{display:'inline-block'}}>
            <div style={{color:'#FFF', fontFamily:'Fjalla One', fontSize:'50px'}}>23&deg;c</div>
            <button style={{
             backgroundColor:'rgba(217, 217, 217, 0.76)', borderRadius:'14px',border:'none',color:"#000", fontFamily:'Fjalla One', fontSize:'10px',width:'85px',padding:'2px'
            }}>Real feel - 27&deg;c</button>
          </div>
          </div>
          <div style={{ color:'#000', fontSize:'15px', fontFamily:'Fjalla One'}}>06/06/2023 &#x2022; Tuesday &#x2022; 01:15 AM</div>
        </div>

        <div></div>
        <div></div>
      </div>
      
    </div>
  )
}
