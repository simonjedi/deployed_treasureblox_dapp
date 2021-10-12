import React from 'react';
import { Modal,CardColumns,CardGroup,Card,Button,View,Table,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import './LeaderBoard.css';



const Tableheader = (props) => {

  return(

    <thead>
        <tr id="colheaders" className="top100">
            <th className="idcol">#</th>

              <th className="sticky-column">Username</th>
              <th className="sticky-column">Level</th>
              <th className="sticky-column">Score</th>
              <th className="sticky-column">Est Return</th>

        </tr>
    </thead>

  )

}

export default Tableheader;
