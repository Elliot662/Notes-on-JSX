const Quote = ({data, getter}) => {
    return(
        <div className="theText">
            <h1>Some quotes from some great shows</h1>
            <h2 id="theQuote">{data.quote}</h2>
            <h2 id="character">-{data.character} from {data.anime}</h2>
            <button onClick={getter} id="quoteButton">Click here for another great quote</button>
        </div>
    )
}
export default Quote