import React from 'react';
import { Modal,CardColumns,CardGroup,Card,Button,View,Table,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LeaderBoard.css';



const User = (props) => {
  var gamereturn = 0;
  if (props.allGame2_total_game_tries){
    if (props.data[3]){
      if (props.game2_prize){
        var gamereturn = Math.round((0.7*((props.data[3]/props.total)*props.game2_prize))*0.8);
      }
    }
  }



  return(
    <tr key={props.rank}>
      <td >{props.rank}</td>
      <td >{props.data[1]}</td>
      <td >{props.data[2]}</td>
      <td >{props.data[3]}</td>
      <td >{gamereturn} Blox</td>
    </tr>


  )
}






export default User;
