import { configureStore } from "@reduxjs/toolkit"
import venueReducer from "./venue/venueSlice"

const store = configureStore({
  reducer: {
    venue: venueReducer,
  },
})

export default store
