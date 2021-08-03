// src/App.tsx
import React, { useState } from 'react'
import Counter from './components/Counter/Counter'
import GetUUID from './components/GetUUID/GetUUID'

export default function App(): JSX.Element {
	return (
		<>
			<Counter></Counter>
			<hr />
			<GetUUID></GetUUID>
		</>
	)
}