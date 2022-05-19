import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./Routes/Dashboard";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Themes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar color="primary" />
        <SignIn color="primary" />
      </ThemeProvider>
    </div>
  );
}

export default App;
