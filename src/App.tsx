import Column from '../components/Column'

const App = () => {
  return (
    <main className="min-h-screen bg-stone-800 text-white flex flex-col justify-between">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </main>
  )
}

export default App