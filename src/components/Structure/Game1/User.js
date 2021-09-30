import React from 'react';
import { Modal,CardColumns,CardGroup,Card,Button,View,Table,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import './User.css';



const User = (props) => {
  var gamereturn = 0;
  if (props.allGame1_total_game_tries){
    if (props.data[3]){
      if (props.game1_prize){
        var gamereturn = Math.round((0.7*((props.data[3]/props.total)*props.game1_prize))*0.8);
  

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
