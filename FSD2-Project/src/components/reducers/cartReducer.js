
const initialState = {
  ticketPrice: 0,
  totalSeats: 0,
  seatNumbers: []
};

// export const actionTypes = {
//   ADD_TO_CART: "ADD_TO_CART",
//   DELETE_FROM_CART: "DELETE_FROM_CART",
//   RESET_CART: "RESET_CART",
// };

const CartReducer = (state = initialState, action) => {

  switch (action.type) {
    case "addtocart": 
      return {
        ...state,
        // movie:action.payload
        ticketPrice: action.payload.ticketPrice,
        totalSeats: action.payload.totalSeats,
        seatNumbers: [...state.seatNumbers, ...action.payload.seatNumbers]
      
      };
    default: return state;
  }

};


export default CartReducer;