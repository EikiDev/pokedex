import { AppRoutes } from "./pages/routes"
import { QueryClientProvider, QueryClient } from 'react-query'
import { GlobalStyles } from "./styles/GlobalStyles"
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";

const queryClient = new QueryClient()

function App() {

  const { isDark } = useContext(ThemeContext)

  return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyles isDark={isDark}/>
        <AppRoutes />
      </QueryClientProvider>
  )
}

export default App