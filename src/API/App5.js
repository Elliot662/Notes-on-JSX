import { useEffect, useState } from "react"
import Quote from "./Anime_quote"
import "./styles.css"
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
        return <h1>loading please wait...</h1>
    }
    if (error) {
        return <h1>Their has been an error, please refresh the page</h1>
    }
    return (
        <div>
            <Quote data={data} getter={getter}/>
        </div>
    )
}
export default App9