import React from "react"

type Props = {
	title: string
}

const Task = ({ title }: Props) => {
	return <div className="bg-stone-200 rounded-md min-h-[5rem]">{title}</div>
}

export default Task
