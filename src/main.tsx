import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "rgb(var(--card))",
          color: "rgb(var(--card-foreground))",
          border: "1px solid rgb(var(--border))",
        },
      }}
    />
  </React.StrictMode>,
)
