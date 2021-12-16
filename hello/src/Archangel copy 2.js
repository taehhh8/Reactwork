function Gundam(props) {
    return <h2>This is {props.ginfo.engine}</h2>
}
// props information을 받은

function Archangel() {
    const gundamInfo = {
        camp: "Earth",
        model: "X10A",
        engine: "Atomic",
        year: "Cosmic 70",
        pilot: "Kira Yamato"
    };

    return (
        <>
            <h1>Which gundam in Archangel?</h1>
            <Gundam ginfo={gundamInfo} />
        </>
    );
}
export default Archangel;

// 12/16강의