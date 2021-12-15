function Car(props) {
    return <h1>This is my {props.color} car!!!</h1>
}

function Garage() {
    return (
        <>
        <h1>My Garage in the wich car!!</h1>
        <Car />
        </>
    )
}

export default Garage