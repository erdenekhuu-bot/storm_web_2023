let book = {
    title: 'JavaScript Fundamentals',
    author: 'Jane Doe',
    pages: 300
}
console.log(book.title)
book.year=2021
book.pages=320

book.getInfo=function(){
    return `${this.title} by ${this.author} ${this.pages} pages`
}
console.log(book.getInfo())