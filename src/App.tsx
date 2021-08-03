// src/App.tsx
import Counter from './components/Counter/Counter'
import GetUUID from './components/GetUUID/GetUUID'
import GetUUIDByMultipleOfFive from './components/GetUUIDByMultipleOfFive/GetUUIDByMultipleOfFive'

export default function App(): JSX.Element {
	return (
		<>
			<Counter></Counter>
			<hr />
			<GetUUID></GetUUID>
			<hr />
			<GetUUIDByMultipleOfFive></GetUUIDByMultipleOfFive>
		</>
	)
}