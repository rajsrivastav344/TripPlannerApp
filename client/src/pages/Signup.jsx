import React, { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, number });
    // You can add your API call here
  };

  return (
    <div className="glass-wrapper">
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .glass-wrapper {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          background: radial-gradient(1200px 800px at 10% 10%, rgba(255,255,255,.12), transparent 60%),
                      radial-gradient(1000px 700px at 90% 30%, rgba(255,255,255,.10), transparent 60%),
                      linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #0b1020 100%);
          color: #e5e7eb;
        }

        .glass-card {
          width: 100%;
          max-width: 420px;
          position: relative;
          border-radius: 20px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          animation: floatIn .5s ease-out both;
        }

        .glass-card:before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1px; /* for gradient border */
          background: linear-gradient(135deg, rgba(255,255,255,.35), rgba(255,255,255,.05));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }

        .title {
          margin: 0 0 8px 0;
          font-size: 26px;
          letter-spacing: .3px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 1px 0 rgba(0,0,0,.25);
          text-align: center;
        }
        .subtitle {
          margin: 0 0 22px 0;
          font-size: 14px;
          color: #cbd5e1;
        }

        .field {
          display: grid;
          gap: 8px;
          margin-bottom: 16px;
        }
        .label {
          font-size: 14px;
          color: #e2e8f0;
        }
        .input {
          height: 44px;
          padding: 0 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,0.06);
          color: #f8fafc;
          outline: none;
          transition: box-shadow .2s ease, border-color .2s ease, background .2s ease;
        }
        .input::placeholder { color: rgba(229,231,235,.65); }
        .input:focus {
          border-color: rgba(255,255,255,.45);
          box-shadow: 0 0 0 4px rgba(255,255,255,.08);
          background: rgba(255,255,255,0.10);
        }

        /* Password field styling */
        .pw-row {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-password {
          flex: 1;
          height: 44px;
          padding: 0 60px 0 14px; /* leave space for toggle button */
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,0.06);
          color: #f8fafc;
          outline: none;
          transition: box-shadow .2s ease, border-color .2s ease, background .2s ease;
        }

        .input-password::placeholder { color: rgba(229,231,235,.65); }

        .input-password:focus {
          border-color: rgba(255,255,255,.45);
          box-shadow: 0 0 0 4px rgba(255,255,255,.08);
          background: rgba(255,255,255,0.10);
        }

        .toggle {
          position: absolute;
         
          top: 50%;
          transform: translateY(-50%);
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,.15);
          border: 1px solid rgba(255,255,255,.35);
          font-size: 13px;
          font-weight: 600;
          color: #0b1020; /* visible text */
          cursor: pointer;
          transition: background .2s ease;
        }
        .toggle:hover { background: rgba(255,255,255,.25); }

        .submit {
          height: 46px;
          width: 100%;
          margin-top: 6px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          color: #0b1020;
          font-weight: 700;
          letter-spacing: .4px;
          cursor: pointer;
          transition: transform .06s ease, filter .2s ease, box-shadow .2s ease;
          box-shadow: 0 10px 20px rgba(16,185,129,.25);
        }
        .submit:hover { filter: brightness(1.05); }
        .submit:active { transform: translateY(1px); }

        .helper {
          margin-top: 14px;
          text-align: center;
          font-size: 13px;
          color: #cbd5e1;
        }
        .linkish {
          color: #93c5fd;
          text-decoration: none;
          border-bottom: 1px dashed rgba(147,197,253,.5);
        }
        .linkish:hover { border-bottom-style: solid; }
      `}</style>

      <form className="glass-card" onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>

        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <div className="pw-row">
            <input
              className="input-password"
              id="password"
              name="password"
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
              style={{textAlign:"end"}}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="number">Contact No:</label>
          <input
            className="input"
            id="number"
            name="number"
            type="number"
            autoComplete="tel"
            placeholder="+919336XXXXX"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <button className="submit" type="submit">
          Login
        </button>

        <p className="helper">
          Forgot your password?{" "}
          <Link className="linkish" to="/forgot-password">
            Reset
          </Link>
        </p>
      </form>
    </div>
  );
}
