import { AgeRangePriceType } from '../types'

  export function validateData(data:AgeRangePriceType[]){
    const errors = {} as {[key:string]:{ageError:null|string,priceError:null|string}};
    const cloneData = [...data]
    cloneData.sort((a,b)=> a.ageRange[0] - b.ageRange[0])
    
    let preEndAge = 0; 

    for (let index = 0; index < cloneData.length; index++) {
        const [strAge, endAge] = cloneData[index].ageRange;
      console.log(strAge > preEndAge,strAge,preEndAge)
      // 檢查是否有重疊
      if(strAge < preEndAge) {
        
        if(!errors[index]){
            errors[index] = {ageError:null,priceError:null}
        }
        errors[index]['ageError'] = '年齡區間不可重疊'
        console.log(errors)
      }

      if(!cloneData[index].price && cloneData[index].price !== 0){
        
        if(!errors[index]){
            errors[index] = {ageError:null,priceError:null}
        }
        errors[index]['priceError'] = '價格不可為空'
      }

      preEndAge = endAge;
    }
    const isValid = Object.keys(errors).length === 0; 
    return {errors, isValid}

  }