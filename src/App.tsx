// src/App.tsx
import UUIDStatus from './components/UUIDStatus/UUIDStatus'
import UUIDList from './components/UUIDList/UUIDList'

export default function App(): JSX.Element {
	return (
		<>
			<UUIDStatus></UUIDStatus>
			<UUIDList></UUIDList>
		</>
	)
}