import React from "react";
const initialState = {
  Book: [
    { id: 1, title: "ABSALOM, ABSALOM", Author:"ABSALOM, ABSALOM"},
    { id: 2, title: "VILE BODIES", Author:" EVELYN WAUGH" },
  ],
 
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.Book;

      case "AddBook":
          console.log(action.payload)
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          Book: [...state.Book, ...newBook]
      }
      case "GET_POST_SUCCESS":
        console.log(action.payload)
        return {
          ...state,
          posts: action.payload
        }
  
    default:
      return state
  }
};

export default reducer;