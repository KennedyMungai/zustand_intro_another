import Column from '../components/Column'

const App = () => {
  return (
    <main className="min-h-screen bg-stone-800 text-white flex justify-between gap-1 px-10">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </main>
  )
}

export default App