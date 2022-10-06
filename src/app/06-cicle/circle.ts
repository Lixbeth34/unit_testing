export function circle(x: number) {
    let result = 0;
  
    if (x == 0) {
      result = 0;
    }
  
    if (x < 0) {
        result = 0;
    }
  
    if ( x > 0 ) {
        result = (x * x) * 3.1416;
    }
  
    return result;
  };