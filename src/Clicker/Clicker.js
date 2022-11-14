import { useState } from "react"

const Clicker = () => {
    const [num, setNum] = useState(0)
    const adder = () => {
        setNum(num + 1)
    }
    const minus = () => {
        setNum(num - 1)
    }
    return (
      <div>
        <button onClick={minus}>minus</button>
        <h1>{num}</h1>
        <button onClick={adder}>add</button>
      </div>
    )
  }
export default Clicker