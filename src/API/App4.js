import { useEffect, useState } from "react"

const App8 = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)

    const getter = async () => {
        try {
            let response = await fetch("https://excuser.herokuapp.com/v1/excuse")
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            let newData = await response.json()
            setData(newData)
        } catch (error) {
            setError("Could not fetch the data")
            console.log(error.message)
        }
    }
    useEffect(() => {
        getter()
    }, [])
    if (!data) {
        return <h1>Please wait this page is loading...</h1>
    }
    if (error) {
        return <h1>It would seem there have been an error</h1>
    }
    return (
        <div>
            <h1>Some funny jokes</h1>
            <h2>{data[0].excuse}</h2>
            <h4>This joke is in the {data[0].category} category</h4>
            <button onClick={getter}>Click here for more jokes</button>
        </div>
    )
}

export default App8