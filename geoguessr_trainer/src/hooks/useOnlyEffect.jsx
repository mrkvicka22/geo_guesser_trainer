import { useEffect, useRef } from "react";

export default function useOnlyEffect(func, deps){
    const hasExecuted = useRef(false);
    useEffect(()=>{
        if (hasExecuted.current){
            func()
        }
        else{
            hasExecuted.current=true;
        }
    },deps)
}