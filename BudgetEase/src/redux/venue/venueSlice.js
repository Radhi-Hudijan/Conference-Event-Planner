import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
    name: "Conference Room (Capacity:15)",
    cost: 3500,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
    name: "Auditorium Hall (Capacity:200)",
    cost: 5500,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
    name: "Presentation Room (Capacity:50)",
    cost: 700,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
    name: "Large Meeting Room (Capacity:10)",
    cost: 900,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
    name: "Small Meeting Room (Capacity:5)",
    cost: 1100,
    quantity: 0,
  },
]

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    quantityIncrement: (state, action) => {
      const { payload: index } = action
      state[index].quantity++
    },
    quantityDecrement: (state, action) => {
      const { payload: index } = action
      //
      if (state[index].quantity > 0) {
        state[index].quantity--
      }
    },
  },
})

export const { quantityIncrement, quantityDecrement } = venueSlice.actions

export default venueSlice.reducer
