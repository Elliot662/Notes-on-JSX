import {useState} from "react"

const ShortApp = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {show && <Card firstName="Elliot"/>}
            <button onClick={() => setShow(!show)}>toggle</button>
        </div>
    )
}

const Card = ({firstName}) => {
    return <h1>hello {firstName}</h1>
}

export default ShortApp