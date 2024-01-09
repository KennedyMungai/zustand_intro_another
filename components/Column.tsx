import Task from '../components/Task'

type Props = {
	state: 'PLANNED' | 'ONGOING' | 'DONE'
}

const Column = ({ state }: Props) => {
	return (
		<div className=' flex flex-1 border border-white min-h-[20rem] m-5 rounded-md p-5 w-full'>
			<p>{state}</p>
			<Task title='Something in the way' />
		</div>
	)
}

export default Column
