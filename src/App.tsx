import { Form } from "./components/Form"
import { FormInfo } from "./components/FormInfo"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyle />
      <main>
        <FormInfo />
        <Form />
      </main>
    </>
  )
}

export default App
