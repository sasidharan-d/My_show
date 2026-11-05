import React, { useState } from "react";

export default function AuthModal({ activeTab, onClose, onAuthSuccess }) {
  const [tab, setTab] = useState(activeTab || "login");
  
  // Form States
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regLoc, setRegLoc] = useState("");
  const [regGender, setRegGender] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  // Helper to read storage safely
  const getUsers = () => JSON.parse(localStorage.getItem("myshow_users") || "[]");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const users = getUsers();
    const found = users.find(u => u.username === loginUser && u.password === loginPass);
    
    if (found) {
      localStorage.setItem("myshow_current_user", JSON.stringify(found));
      onAuthSuccess(found);
      onClose();
    } else {
      setErrorMsg("Invalid username or password. Please sign up if you don't have an account.");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const users = getUsers();
    const exists = users.some(u => u.username === regUser);

    if (exists) {
      setErrorMsg("Username already exists!");
      return;
    }

    const newUser = {
      name: regUser,
      username: regUser,
      password: regPass,
      location: regLoc,
      gender: regGender
    };

    users.push(newUser);
    localStorage.setItem("myshow_users", JSON.stringify(users));
    localStorage.setItem("myshow_current_user", JSON.stringify(newUser));
    onAuthSuccess(newUser);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container-double" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        {/* Visual Brand Panel */}
        <div className="modal-brand-side">
          <span className="modal-hanger">🥻</span>
          <h2>My Show</h2>
          <p>Style. Shop. Smile.</p>
        </div>

        {/* Form Switch Panel */}
        <div className="modal-form-side">
          {errorMsg && <div className="error-alert">{errorMsg}</div>}

          {tab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="auth-form-body">
              <h3>🔒 Login to My Show</h3>
              <p className="auth-subtext">Welcome back! Please login to continue.</p>
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Name"
                  required
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-pink full-btn">Login</button>
              
              <p className="switch-text">
                Don't have an account?{" "}
                <span onClick={() => { setTab("signup"); setErrorMsg(""); }}>Sign Up</span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="auth-form-body">
              <h3>👤 Create Account</h3>
              <p className="auth-subtext">Join My Show today!</p>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Name"
                  required
                  value={regUser}
                  onChange={(e) => setRegUser(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={regPass}
                  onChange={(e) => setRegPass(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location"
                  required
                  value={regLoc}
                  onChange={(e) => setRegLoc(e.target.value)}
                />
              </div>

              <div className="form-group">
                <select
                  required
                  value={regGender}
                  onChange={(e) => setRegGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn-pink full-btn">Sign Up</button>
              
              <p className="switch-text">
                Already have an account?{" "}
                <span onClick={() => { setTab("login"); setErrorMsg(""); }}>Login</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}