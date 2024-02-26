document.addEventListener("DOMContentLoaded", ()=> {
    const url = 'http://localhost:3000/books'
    const list = document.querySelector('ul#list')
    const bookDetails = document.getElementById('show-panel')
    getBooks()
    document.addEventListener('click', handleEvents)


    function getBooks(){
        fetch(url)
            .then(res=>res.json())
            .then(books=>{
                listBooks(books)
            })
    }

    function listBooks(books){
        books.forEach(book=>{
            list.innerHTML += `<li id="titles" data-id=${book.id}>${book.title}</li>`
        })
    }

    function handleEvents(e){
        if(e.target.id == "titles"){
            showBook(e.target.dataset.id)
        }
    }

    function showBook(id){
        fetch(`${url}/${id}`)
            .then(res=>res.json())
            .then(book=>{
                bookDetails.innerHTML = `<img src=${book.img_url} class="thumbnail">
                <h3>${book.subtitle}</h3>
                <p>${book.description}</p>
                `
            })
        
    }
});

//When a user clicks the title of a book, display the book's thumbnail, description, and a list of users who have liked the book. This information should be displayed in the div#show-panel element.