function square(number){
    if(Math.sqrt(number) % 1 === 0){
        return true;
    } else {
        return false;
    }
}

// console.log(square(25));

console.log(square(26));




function wrap(height, width, length){
    let result = 0;
    if(height==width==length){
      return result += (width*8) + 20;
    }
    let wAndh = +(width*height);
    let wAndl = +(width*length);
    let lAndh = +(length*height);
    if(wAndh >= wAndl && wAndh >= lAndh){
      return result += ((length*4 + width*2 + height*2)+20);
    }
    if(lAndh >= wAndh && lAndh >= wAndl){
      return result += (length*2 + width*4 + height*2)+20;
    }
    if(wAndl >= wAndh && wAndl >= lAndh){
      return result += (length*2 + width*2 + height*4)+20;
    }
    return result;
  }

console.log(wrap(17,32,11)); //162
console.log(wrap(13,13,13)); //124
console.log(wrap(1,3,1)); //32