import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useGetUUID(): string {
	const [uuidString, setUuidString] = useState('')

    // observe
    useEffect(():void=>{
        async function fetch() {
            const response= await axios.get("http://httpbin.org/uuid")
            setUuidString(response.data["uuid"])
        }
        fetch()
    }, [])

	return uuidString
}