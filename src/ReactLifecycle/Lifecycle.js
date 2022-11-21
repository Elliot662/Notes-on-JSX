import { useEffect, useState } from "react"

const Lifecycle = () => {
    const [num, setNum] = useState(0)

    // componentDidMount() {
    //     console.log("component mounted")
    // }
    // componentDidUpdate() {
    //     console.log("state updated")
    // }

    useEffect(() => {
        console.log("updated")
    }, [num])


    return (
        <div>
            <h1>hello</h1>
            <h2>{num}</h2>
            <button onClick={() => setNum(num +1)}>add one</button>
        </div>
    )
}

export default Lifecycle