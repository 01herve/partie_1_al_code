function nParite(n, parite) {
  let sum = 0;
  (parite & 1)===0
  if(parite){for(let i=2;i<n*2;i+=2){sum+=i}}else{for(let i=1;i<n*2;i+=2){sum+=i}}
  return sum
}



module.exports = nParite;