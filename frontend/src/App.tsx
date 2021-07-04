import Layout from './components/Layout'
import StyleProvider from './styles'

function App() {
  return (
    <StyleProvider>
      <Layout>
        <>
          <h1>Birdie</h1>
        </>
      </Layout>
    </StyleProvider>
  )
}

export default App
