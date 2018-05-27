let arr = ['the_great_gatsby', 'to_kill_a_mockingbird', 'tell_me_a_riddle', 
'great_expectations', 'all_quiet_on_the_western_front', 'war_and_peace',
'the_heart_is_a_lonely_hunter', 'native_son', 'the_road', 'frankenstein'];

console.log(arr);

// Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.
let ul = document.createElement('ul');
document.body.appendChild(ul);

// function appendBooks(myArr){
//     myArr.forEach( book => {
//         let li = document.createElement('li')
//         li.textContent = book;   
//         ul.appendChild(li);
//     })
// }

// appendBooks(arr);

// Constructor
let Book = function(id, author, title, language){
    this.id = id,
    this.author = author,
    this.title = title,
    this.language = language
}

let library = {

    books : [ new Book(arr[0], 'F. Scott Fitzgerald', 'The Great Gatsby', 'English'),
    new Book(arr[1], 'Harper Lee', 'To Kill a Mockingbird', 'English'),
    new Book(arr[2], 'Tillie Olsen', 'Tell Me a Riddle', 'English'),
    new Book(arr[3], 'Charles Dickens', 'Great Expectations', 'English'),
    new Book(arr[4], 'Erich Marie Remarque', 'All Quiet on the Western Front', 'English'),
    new Book(arr[5], 'Leo Tolstoy', 'War and Peace', 'English'),
    new Book(arr[6], 'Carson McCullers', 'The Heart is a Lonely Hunter', 'English'),
    new Book(arr[7], 'Richard Wright', 'Native Son', 'English'),
    new Book(arr[8], 'Cormac McCarthy', 'The Road', 'English'),
    new Book(arr[9], 'Mary Shelley', 'Frankenstein', 'English')]

}
console.log(library);


function appendLibrary(library){
    library.books.forEach(book => {
        let h2 = document.createElement('h2');
        h2.textContent = book.title;
        h2.style.textDecoration = 'underline';
        ul.appendChild(h2);
    });   
}


appendLibrary(library);

