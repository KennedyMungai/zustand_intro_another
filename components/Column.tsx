type Props = {
	state: "PLANNED" | "ONGOING" | "DONE"
}

const Column = ({ state }: Props) => {
	return <div className="min-h-[20rem] border border-white">{state}</div>
}

export default Column
