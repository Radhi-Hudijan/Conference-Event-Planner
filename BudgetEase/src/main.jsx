import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import App from "./App.jsx"
import ConferenceEvent from "./pages/ConferenceEvent.jsx"
import store from "./redux/store.js"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/conference-event" element={<ConferenceEvent />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
