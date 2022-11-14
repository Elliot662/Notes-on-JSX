import "./App.css"
import Person from "./Person"
import Job from "./Job"

const App = () => {
  return (
    <div className="mainWrapper">
      <h1>Hej there</h1>
      <p>Troll lol this is a app component</p>
      <Person name="Dave" age="33" petName="Bob" type="dog" />
      <Job job="chef" />
      <Person name="Karen" age="45" petName="Bobby" type="cat" />
      <Job job="junior developer" />
      <Person name="Steve" age="40" petName="Bobza" type="cow"/>
      <Job job="builder" />
    </div>
  )
}


export default App