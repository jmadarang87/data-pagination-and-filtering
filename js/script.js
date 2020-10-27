/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// defines how many students per page to list
const studentsPerPage = 9;

// creates element and sets property
function createElement( elementName, property, value ) {
   let element = document.createElement(elementName);
   element[property] = value;
   return element;
}
// appends child(ren) to parent node
function append( elementName, array ) {
   for ( let i = 0; i < array.length; i++ ) {
      elementName.appendChild(array[i])
   }
}

/* showPage function creates and inserts/appends elements needed to display a "page" of nine students
the function takes 2 parameters: 
   list - represents student data
   pageParameter - the selected page number
*/
function showPage( list, pageParameter ) {
 // defines start and end indexes for list items to be displayed on given page
 const startIndex = ( pageParameter * studentsPerPage ) - studentsPerPage;
 const endIndex = ( pageParameter * studentsPerPage) - 1;
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';

 for ( let i = 0; i < list.length; i++ ) {
   if ( i >= startIndex && i <= endIndex ) {
      // creates new elements
      let li = createElement('li', 'className', 'student-item cf');
      let img = createElement('img', 'className', 'avatar');
      let h3 = document.createElement('h3');
      let spanEmail = createElement('spanEmail', 'className', 'email');
      let divStudent = createElement('div', 'className', 'student-details');
      let divJoined = createElement('div', 'className', 'joined-details');
      let spanDate = createElement('span', 'className', 'date');
      let firstName = list[i].name.first;
      let lastName = list[i].name.last;

      // assigns additional properties
      img.src = `${list[i].picture.large}`;
      img.alt = `Profile Picture`;
      h3.innerHTML = `${firstName} ${lastName}`;
      spanEmail.innerHTML = `${list[i].email}`;
      spanDate.innerHTML = `Joined ${list[i].registered.date}`;

      // appends child[ren] to parents
      append(divStudent, [img, h3, spanEmail]);
      append(divJoined, [spanDate]);
      append(li, [divStudent, divJoined]);
      append(studentList, [li]);
   }
 }
}

/*
create the addPagination function
this function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination( list ) {
   const pages = Math.ceil( list.length / studentsPerPage );
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for ( let i = 1; i <= pages; i++ ) {
      //creates new elements
      let li = document.createElement('li');
      let button = document.createElement('button');

      // sets additonal properties
      button.type = 'button';
      button.textContent = i;

      // appends child[ren] to parents
      append(li, [button]);
      append(linkList, [li]);

   }
   // adds click event listener to page buttons
   linkList.addEventListener( 'click', (e) => {
      if ( e.target.tagName == 'BUTTON') {
         const buttonTarget = e.target;
         const newButtons = document.querySelectorAll('button');
         const newPage = parseInt(buttonTarget.textContent);
         for ( let i = 0; i < newButtons.length; i++ ) {
            // clears all button class names
            newButtons[i].className = '';
         }
            // sets clicked button class name to 'active'
            buttonTarget.className = 'active';
            showPage( list, newPage);
      }
   })
}

// creates search component
const header = document.querySelector('header');
let label = createElement('label', 'type', 'search');
let input = createElement('input', 'id', 'search');
let buttonSearch = createElement('button', 'type', 'button');
let img = createElement('img', 'src', 'img/icn-search.svg');
label.className = "student-search";
input.placeholder='Search by name...';
img.alt = "Search icon";
append(buttonSearch, [img]);
append(label, [input, buttonSearch]);
append(header, [label]);

// keyup event listener for search
input.addEventListener( 'keyup', (e) => {
   let inputSearch = input.value;
   let searchResult = [];
   for ( let i = 0; i < data.length; i++ ) {
      let dataFirstLower = data[i].name.first.toLowerCase();
      let dataLastLower = data[i].name.last.toLowerCase();
      let searchLower = inputSearch.toLowerCase();
      if ( dataFirstLower.includes(searchLower)  || dataLastLower.includes(searchLower)) {
         searchResult.push(data[i]);
      } 
      // adds pagination for search results
      showPage( searchResult, 1 );
      addPagination( searchResult );
   }  
   // if no search matches
   if ( searchResult.length < 1 ) {
      const studentList = document.querySelector('.student-list');
      studentList.innerHTML = '';
      studentList.innerHTML = 'Sorry, no results found.';
   }
})

// call functions at beginning page load
showPage( data , 1 );
addPagination( data );