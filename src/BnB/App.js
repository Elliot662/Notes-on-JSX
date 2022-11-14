import "./App.css"
import BnB1 from "./images/BnB1.png"
import BnB2 from "./images/BnB2.png"
import BnB3 from "./images/BnB3.png"
import BnB4 from "./images/BnB4.png"


const Airbnb = () => {
    return(
        <div className="one">
            <Room room={BnB1} location="Ratlinghope, England, United Kingdom" price="£118 night"/>
            <Room room={BnB2} location="Irton, England, United Kingdom" price="£106 night"/>
            <Room room={BnB3} location="Barber Booth, England, United Kingdom" price="£250 night"/>
            <Room room={BnB4} location="Settle, North Yorkshire, United Kingdom" price="£467 night"/>
        </div>
    )
}

const Room = ({room, location, price}) => {
    return(
        <div className="two">
            <img src={room}/>
            <p>{location}</p>
            <p>{price}</p>
        </div>
    )
}

export default Airbnb