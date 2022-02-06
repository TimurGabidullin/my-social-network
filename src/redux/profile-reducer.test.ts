import profileReducer, {addPostActionCreator, deletePost, ProfileType} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: `It's my first post`, likesCount: 11}
    ],
    profile: null as ProfileType,
    status: '',
}


test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-camasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});

test('length of post should be incremented', () => {
    let action = addPostActionCreator('it-camasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('it-camasutra.com')
});

test('after deleting length of messages be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});