export function fact(num: number) {
    let base = 1;
  
    if ( num == 0) {
      base = 1;
    }
  
    if (num < 0 ){
      base = 0;
    }
  
    if ( num >= 16) {
      base = 0;
    }
  
    if ( num > 0 && num < 16) {
      for (let i=1; i<num; i++) {
        base = base*(i+1);
      }
    }
  
    return base;
  }