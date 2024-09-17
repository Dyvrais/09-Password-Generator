import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  useEffect(generatePassword, []);

  return (
    <main className="flex justify-center h-screen items-center text-white">
      <div className="bg-[#090212] w-1/2 px-6 py-2 rounded-xl">
        <h1 className="text-left text-xl mt-2 mb-4">Generate password</h1>
        <div className="flex flex-col my-2">
          <label className="text-xs text-left">GENERATED PASSWORD</label>
          <input
            value={password}
            className="my-2 p-2 rounded-xl bg-[#26173c]"
            readOnly
          ></input>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="text-xs text-left">CHARACTER LENGTH</label>
          <input
            className="w-9 bg-[#26173c]"
            type="number"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs text-left">SETTINGS</label>

          <div className="flex justify-between my-2 bg-[#26173c] p-1 rounded-xl">
            <h3>Include symbols</h3>
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
            />
          </div>

          <div className="flex justify-between my-2 bg-[#26173c] p-1 rounded-xl">
            <h3>Include numbers</h3>
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
          </div>

          <div className="flex justify-between my-2 bg-[#26173c] p-1 rounded-xl">
            <h3>Include lowercase letters</h3>
            <input
              type="checkbox"
              checked={useLowerCase}
              onChange={() => setUseLowerCase(!useLowerCase)}
            />
          </div>

          <div className="flex justify-between my-2 bg-[#26173c] p-1 rounded-xl">
            <h3>Include uppercase letters</h3>
            <input
              type="checkbox"
              checked={useUpperCase}
              onChange={() => setUseUpperCase(!useUpperCase)}
            />
          </div>
        </div>
        <button
          onClick={generatePassword}
          className="w-full py-1 rounded-xl my-5 bg-[#ce5fff]"
        >
          Generate Password
        </button>
      </div>
    </main>
  );
}

export default App;
