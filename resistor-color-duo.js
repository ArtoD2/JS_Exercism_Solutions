//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const MAX = 2;
export const decodedValue = (colors) => {
  
  let rtnValue = 0
  for (let col = 0; col < MAX; col++) {
    
    let i = COLORS.indexOf(colors[col])
    
    if (col == 0) {
      rtnValue = i * 10;
    } else {
      rtnValue += i;
    }
    
  }
  return rtnValue
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
