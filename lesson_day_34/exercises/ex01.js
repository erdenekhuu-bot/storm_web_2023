const f1 = async function(){
    try {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/2`)
        result = await result.json()
        let h1=document.querySelector('h1')
        let post=document.getElementById('post')
        h1.textContent=result.title
        post.textContent=result.body
    } catch (error) {
        console.log(error)
    }
}
f1()