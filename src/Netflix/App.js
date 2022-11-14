import "./App.css"
import NetflixDemonSlayer from "./images/NetflixDemonSlayer.jpg"
import NetflixRickAndMorty from "./images/NetflixRickAndMorty.jpg"
import NetflixTeenWolf from "./images/NetflixTeenWolf.jpg"
import NetflixVampireDiaries from "./images/NetflixVampireDiaries.jpg"
import NetflixYoungSheldon from "./images/NetflixYoungSheldon.jpg"

const NetflixApp = () => {
    return (
        <div className="one">
            <Shows showImage={NetflixDemonSlayer} showName="Demon Slayer" />
            <Shows showImage={NetflixRickAndMorty} showName="Rick and Morty" />
            <Shows showImage={NetflixTeenWolf} showName="Teen Wolf" />
            <Shows showImage={NetflixVampireDiaries} showName="Vampire Diaries" />
            <Shows showImage={NetflixYoungSheldon} showName="Young Sheldon" />
        </div>
    )
}

const Shows = ({ showImage, showName }) => {
    return (
        <div className="two">
            <img src={showImage} />
            <p>{showName}</p>
        </div>
    )
}

export default NetflixApp