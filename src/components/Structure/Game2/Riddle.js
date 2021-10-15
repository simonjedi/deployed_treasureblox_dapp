import React, {useState} from 'react';
import Iframe from 'react-iframe'



import { Modal,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Riddle.css';

const Riddle = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;


  const game1_prize = commaNumber(props.game2_prize,',');
  const game1_entry_cost = commaNumber(props.game2_entry_cost,',');



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return(

    <div>


    <div >
      <Card className="customRoundedOne">
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">{props.game2_riddle}</div>

        <div className="gamePrize"><p variant="primary">{props.game2_clue}</p></div>
        <div className="postMainPrize">A Part of me is out of this world!</div>
        <br/>

        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>


          <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gPFqyLYf1DU?rel=0" allowfullscreen></iframe>
          </div>

        </Modal>



      </Card.Body >

      </Card>
    </div>





</div>
  );


};

export default Riddle;
