import Column from '../components/Column'

const App = () => {
  return (
    <main className="min-h-screen">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </main>
  )
}

export default App