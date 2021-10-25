import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    document.title = "Clicker";
    // function setCounter()   {
    //     console.log("Counted");
    //     setCount(count+1);
    // }

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })

    useEffect(() => {
        console.log("Changed");
    })

    useEffect(() => {
        console.log("Mounted");
    }, [])

    useEffect(() => {
        console.log("First Name Changed");
    }, [firstName])

    useEffect(() => {
        console.log("Last Name Changed");
    }, [lastName])

    return (
        <div>
            <div id="counter">
                <h1> Welcome to the {document.title}</h1>
                <button id="btn" onClick={() => setCount(count + 1)}>
                    Count +1
                </button>
            </div>
            <div id="form">
                <p> <u>First name</u></p>
                <input id="form1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <p> <u>Last Name</u></p>
                <input id="form2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                {/* <button id="submit" onClick={submit}> Submit </button> */}
            </div>
            <div>
                <p> {firstName} </p>
                <p> {lastName} </p>
                <p>you have clicked {count} times</p>
            </div>
            {/* insert div here to have fname lname display on page */}
        </div>
    );
}
export default Counter;