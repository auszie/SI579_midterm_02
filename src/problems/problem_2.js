
import {useState} from 'react';
export const description =
'The `Problem` component in `src/problem_2.js` accepts a list of attributes (`props`).\
 It expects three properties:\n\
 \
- `initial` represents the starting value\n\
- `min` represents the lowest value\n\
- `max` represents the highest value\n\
 \n\
 Write code that allows users to increment the value by clicking the "+" button or\
 decrement the value by clicking the "-" button. Although `src/index.js` passes in\
 `1` for `props.initial`, `0` for `props.min`, and `10` for `props.max`, your code\
 should work for any value of `initial`, `min`, and `max`. You can assume that\
 `props.min <= props.initial <= props.max`.\
 ';

var i = 1;
var newValue;
let output1 = 5;


export function Problem (props) {
    // console.log('problem 2 initial:', props.initial);
    // console.log('problem 2 min:', props.min);
    // console.log('problem 2 max:', props.max);

    

    const [output,setoutput] = useState([1]);

    function increases(){
        
        if (i <= props.max){
            console.log("the value of " + i);
            //newValue = i++;
            console.log("this is the new value " + i);
            setoutput(i++);
        }
        //setoutput(newValue);
    }

    function decreases(){
        if (i >= props.min){
            console.log(i);
            ///newValue = i--;
            ///console.log(newValue);
            setoutput(i--);
            
        }
        //setoutput(newValue);
    }
    
    
    

    
    return <div className="btn-group">
            <button type="button" onClick={decreases} className="btn btn-primary">-</button>
            <span id="num_sel">{output}</span>
            <button type="button" onClick={increases} className="btn btn-primary">+</button>
        </div>;
}