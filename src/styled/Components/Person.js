import styled from "styled-components"

const PersonWrapper = styled.div`
border: solid purple 3px;
`

const Person = (props) => {
    return(
        <PersonWrapper>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <button onClick={props.removeHandler}>delete</button>
        </PersonWrapper>
    )
}

export default Person