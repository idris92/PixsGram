const petFavourite = (state=1, action)=>{
    switch(action.type){
      case "FAVOURITE_INCREMENT":
        return state + 1;
      case "FAVOURITE_DECREMENT":
        return state - 1;
        default:
          return state;
    }
}

export default petFavourite