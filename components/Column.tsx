type Props = {
	state: "PLANNED" | "ONGOING" | "DONE"
}

const Column = ({ state }: Props) => {
	return <div className=" flex flex-1 border border-white min-h-[20rem] m-5 rounded-md">{state}</div>
}

export default Column
