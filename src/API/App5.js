import { useEffect, useState } from "react"
const App9 = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)

    const getter = async () => {
        try {
            let response = await fetch("https://animechan.vercel.app/api/random")
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            let newData = await response.json()
            setData(newData)
        } catch (error) {
            setError("could not fetch data")
            console.log(error.message)
        }
    }

    useEffect(() => {
        getter()
    }, [])
    if (!data) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1>Their has been an error sorry</h1>
    }
    return (
        <div>
            <h1>Some quotes from some great shows</h1>
            <h2>{data.quote}</h2>
            <h2>-{data.character} from {data.anime}</h2>
            <button onClick={getter}>Click here for another great quote</button>
        </div>
    )
}
export default App9