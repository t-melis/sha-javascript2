let arr = ['the_great_gatsby', 'to_kill_a_mockingbird', 'tell_me_a_riddle', 
'great_expectations', 'all_quiet_on_the_western_front', 'war_and_peace',
'the_heart_is_a_lonely_hunter', 'native_son', 'the_road', 'frankenstein'];

console.log(arr);

// Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.
let ul = document.createElement('ul');
let body = document.body;
body.style.textAlign = 'center';
body.style.backgroundColor = 'lightblue';
// function appendBooks(myArr){
//     myArr.forEach( book => {
//         let li = document.createElement('li')
//         li.textContent = book;   
//         ul.appendChild(li);
//     })
// }

// appendBooks(arr);

// Constructor
let Book = function(id, author, title, language, image){
    this.id = id,
    this.author = author,
    this.title = title,
    this.language = language
    this.image = image
}

let library = {

    books : [ new Book(arr[0], 'F. Scott Fitzgerald', 'The Great Gatsby', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/01-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[1], 'Harper Lee', 'To Kill a Mockingbird', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/02-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[2], 'Tillie Olsen', 'Tell Me a Riddle', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/04-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[3], 'Charles Dickens', 'Great Expectations', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/05-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[4], 'Erich Marie Remarque', 'All Quiet on the Western Front', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/06-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[5], 'Leo Tolstoy', 'War and Peace', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/07-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[6], 'Carson McCullers', 'The Heart is a Lonely Hunter', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/08-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[7], 'Richard Wright', 'Native Son', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/09-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[8], 'Cormac McCarthy', 'The Road', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/10-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg'),
    new Book(arr[9], 'Mary Shelley', 'Frankenstein', 'English', 'https://www.rd.com/wp-content/uploads/2017/07/11-Books-You-Really-Should-Have-Read-By-Now-via-barnesandnoble.com_-1024x683.jpg')]

}
console.log(library);


function appendLibrary(library){
    library.books.forEach(book => {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.textContent = book.title;
        h2.style.textDecoration = 'underline';
        let img = document.createElement('img');
        let author = document.createElement('h2');
        author.textContent = book.author;
        img.src = book.image;
        img.alt = book.title;
        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        // img.style.width = '400px';
        // img.style.height = '400px';
        ul.style.listStyle = 'none';
        li.appendChild(h2);
        li.appendChild(document.createElement('br'));
        li.appendChild(author);
        li.appendChild(img);
        li.appendChild(document.createElement('br'));
        ul.appendChild(li);
        
    });   
}



appendLibrary(library);

ul.style.width = '100%';
ul.style.display = 'flex';
ul.style.flexFlow = 'row wrap';
body.appendChild(ul);

console.log( Object.keys(library));

