import { useEffect, useState } from "react"
const App7 = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)
    const [userInput, setUserInput] = useState("1")

    const getter = async () => {
        try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
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
            <h1>Enter Pokemon ID</h1>
            <input 
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button onClick={getter}>Enter</button>
            <Card data={data}/>
        </div>
    )
}

const Card = ({data}) => {
    return(
        <div>
<h2>{data.name}</h2>
        </div>
    )
}

export default App7