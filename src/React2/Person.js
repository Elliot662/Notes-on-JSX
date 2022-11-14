const Person = ({ name, age, handleClick}) => {
  return (
    <div>
      <h3>
        My name is {name} and my age is {age}.
      </h3>
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default Person