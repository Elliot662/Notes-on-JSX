import "./App.css"
import CouncillorThreated from "./images/CouncillorThreated.PNG"
import NISecretary from "./images/NISecretary.PNG"
import NuresUnion from "./images/NuresUnion.PNG"
import ScaleOfAbuse from "./images/ScaleOfAbuse.PNG"

const BBCApp = () => {
    return (
        <div className="one">
            <News newsImage={CouncillorThreated}  timePosted="7:20am" genre="Wales" title="Sex education: Gwynedd councillor harassed over scheme support" />
            <News newsImage={NISecretary} timePosted="9:20am" genre="Northern Ireland" title="Stormont election: NI secretary set to extend deadline" />
            <News newsImage={NuresUnion} timePosted="6am" genre="Scotland" title="Royal College of Nursing set to confirm result of strike vote" />
            <News newsImage={ScaleOfAbuse} timePosted="9:30am" genre="UK" title="Scale of abuse of politicians on Twitter revealed" />
        </div>
    )
}

const News = ({newsImage, title, timePosted, genre}) => {
    return (
        <div className="two">
            <img src={newsImage} />
            <p>{title}</p>
            <p>{timePosted} | {genre}</p>
        </div>
    )
}

export default BBCApp