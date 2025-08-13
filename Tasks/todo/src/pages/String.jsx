import { useState } from "react"

    const String=()=>
    {

          const [state,SetRandomstring]=useState("qwe");

                  const StringValue=(Length)=>
                  {
                        const Value='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVDWXYZ'
                        let result='';
                        for (let i=0; i<=Value.length; i++)
                            {
                               const RandomIndex=Math.floor(Math.random()*Value.length);
                               result+=Value[RandomIndex];
                            }
                            return result;
                 }
                 const HandleClick=()=>{
                     const newString=StringValue(8);
                     SetRandomstring(newString);
                 }
                            

       return(
       
        <div>
            <h1>Random String Generator</h1>
            <p>value: {state}</p>
             <button onClick={HandleClick}>RandomStringGenerator</button>
        </div>
       )

}
export default String

