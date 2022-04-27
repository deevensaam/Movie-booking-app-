let initialState = {
    booked: []
  };

function seatReducer(state = initialState, action){
    switch (action.type) {
        case "Booked":
            state.booked.forEach(i=>payload.booked.push(i))
          return {
            ...state,
            booked: payload.booked
          };
        
        default:
            return state;
    }  
}

export default seatReducer
