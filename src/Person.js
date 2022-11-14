import Pet from "./Pet"

const Person = ({ name, age, petName, type}) => {
  return (
    <div>
      <h3>
        My name is {name} and my age is {age}.
      </h3>
      <Pet petName={petName} type={type}/>
    </div>
  )
}

export default Person