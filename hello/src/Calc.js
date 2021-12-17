import React, {useState} from 'react';


function Calc() {
    const [inputs, setInputs] = useState({
        username: '',
        userid: ''
    });

    const {username, userid } = inputs;

    const onDateChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onDateReset = () => {
        setInputs({
            username: '',
            userid: ''
        });
    }
    const [numbers, setNumbers] = useState ({
        number1: '',
        number2: '',
    });
    const [number, setNumber] = useState (0);

    // const {number1, number2} = numbers;

    const numberChange = (e) => {
        const { value, name } = e.target;
        setNumbers({
            ...numbers,
            [name]: Number(value)
        });
    }

    const result = (e) => {
        e.preventDefault();
        console.log(numbers.number1)
        setNumber(numbers.number1 + numbers.number2)
        
    }

    const result1 = (e) => {
        e.preventDefault();
        console.log(numbers.number1)
        setNumber(numbers.number1 - numbers.number2)
        
    }
    
    const result2 = (e) => {
        e.preventDefault();
        console.log(numbers.number1)
        setNumber(numbers.number1 * numbers.number2)
        
    }

    const result3 = (e) => {
        e.preventDefault();
        console.log(numbers.number1)
        setNumber(numbers.number1 / numbers.number2)
        
    }     

    return (
        <div>
            <h1>Calc Result {number} </h1>    
            <form>
                <label>Enter Calc Number:
                    <input
                       type="number"
                       name="number1"
                       placeholder='0'
                       value={numbers.number1}
                       onChange={numberChange}
                    />   
                </label>
                <label>
                    <input
                        type="number"
                        name="number2"
                        placeholder='0'
                        value={numbers.number2}
                        onChange={numberChange}
                    />
                </label>
                <button onClick={result}>Add</button>
                <button onClick={result1}>Sub</button>
                <button onClick={result2}>Mult</button>
                <button onClick={result3}>divi</button>
            </form>
            <h1>값 {username}{userid}</h1>
            <form>
                <label>Enter Calc Number:
                    <input
                       type="text"
                       name="username"
                       placeholder='string'
                       value={username}
                       onChange={onDateChange}
                    />   
                </label>
                <label>
                    <input
                        type="text"
                        name="userid"
                        placeholder='string'
                        value={userid}
                        onChange={onDateChange}
                    />
                </label>
                <button onClick={onDateReset}>AddString</button>
            </form>
        </div>    
    );
}



export default Calc;