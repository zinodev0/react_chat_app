import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  // const [susername, setSUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [spassword, setSPassword] = useState("");
  const [error, setError] = useState("");

  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   const authObject = {
  //     "Project-ID": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
  //     "User-Name": susername,
  //     "User-Secret": spassword,
  //   };

  //   try {
  //     await axios.put(
  //       "https://api.chatengine.io/users/",
  //       { username: susername, secret: spassword },
  //       {
  //         headers: {
  //           "Private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
  //         },
  //       }
  //     );
  //     await axios.get("https://api.chatengine.io/chats", {
  //       headers: authObject,
  //     });

  //     localStorage.setItem("username", susername);
  //     localStorage.setItem("password", spassword);

  //     window.location.reload();
  //   } catch (error) {
  //     setError("Something went wrong");
  //   }

  //   if (susername.length === 0 || spassword.length === 0) return;

  //   localStorage.setItem("username", susername);
  //   localStorage.setItem("password", spassword);

  //   window.location.reload();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Ooops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      {/* <div className="form">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={susername}
            onChange={(e) => setSUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={spassword}
            onChange={(e) => setSPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Sign up</span>
            </button>
          </div>

          <h2 className="error">{error} </h2>
        </form>
      </div> */}
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>

          <h2 className="error">{error} </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
