exports.skunkDetails = (pegs) => {
  
  if (pegs >= 31 && pegs < 61) {
        return 1;
      } else if (pegs >= 61) {
        return 2;
      } else {
        return 0;
      } 
}
