function MissGoal() {
    return <h1>MISSED GOAL ROLALDO</h1>;
}

function MadeGoal() {
    return <h1>The tremendese Goal Son!!!!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;

    // if(isGoal) {
    //     return <MadeGoal />;
    // }

    // return <MissGoal />;

    return (
        <>
            {isGoal ? <MadeGoal /> : <MissGoal />}
            {/* {isGoal ? <h1>Tremendese Goal Son!!!</h1> : <h1>Missed Goal Ronaldo</h1>} */}
        </>
    );
}

export default Goal;

//12/16