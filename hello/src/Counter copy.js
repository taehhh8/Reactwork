import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
        // setNumber(prevNumber => prevNumber + 1); setnumber 안의 콜백이 잇는데 이전값에 대해서 값을 업데이트하는 함수를 연결 
        console.log('+1');
        // console.log({number}); // console.log에 이전 값이 찍힌다.
    };

    const onDecrease = () => {
        setNumber(number - 1);
        // setNumber(prevNumber => prevNumber - 1);
        console.log('-1');
        // console.log({number}); // console.log에 이전 값이 찍힌다.
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;