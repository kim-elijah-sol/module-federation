import { Suspense, lazy } from 'react'

// @ts-ignore
const CraBApp = lazy(() => import('craB/App'))

function App() {
  return (
    <div>
      <h1>CRA C App</h1>
      <Suspense fallback={<div>loading craB App</div>}>
        <CraBApp />
      </Suspense>
    </div>
  )
}

export default App
