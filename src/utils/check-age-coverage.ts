import { MAX_AGE,MIN_AGE } from '../constants/index'
import { AgeRangePriceType } from '../types'

export function checkFullCoverage(data:AgeRangePriceType[]){
    const cloneData = [...data]
    cloneData.sort((a,b)=> a.ageRange[0] - b.ageRange[0])

    // 檢查是否從 0 開始
  if (cloneData[0].ageRange[0] !== MIN_AGE) return false;
    
    let preEndAge = 0; 

    for (let index = 0; index < cloneData.length; index++) {
      const [strAge, endAge] = cloneData[index].ageRange;
      
      // 其中一條完整涵蓋
      if(endAge - strAge === MAX_AGE - MIN_AGE) return true; 
      
      // 檢查是否連續，(preEndAge + 1) 會是下一個數字則連續
      if(index !== 0 && strAge !== preEndAge + 1) return false;

      preEndAge = endAge;
    }
    return preEndAge === MAX_AGE;
  }