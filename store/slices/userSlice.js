import { createSlice } from '@reduxjs/toolkit'
import  AsyncStorage  from '@react-native-async-storage/async-storage';



const initialState = {
    isAuth : false,
    user : {
        username : undefined,
        name : undefined,
        last_name : undefined,
    }
}

export const userSlice = createSlice({


    name : 'user',
    initialState,
    reducers : {
       setUser : (state,action) => {
        state.user = action.payload
        AsyncStorage.setItem('user', JSON.stringify(state.user))
       },
       setAuth : (state) => {
        state.isAuth = true,
        AsyncStorage.setItem('isAuth', 'true')
       },
       deleteAuth : (state) => {
        state.isAuth = false,
        AsyncStorage.setItem('isAuth', 'false')
       }
    }
});

export const {setUser,setAuth,deleteAuth} = userSlice.actions

export default userSlice.reducer