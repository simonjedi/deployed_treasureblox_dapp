import React, {useState,useEffect} from 'react';
import Iframe from 'react-iframe'
import img1 from '../images/elons_lost_his_rocket.png';

import { Modal,CardColumns,CardGroup,Card,Button,View,Table,Container,Nav,Navbar,NavDropdown,Row,Col,Tab } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';


// import Leaderboard from 'react-native-leaderboard';
import User from './User';
import Tableheader from './Tableheader';

const LeaderBoardCard = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;


  const game2_prize = commaNumber(props.game2_prize,',');
  const game2_WinnerPrize = commaNumber(Math.round(props.game2_prize*0.3),',');

  console.log(game2_WinnerPrize,"prize")

  const game2_entry_cost = commaNumber(props.game2_entry_cost,',');



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const columns = [
    {
    dataField: 'Score',
    text: 'Score',
    sort: true,

  }];


// console.log(props.game2LeaderBoardIndex)
// console.log(props.game2LeaderBoardTries)

var total = 0;

for (var i  = 0; i < props.game2LeaderBoardTries.length; i++){

  total  += parseInt(props.game2LeaderBoardTries[i]);

}
console.log(total,"meeeeeee")
console.log(props.game2LeaderBoardTries,"meeeeeee")


  let zipped = props.game2LeaderBoardIndex.map((x, i) => [x, props.game2LeaderBoardUsername[i],props.game2LeaderBoardStage[i],props.game2LeaderBoardTries[i]]);

  let rank = 0;

  let oredered_zipped = zipped.sort((a,b) => a[3] < b[3] ? 1 : -1);

  const userList = oredered_zipped.map((users,index) => {
          rank++;

          return (
              //mapping over the User component to display them in the <tbody>
              //Key makes each User unique.
              <User key={index} data={users} total={total} rank={rank} {...props}/>
          )
      });

// console.log(zipped.sort((a,b) => a[3] < b[3] ? 1 : -1),"zip sorted")
// console.log(props.game1LeaderBoardIndex.sort(),"zip sorted")
var personalgamereturn = 0;
if (props.state_leaderboardAddressSearch_tries_game2){
    if (props.game2_prize){
      var personalgamereturn = Math.round((0.7*((props.state_leaderboardAddressSearch_tries_game2/total)*props.game2_prize))*0.8);
    }

}

  return(

    <div>


    <Card className="customRoundedOne">

<Tab.Container defaultActiveKey="first">
    <Card.Header className="descriptionTitle">PERSONAL INFORMATION - @<a className="descriptionTitle">{props.state_leaderboardAddressSearch_username_game2}</a> - Level <a className="descriptionTitle">{props.state_leaderboardAddressSearch_stage_game2}</a> - Score <a className="descriptionTitle">{props.state_leaderboardAddressSearch_tries_game2}</a> - Est Return <a className="descriptionTitle">{personalgamereturn}</a> Blox<div className="gamePrize">Est Winner Prize {game2_WinnerPrize} Blox</div>


    <Nav justify variant="pills"  >
      <Nav.Item>
        <Nav.Link eventKey="first">Final Riddle</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">How To Play?</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Costs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" >Leaderboard</Nav.Link>
      </Nav.Item>
    </Nav>

</Card.Header>

      <Tab.Content>
        <Tab.Pane eventKey="first" >
        <Riddle {...props}/>
        </Tab.Pane>
        <Tab.Pane eventKey="link-1">
          <Rules {...props}/>
        </Tab.Pane>

        <Tab.Pane eventKey="link-2">
          <Costs {...props}/>

        </Tab.Pane>

        <Tab.Pane eventKey="link-3">


        <div className="containerTable">

            <Table className="customRoundedTable" hover variant="dark" >
            <thead>
                <tr>
                    <th className="idcol">#Rank</th>
                      <th className="sticky-column" data-column="1" >Username</th>
                      <th className="sticky-column" data-column="2" toggleTopScores={props.onClickTop}>Level</th>
                      <th className="sticky-column" data-column="3">Score</th>
                      <th className="sticky-column" >Est Return</th>

                </tr>
            </thead>
              <tbody>
              {userList}

              </tbody>
            </Table>
            </div>

        </Tab.Pane>


      </Tab.Content>




</Tab.Container>



</Card>


        <br/>






</div>
  );


};

export default LeaderBoardCard;
