import { useState } from "react"
import Person from "./Person"

const App3 = () => {

    const [persons, setPersons] = useState([
        { name: 'Dave', age: 33 },
        { name: 'Karen', age: 45 },
        { name: 'Steven', age: 40 },
    ])

    const handleClick = (index) => {
        let storedPeople = [...persons]
        storedPeople.splice(index, 1)
        setPersons(storedPeople)
    }

    return (
        <div>
            <h1>Introduction to React</h1>
            {persons.map((person, index) => {
                return (
                    <Person name={person.name} age={person.age} key={index}
                        handleClick={() => handleClick(index)}
                    />
                )
            })}
        </div>
    )
}

export default App3