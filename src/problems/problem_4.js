import {useState, useRef} from 'react';
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';
var increment = 0;
let save
export function Problem () {

    
    let savedIncrement = localStorage.getItem('increment');
    
    if(savedIncrement !== null){
        increment = savedIncrement;
        console.log("this is the increment " + increment);
    }
    
    const [output, setoutput] = useState(["Clicked "+ increment + " times"]);
    function increments(){
        increment ++;
        if (increment === 1){
            setoutput("Clicked " + increment + " time");
            localStorage.setItem('increment', increment);
        }
        else{
            setoutput("Clicked " + increment + " times");
            localStorage.setItem('increment', increment);
        }
    }

    function reset(){
        increment = 0;
        setoutput("Clicked " + increment + " times");
        localStorage.setItem('increment', increment);
    }

    return <div className="btn-group">
            <button className="btn btn-primary" onClick={increments}>{output}</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>;
    ;
}