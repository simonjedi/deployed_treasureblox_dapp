import React, {useState,useEffect} from 'react';
import Iframe from 'react-iframe'
import img1 from '../assets/images/elons_lost_his_rocket.png';

import { Modal,CardColumns,CardGroup,Card,Button,View,Table,Container,Nav,Navbar,NavDropdown,Row,Col,Tab,Tabs } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LeaderBoard.css';






import Costs from './Costs';
import Riddle from './Riddle';
import Rules from './Rules';






// import Leaderboard from 'react-native-leaderboard';
import User from './User';
import Tableheader from './Tableheader';

const LeaderBoardCard = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;


  const game1_prize = props.game1_prize;

  const game1_entry_cost = commaNumber(props.game1_entry_cost,',');

  const game1_WinnerPrize = commaNumber(Math.round(props.game1_prize*0.3),',');


  const est_prize = props.state_WinnerEstPrizeGame1.length-18;







  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const columns = [
    {
    dataField: 'Score',
    text: 'Score',
    sort: true,

  }];




    // const userList = async () => {
    //   return props.game1LeaderBoardIndex.map((users) => <User data={users} />)
    // }





    var total = 0;

   for (var i  = 0; i < props.game1LeaderBoardTries.length; i++){

      total  += parseInt(props.game1LeaderBoardTries[i]);

   }




  let zipped = props.game1LeaderBoardIndex.map((x, i) => [x, props.game1LeaderBoardUsername[i],props.game1LeaderBoardStage[i],props.game1LeaderBoardTries[i]]);


  let rank = 0;

  let oredered_zipped = zipped.sort((a,b) => a[3] < b[3] ? 1 : -1);








  const userList = oredered_zipped.map((users,index) => {
          rank++;

          return (
              //mapping over the User component to display them in the <tbody>
              //Key makes each User unique.
              <User key={index} meter={props.is_meter} data={users} total={total} rank={rank} {...props}/>
          )
      });




// console.log(zipped.sort((a,b) => a[3] < b[3] ? 1 : -1),"zip sorted")
// console.log(props.game1LeaderBoardIndex.sort(),"zip sorted")
var personalgamereturn = 0;
if (props.state_leaderboardAddressSearch_tries_game1){
    if (props.game1_prize){
      // var personalgamereturn = (0.7*((props.state_leaderboardAddressSearch_tries_game1/total)*props.game1_prize)*80);
// points/total points]
      var personalgamereturn = Math.round((0.7*((props.state_leaderboardAddressSearch_tries_game1/total)*props.game1_prize))*0.8);
    }


}



  return(

    <div>


    <Card className="customRoundedOne">

<Tab.Container defaultActiveKey="first">
    <Card.Header className="descriptionTitle">



    PERSONAL INFORMATION - @<a className="descriptionTitle">{props.state_leaderboardAddressSearch_username_game1}</a> - Level <a className="descriptionTitle">{props.state_leaderboardAddressSearch_stage_game1}</a> - Score <a className="descriptionTitle">{props.state_leaderboardAddressSearch_tries_game1}</a> - Est Return <a className="descriptionTitle">{personalgamereturn}</a> {props.is_meter?(<a>MTRG</a>):(<a>WINGS</a>)}<div className="gamePrize">Est Winner Prize {game1_WinnerPrize} {props.is_meter?(<a>MTRG</a>):(<a>WINGS</a>)}</div>

    Total Est Prize Vault {game1_prize} {props.is_meter?(<a>MTRG</a>):(<a>WINGS</a>)}

    <br/>
    <br/>

    <Nav justify variant="pills"  >
      <Nav.Item>
        <Nav.Link eventKey="first">Main Riddle</Nav.Link>
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
