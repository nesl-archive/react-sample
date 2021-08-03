import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function GetUUID(): JSX.Element {
	const [uuidString, setUuidString] = useState('')
    useEffect(():void=>{
        async function fetch() {
            const response= await axios.get("http://httpbin.org/uuid")
            setUuidString(response.data["uuid"])
        }
        fetch()
    }, [])
	return (
		<>
			<h1>{`UUID ${uuidString} 次`}</h1>
		</>
	)
}