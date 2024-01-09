type Props = {
	state: "PLANNED" | "ONGOING" | "DONE"
}

const Column = ({ state }: Props) => {
	return <div>{state}</div>
}

export default Column
