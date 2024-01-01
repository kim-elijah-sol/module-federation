import { Suspense, lazy } from 'react'

// @ts-ignore
const CraAApp = lazy(() => import('craA/App'))

function App() {
  return (
    <div>
      <h1>CRA B App</h1>
      <Suspense fallback={<div>loading craA App</div>}>
        <CraAApp />
      </Suspense>
    </div>
  )
}

export default App
