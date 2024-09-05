import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "addUser",
    initialState: {
        count: 0,
        member: [],
    },
    reducers: {
        addMember: (state, action) => {
            // {name, age, address}
            return {
                count: state.count + 1,
                member: [...state.member, action.payload]  
                // 기존데이터, {name, age, address}
            }
        },
        deleteMember: (state, action) => {
            return {
                count: state.count - 1,
                member: state.member.filter((user) => user.name !== action.payload)
            }
        }
    }
})

export const { addMember, deleteMember } = userSlice.actions;
export default userSlice.reducer;