import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import TextBox from '../component/TestBox'

export default function Home(): JSX.Element{
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

    return (
        <>
            <TextBox title={uuidString} msg="msg" onClick></TextBox>
            <TextBox title={count.toString()} msg="msg" onClick></TextBox>
        </>
    )
}