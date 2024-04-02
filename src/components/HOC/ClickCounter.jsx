import withCounter from "./withCounter"

function ClickCounter(props) {
    return (<>
        <button onClick={props.incHandler}>{props.inc}</button>
    </>)
}

export default withCounter(ClickCounter)