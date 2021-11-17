
import waiting from './components/Structure/Sounds/waiting.wav';
import ReactAudioPlayer from 'react-audio-player';
import blox_loading from './components/Structure/images/Blox.gif';




const LoadingData = (props) =>  {


  return(
    <div>

    {props.web3 == null?(
      <div>
      <center>
      <br/>
      <br/>
      <h3 className="loadingDataFont">Please Wait Loading</h3>


      <br/>
      <img
        alt="Blox Loading"
        src={blox_loading}
        width="75"
        className="d-inline-block align-middle"
      />
      <ReactAudioPlayer
        src={waiting}
        autoPlay
      />
      </center>
      <br/><br/><br/><br/><br/>

      </div>
    ):(

      <div>

      </div>

    )}




    </div>
  )
}

// Wrap everything in <UseWalletProvider />
export default LoadingData;
