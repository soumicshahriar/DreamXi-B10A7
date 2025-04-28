import {useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Main = ({ coins , selectPlayer,handleChoosePlayer, availablePlayers, handleSelectedRemove, players, choosePlayer }) => {
  //declare state to toggle the btn
  //default is available
  const [btn, setBtn] = useState('available');

  const handleBtn = (type) => {
    setBtn(type)
  }

  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{btn === "available" ? `Available Players: (${availablePlayers} / ${players.length})` : `Selected Player(${selectPlayer}/11)`}</h1>
        <div className="flex gap-2">
          <button onClick={() => handleBtn("available")} className={`border-2 p-2 border-slate-400  rounded-md ${btn === "available" ? 'hover:shadow-md shadow-md shadow-amber-400 border-yellow-400 ' : 'border-2 border-slate-400 p-2 rounded-md'}`}>Available</button>

          {/* selected btn */}
          <button onClick={() => handleBtn("selected")} className={`border-2 border-slate-400 p-2 rounded-md ${btn === "selected" ? 'hover:shadow-md shadow-md shadow-amber-400 border-yellow-400 ' : 'border-2 border-slate-400 p-2 rounded-md'}`}>Selected({selectPlayer})</button>
        </div>
      </div>

      {/* main section part available */}
      {/* {

        btn === "available" && (
          <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {players.map(player =>
              <div key={player.id} className="card bg-base-100 shadow-sm p-4 my-8">
                <figure>
                  <img className="rounded-md  mx-auto"
                    src={player.playerImg}
                    alt="Player Img" />
                </figure>
                <div className="mt-4">
                  <div className="flex items-center gap-2"> <FaUser /> <span className="font-semibold">{player.name}</span></div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="opacity-80 flex items-center gap-2">
                    <FaFlag className="opacity-50" />
                    <span >{player.country}</span>
                  </div>
                  <div>{player.role}</div>
                </div>
                <hr className="border-1 opacity-30" />

                <div>
                  <h1 className="font-semibold">Rating</h1>
                  <div className="flex justify-between">
                    <h1>{player.battingStyle}</h1>
                    <span className="opacity-50">{player.battingStyle}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h1>price: ${player.price}</h1>
                    <button onClick={() => handleChoosePlayer(player, player.id)} className="border-1 p-1 rounded-md hover:border-yellow-400 shadow-md hover:shadow-yellow-300">Choose Player</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )
      } */}


      {
        btn === "available" && (
          <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {players.map((player) => {
              const isSelected = choosePlayer.some((p) => p.id === player.id);
              return (
                <div
                  key={player.id}
                  className={`card shadow-sm p-4 my-8 ${isSelected
                    ? "bg-green-100 border-2 border-green-400" // Selected style
                    : "bg-base-100" // Default style
                    }`}
                >
                  <figure>
                    <img
                      className="rounded-md mx-auto"
                      src={player.playerImg}
                      alt="Player Img"
                    />
                  </figure>
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <FaUser /> <span className="font-semibold">{player.name}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="opacity-80 flex items-center gap-2">
                      <FaFlag className="opacity-50" />
                      <span>{player.country}</span>
                    </div>
                    <div>{player.role}</div>
                  </div>
                  <hr className="border-1 opacity-30" />

                  <div>
                    <h1 className="font-semibold">Rating</h1>
                    <div className="flex justify-between">
                      <h1>{player.battingStyle}</h1>
                      <span className="opacity-50">{player.battingStyle}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <h1>price: ${player.price}</h1>
                      <button
                        onClick={() => handleChoosePlayer(player, player.id)}
                        disabled={isSelected} // Disable button if already selected
                        className={`border-1 p-1 rounded-md ${isSelected
                          ? "bg-gray-300 cursor-not-allowed"
                          : "hover:border-yellow-400 shadow-md hover:shadow-yellow-300"
                          }`}
                      >
                        {isSelected ? "Selected" : "Choose Player"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      }


      {/* main section part selected */}
      {
        btn === "selected" && (
          <div className="my-4">
            <div className="bg-base-100  shadow-sm">
              <h1>Selected Player : {selectPlayer}</h1>

              {
                <div className="my-4">
                  {choosePlayer.map(player => <div key={player.id} className={`card bg-base-100 shadow-md p-4 my-8 `} >

                    <div className="flex justify-between items-center">

                      <div className="flex gap-4 items-center">
                        <figure className="w-12 h-12">
                          <img className="rounded-md  mx-auto"
                            src={player.playerImg}
                            alt="Shoes" />
                        </figure>

                        <div>
                          <p className="font-bold">{player.name}</p>
                          <span>{player.battingStyle}</span>
                        </div>
                      </div>

                      {/*  react delete icons */}
                      <MdDelete onClick={() => handleSelectedRemove(player.id, player)} className="w-6 h-6 cursor-pointer hover:scale-120 ease-in-out duration-1000 hover:text-red-600" />
                    </div>
                  </div>)}

                </div>
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Main;