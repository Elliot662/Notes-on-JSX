import Form from "./Components/Form"
import { useState } from "react"
import Person from "./Components/Person"
import styled from "styled-components"

const Header = styled.h1`
  border: solid red 3px;
  background-color: lime;
`

const StyledAppForm = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")

  const removeHandler = (index) => {
    let newArr = [...persons]
    newArr.splice(index, 1)
    setPersons(newArr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons([...persons, { name: nameInput, age: ageInput }])
    setNameInput("")
    setAgeInput("")
  }

  return (
    <div>
      <Header>Hello this is my form that I will be styling</Header>
      <Form
        handleSubmit={handleSubmit}
        nameInput={nameInput}
        setNameInput={setNameInput}
        ageInput={ageInput}
        setAgeInput={setAgeInput}
      />

      {persons.map((person, index) => {
        return <Person
          key={index}
          removeHandler={() => removeHandler(index)}
          name={person.name} 
          age={person.age}
          />
      })}

    </div>
  )
}

export default StyledAppForm

// npm install --save styled-components