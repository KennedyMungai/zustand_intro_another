import React from "react"

type Props = {
	title: string
}

const Task = ({ title }: Props) => {
	return <div>{title}</div>
}

export default Task
