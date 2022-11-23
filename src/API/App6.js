import { useEffect, useState } from "react"
import Zoo from "./Zoo"
import "./Zoo.css"

const App10 = () => {
    const [error, setError] = useState(null)
    const [item, setItem] = useState("")
    useEffect(() => {
        const getter = async () => {
            try {
                let response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5")
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                let newItem = await response.json()
                setItem(newItem)
            } catch (error) {
                setError("Error could not fetch the data")
                console.log(error.message)
            }
        }
        getter()
    }, [])
    if (!item) {
        return <h1>The page is loading...</h1>
    }
    if (error) {
        return <h1>There has been an error</h1>
    }
    return (
        <div class="center">
            <h1>Zoo animals</h1>
            {item.map((animal) => (
                <div><Zoo item={animal} /></div>
            ))}
            <p>Try refreshing the page for more animals</p>
        </div>
    )
}
export default App10