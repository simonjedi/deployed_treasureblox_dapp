
import { useState, useRef, useEffect, useCallback } from "react";

// import Bird from './components/Bird'
// import Obstacles from './components/Obstacles'
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';
//
// import lazer from './assets/Lazer.wav';
// import ohno from './assets/troy_oh_no.mp4';
import './style.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ReactAudioPlayer from 'react-audio-player';


// Hook




const Gun = (props) =>{

  var chamber = 6;
  document.onclick = function(){
    if ((chamber == 0) || (Math.random()*100<(100/chamber))) {
      chamber = 6;
      document.head.style.display='block';
      document.documentElement.style.background='darkred';
    } else {
      document.head.style.display='none';
      document.documentElement.style.background='darkgreen';
    }
    document.body.style.cssText='-webkit-transform:rotate('+chamber*60+'deg);-moz-transform:rotate('+chamber*60+'deg);transform:rotate('+chamber*60+'deg)';
    chamber--;
  }
  document.onkeydown = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number")?e.which:e.keyCode;
    if (charCode == 32) {
      document.dispatchEvent(new MouseEvent('click'))
    }
  }





  return (
    <div>

<center>


</center>
<br/>
    </div>
  );
}

export default Gun;
