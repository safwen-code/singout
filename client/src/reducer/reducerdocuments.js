const initialState = {
    document: [],
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "GET_DOCUMENTS":
        return {
          ...state,
          document: action.payload
        };
      

      default:
        return state;
    }
  }