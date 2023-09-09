// 1. import area
// 1.1 import {someNamedImport} from someLocation/someLibrary
import {E} from "./E";


// 2. functional area
function D(props){
    let name='Vinay';
    let surname2 = 'Kapoor';
    return(
        <>
            <span>D {name} {props.surname} - <E surname={surname2}/></span>
        </>
    )
}


// 3. export area

// 3.1 default export
export default D;

// 3.2 named export
