import { lazy } from 'react'

const CraAApp = lazy(() => import('craA/App'))

function App() {
  return <h1>CRA B App</h1>
}

export default App
