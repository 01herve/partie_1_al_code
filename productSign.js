function productSign(a, b) {
  // corps de la fonction ici
  if(a<0||b<0){
    return -1;
  }else if(a>0||b>0){
    return 1
  }else{
    return 0
  }
}

module.exports = productSign;