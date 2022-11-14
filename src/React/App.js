import { useState } from "react"
import Person from "./Person"

const App2 = () => {
    const [persons, setPersons] = useState([
        { name: "Bob", age: 34 },
        { name: "Bobby", age: 62 },
        { name: "MisBobby", age: 40 },
    ])

    return (
        <div className="appWrapper">
            <div>
                <h1>Hej React Project</h1>
                {persons.map((person) => {
                    return <Person name={person.name} age={person.age} />
                })}
            </div>
        </div>
    )
}

export default App2