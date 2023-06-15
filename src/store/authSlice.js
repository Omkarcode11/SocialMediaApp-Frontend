import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        firstName: '',
        lastName: "", theme: "light",
        isAuthenticated: false,
        friendRequests: [],
        friends: [],
        myPosts: [],
        email: "",
        phone: 0,
        myUserId: "",
        token: "",
        id: ''
    },
    reducers: {
        addToken(state, action) {
            state.token = action.payload.token
        },
        changeAuthentication(state, action) {
            state.isAuthenticated = action.payload
        },
        addUser(state, action) {
            state.id = action.payload._id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.myPosts = action.payload.myPosts,
                state.friends = action.payload.myFriends
            state.friendRequests = action.payload.friendReq
            state.sendFriendReq = action.payload.sendFriendReq
            state.likedPosts = action.payload.likedPosts

        },
        changeTheme(state, action) {
            state.theme = action.payload.theme
        },
        logout(state, action) {
            state = {
                firstName: '',
                lastName: "",
                theme: "light",
                isAuthenticated: false,
                friendRequests: [],
                friends: [],
                myPosts: [],
                myUserId: "",
                token: ""
            }
        },
        acceptFriendReq(state, action) {
            let index = state.friendRequests.indexOf(action.payload)
            state.friendRequests.splice(index, 1)
            state.friends.push(action.payload)

        },
        sendFriendReq(state, action) {
            state.sendFriendReq.push(action.payload)
        },
        declineFriendReq(state, action) {
            let index = state.friendRequests.indexOf(action.payload)
            state.friendRequests.splice(index, 1)

        },

    }
})


export const { addToken, changeAuthentication, addUser, changeTheme, logout, sendFriendReq, acceptFriendReq, declineFriendReq } = authSlice.actions


export default authSlice.reducer