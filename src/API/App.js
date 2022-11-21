import { useEffect, useState } from "react"
const App5 = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)
    
    const getter = async () => {
        try {
        let response = await fetch("https://api.adviceslip.com/advice")
        if(!response.ok){
            throw new Error(response.statusText)
        }
        let newData = await response.json()
        setData(newData)
        } catch(error){
            setError("could not fetch data")
            console.log(error.message)
        }
    }
    
    useEffect(() => {
        getter()
    }, [])
    if(!data){
        return <h1>loading...</h1>
    }
    if(error){
        return <h1>Their has been an error sorry</h1>
    }
    return(
        <div>
            <h1>Hey there, here's is some advice</h1>
            <h2>{data.slip.advice}</h2>
            <button onClick={getter}>more advice here</button>
        </div>
    )
}
export default App5