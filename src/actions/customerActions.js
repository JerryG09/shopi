import {SET_ACTIVITY,CREATE_USER} from './types'
import request from '../request'

const setCustomer = payload =>({
    type:CREATE_USER,
    payload
})

const setActivity = payload =>({
    type:SET_ACTIVITY,
    payload
})

export const createCustomer = (data)=>async dispatch =>{    
  try{
    dispatch(setActivity(true));
    try{
      const register = await request.post("/api/customer/register/",data);  
      dispatch(setCustomer(register))
    }
    catch(err){
      if (err.response){
        dispatch(setCustomer(err.response))  
      }
    }
    
    
    dispatch(setActivity(false));
  }
  catch(err){
    dispatch(setActivity(false))
    return err
}
}