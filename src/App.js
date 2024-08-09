import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [colormode, setColorMode] = useState('off');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#03346E';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const colorMode = () => {
    if (colormode === "off") {
      setColorMode("on");
      document.body.style.backgroundColor = '#6EACDA';
      showAlert("Color mode has been enabled", "success");
    } else {
      setColorMode("off");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} colorMode={colorMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm heading="Enter your text to analyze below" showAlert={showAlert} mode={mode} />
        </div>
    </>
  );
}

export default App;
