import React from 'react'
import goal from "./images/goal.png"
import missed from "./images/missedGoal.png"
import "./App.css"

function MissedGoal() {
    return (
        <div className="one">
            <h1>MISSED!</h1>
            <img src={missed} />
        </div>
    )
}
function MadeGoal() {
    return (
        <div className="one">
            <h1>GOAL!</h1>
            <img src={goal} />
        </div>
    )
}

function Goal(props) {
    const isGoal = props.isGoal
    if (isGoal) {
        return <MadeGoal />
    }
    return <MissedGoal />
}

export default Goal


//     <Goal isGoal={true} />