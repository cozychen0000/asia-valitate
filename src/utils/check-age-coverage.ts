import { MAX_AGE,MIN_AGE } from '../constants/index'
import { AgeRangePriceType } from '../types'


export function checkFullCoverage(data:AgeRangePriceType[]){
    const cloneData = [...data]
    cloneData.sort((a,b)=> a.ageRange[0] - b.ageRange[0])
    
    let isFullCoverage = false;
    let preEndAge = 0; 

    for (let index = 0; index < cloneData.length; index++) {
      const [strAge, endAge] = cloneData[index].ageRange;
      isFullCoverage = endAge - strAge === MAX_AGE - MIN_AGE // 完整涵蓋
      
      // 檢查是否連續，(preEndAge + 1) 會是下一個數字則連續
      if(index !==0 && strAge === preEndAge + 1) {
        isFullCoverage = true; 
      }

      preEndAge = endAge;
    }
    return isFullCoverage 
  }