async function getUserAndPosts(userId){
    
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user= await userResponse.json()
        const postResponse= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        const posts= await postResponse.json()
        console.log(user)
        console.log(posts)
    } catch (error) {
        console.log(error)
    }
}
getUserAndPosts(2)