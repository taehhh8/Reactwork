import React, {useState} from 'react';

// class Wow extends React.Component{}

function Calc() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div>
            <h1>Calc Result</h1>    
            <form onSubmit = {handleSubmit}>
                <label>Enter Calc Number:
                    <input
                       type="text"
                       name="username"
                       placeholder='0'
                       value={inputs.username || ""}
                       onChange={handleChange}
                    />   
                </label>
                <label>
                    <input
                        type="number"
                        name="age"
                        placeholder='0'
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <button>Add</button>
                <button>Sub</button>
                <button>Mult</button>
                <button>divi</button>
            </form>
            <h1>Text add Result</h1>
            <form onSubmit = {handleSubmit}>
                <label>Enter Calc Number:
                    <input
                       type="text"
                       name="username"
                       placeholder='0'
                       value={inputs.username || ""}
                       onChange={handleChange}
                    />   
                </label>
                <label>
                    <input
                        type="number"
                        name="age"
                        placeholder='0'
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <button>AddString</button>
            </form>
        </div>    
    );
}



export default Calc;