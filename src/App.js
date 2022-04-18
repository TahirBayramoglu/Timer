import React from 'react'
import {useState} from "react"
import Alarm from './alarm.png'
import "./App.css";


function App() {

  const [saniye, setSaniye] = useState("00");
  const [dakika, setDakika] = useState("00");
  const [saat, setSaat] = useState("00");
  const [gun, setGun] = useState("00");

  
  const tarihGirildi = () => {
    const tarih = new Date(document.getElementById ("tarih").value).getTime();

    const say = setInterval(()=>{
      
 
      const bugun = new Date().getTime();
      const fark = tarih - bugun;

      const fGun=Math.floor(fark/(1000*60*60*24));
      const fSaat=Math.floor(fark%(1000*60*60*24)/(1000*60*60));
      const fDakika=Math.floor(fark%(1000*60*60)/(1000*60));
      const fSaniye=Math.floor(fark%(1000*60)/ 1000);

     
     
      if(fark<0){
        clearInterval(say);

      }else{
        setGun(fGun);
        setSaat(fSaat);
        setDakika(fDakika);
        setSaniye(fSaniye);

      }
      

    },1000);

   
    

  }



  return (
    <div className="anaDiv">
    <div className = "timerUst">
    <img className= "alarmIcon" src = {Alarm}/>
    <h2>Zamanlayici</h2>
    <p> Ne kadar zamaninizin kaldigini ögrenin...</p>
    <div className = "anaTimer">
    
    <div>
    <div className = "altTimer">
    <p>{gun}</p>
    <p>Gun</p>
    </div>
    <p>:</p>
    </div>
   
    <div>
    <div className = "altTimer">
    <p>{saat}</p>
    <p>Saat</p>
    </div>
    <p>:</p>
    </div>
   
    <div>
    <div className = "altTimer">
    <p>{dakika}</p>
    <p>Dakika</p>
    </div>
    <p>:</p>
    </div>

    <div>
    <div className = "altTimer">
    <p>{saniye}</p>
    <p>Saniye</p>
    </div>
    <p>:</p>
    </div>

    </div> 
  <div className = "tarihGiris">
  <input className = "form-control" id ="tarih" type= "datetime-local"/> 
  <button className = "btn btn-danger" onClick = {tarihGirildi}> Ne Kadar Kaldi ? </button>
  </div>

    </div>
      
    </div>
  )
}

export default App
