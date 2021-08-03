import React from 'react'
import useGetUUID from '../useGetUUID'

export default function UUIDStatus(): JSX.Element {
	const uuidString= useGetUUID();
	return (
        <>
            <em>component: UUIDStatus</em>
            <div>{`status: ${uuidString?'友直':'空直'}`}</div>
            <h1>{`UUID: ${uuidString}`}</h1>
        </>
    )
}