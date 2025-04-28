import { useEffect, useState } from 'react';
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { claimFreeCredit } from './utilities/Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  //selected player
  const [selectPlayer, setSelectPlayer] = useState(0);

  //choose player
  const [choosePlayer, setChoosePlayer] = useState([]);
  //handle choose player
  const handleChoosePlayer = (player, id) => {
    console.log(player, id);
    //check the exists player
    // console.log(choosePlayer);
    const playerExists = choosePlayer.find(player => player.id === id);
    if (coins > player.price) {
      if (playerExists) {
        toast.error('❌ Plear is already in your team.');
      }
      else if (selectPlayer > 10) {
        toast.error('❌ Your Team is Full.');
      }
      else {
        const money = coins - player.price;
        setCoins(money)
        const remainingPlayer = [...choosePlayer, player]
        setChoosePlayer(remainingPlayer)
        setSelectPlayer(choosePlayer.length + 1)
        setAvailablePlayers(players.length - (choosePlayer.length + 1))
        toast.success('✅ Player Added Successfully!');
      }
    }
    else {
      toast.error('❌ Not Enough Coins! Please claim free credits.');
    }

  }

  //state declare for handle availabele players amount
  const [availablePlayers, setAvailablePlayers] = useState(0);



  //handle selected remove
  const handleSelectedRemove = (id) => {

    const newExistedPlayer = choosePlayer.filter(player => player.id !== id)
    setChoosePlayer(newExistedPlayer);
    setSelectPlayer(selectPlayer - 1)
    setAvailablePlayers(players.length - (selectPlayer - 1));
    choosePlayer.filter((player) => {
      const money = coins + player.price;
      setCoins(money)
    })

  }




  //declare state to store the player datas
  const [players, setPlayers] = useState([]);
  //load the players data
  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(players => setPlayers(players))
  }, [])


  //state declare for coin
  const [coins, setCoins] = useState(0);

  //handle claim free btn
  const handleClaimFreeCredit = () => {
    console.log('click');
    const number = claimFreeCredit()
    setCoins(number);
  }

  return (
    <>

      <Navbar handleClaimFreeCredit={handleClaimFreeCredit}
        coins={coins}
      ></Navbar>


      <Main
        coins={coins}
        selectPlayer={selectPlayer} handleChoosePlayer={handleChoosePlayer
        } availablePlayers={availablePlayers}
        choosePlayer={choosePlayer}
        handleSelectedRemove={handleSelectedRemove}
        players={players}
      ></Main>

      {/* Important: Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App
