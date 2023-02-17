import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import Layout from "./components/Layout"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { indigo } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: indigo[400],
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: "1.5rem",
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
