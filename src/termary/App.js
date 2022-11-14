import { useState } from "react"

const TermaryApp = () => {
    const [show, setShow] = useState(false)
    return(
        <div>
            {show ?
            <Card firstName="Elliot" />
            :
            <p>Click for greeting</p>    
        }
        <button onClick={() => setShow(!show)}>toggle</button>
        </div>
    )
}

const Card = ({firstName}) => {
    return <h1>Hello {firstName}</h1>
}

export default TermaryApp