import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

export default function GetUUIDByMultipleOfFive(): JSX.Element {
	const [uuidString, setUuidString] = useState('')
	const [count, setCount] = useState(0)
	const countRef = useRef(0)

    // observe
    useEffect(():void=>{
        async function fetch() {
            const response= await axios.get("http://httpbin.org/uuid")
            setUuidString(response.data["uuid"])
        }
        fetch()
    }, [count])

    // bind
    function clickLinstener():void{
        countRef.current +=1
        if(countRef.current %5 === 0)
            setCount(countRef.current)
    }

	return (
		<>
			<h1>{`UUID ${uuidString}`}</h1>
			<h5>{`點擊次數 ${count}`}</h5>
            <button type='button' onClick={clickLinstener}>點我</button>
		</>
	)
}