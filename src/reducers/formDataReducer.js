const initialFormData = [];

const formDataReducer = (state = initialFormData, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return [action.payload, ...state];
    }
    default: {
      return state;
    }
  }
};

export default formDataReducer;
