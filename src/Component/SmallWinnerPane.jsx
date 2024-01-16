
import users_play_area_down from "../assets/users_play_area_down.svg";
import users_play_area_up from "../assets/users_play_area_up.svg";
import winners from "../assets/winners.svg";
import not_winners from "../assets/not_winners.svg";
import useJackPotRead from "../hooks/useJackPotRead";

const SmallWinnerPane = ({
    isRight = true,
    winnerSide = true,
}) => {
    return (
        <div className={`flex flex-col w-[150px] relative ${isRight ? 'items-end -ml-6' : 'items-start -mr-6'}`}>
            <img alt="loading" className="flex aspect-square" src={isRight ? users_play_area_down : users_play_area_up} />
            <div className={`absolute w-[80px] ${isRight ? 'right-6' : 'left-6'} mt-4`}>
                {(winnerSide && isRight) || (!winnerSide && !isRight) ?
                    <img alt="ico" className="" src={winners} />
                    :
                    <img alt="ico" className="" src={not_winners} />
                }
            </div>
        </div>
    )
}

export default SmallWinnerPane