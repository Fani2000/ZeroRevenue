import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: { events: [], map: null },
  reducers: {
    addEvent: (state, action) => {
      const event = state.events.filter(
        (e) =>
          e.address == action.payload.address && e.type == action.payload.type
      );

      if (event.length === 0)
        state.events.push({
          ...action.payload,
          isSelected: false,
        });
    },
    selectEvent: (state, action) => {
      state.events.forEach((event) => {
        event.isSelected = false;
      });
      state.events[action.payload].isSelected = true;
    },
    reset: (state, action) => {
      state.events = [];
    },
    setMap: (state, action) => {
      state.map = action.payload;
    },
  },
});

export default eventSlice.reducer;

const addEvent = eventSlice.actions.addEvent;
const resetEvents = eventSlice.actions.reset;
const setMap = eventSlice.actions.setMap;
const selectEvent = eventSlice.actions.selectEvent;

export { addEvent, resetEvents, setMap, selectEvent };
