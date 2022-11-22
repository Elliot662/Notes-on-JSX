import { useEffect, useState } from "react"
const App6 = () => {
    const [data, setData] = useState("")
    const [error, setError] = useState(null)

    const getter = async () => {
        try {
            let response = await fetch("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
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
            <h1>Studio-Ghibli</h1>
            <h2>{data.title}</h2>
            <h2>{data.description}</h2>
        </div>
    )
}
export default App6