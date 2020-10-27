/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
// list parameter to represent student data and pageParameter to represent page number that will be passed


// defines how many students per page
const studentsPerPage = 9;



function createElement(elementName, property, value) {
   let element = document.createElement(elementName);
   element[property] = value;
   return element;
}


// creates showPage function to create and insert/append elements needed to display a "page" of nine students
function showPage( list, pageParameter ) {
 const startIndex = ( pageParameter * studentsPerPage ) - studentsPerPage;
 const endIndex = ( pageParameter * studentsPerPage) - 1;
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
 for ( let i = 0; i < list.length; i++ ) {
   if ( i >= startIndex && i <= endIndex ) {

      // creates li
      let li = createElement('li', 'className', 'student-item cf');

      // creates image
      let img = createElement('img', 'className', 'avatar');
      img.src = `${list[i].picture.large}`;
      img.alt = `Profile Picture`;

      // creates h3 with first + last name
      let h3 = document.createElement('h3');
      let firstName = list[i].name.first;
      let lastName = list[i].name.last;
      h3.innerHTML = `${firstName} ${lastName}`;

      //creates email span for email
      let spanEmail = createElement('spanEmail', 'className', 'email');
      spanEmail.innerHTML = `${list[i].email}`;

      // creates student div for email, h3 and img
      let divStudent = createElement('div', 'className', 'student-details');
      divStudent.appendChild(img);
      divStudent.appendChild(h3);
      divStudent.appendChild(spanEmail);

      // creates joined div for joined date
      let divJoined = createElement('div', 'className', 'joined-details');
      let spanDate = createElement('span', 'className', 'date');
      spanDate.innerHTML = `Joined ${list[i].registered.date}`
      divJoined.appendChild(spanDate);

      // appends student and joined div to li
      li.appendChild(divStudent);
      li.appendChild(divJoined);

      // appends li to main student list
      studentList.appendChild(li);
   }

 }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination( list ) {
   const pages = Math.ceil( list.length / studentsPerPage );
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for ( let i = 1; i <= pages; i++ ) {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = i;
      li.appendChild(button);
      linkList.appendChild(li);
   }
 
   linkList.addEventListener( 'click', (e) => {
      if ( e.target.tagName == 'BUTTON') {
         const buttonTarget = e.target;
         const newButtons = document.querySelectorAll('button');
         const newPage = parseInt(buttonTarget.textContent);
         for ( let i = 0; i < newButtons.length; i++ ) {
            newButtons[i].className = '';
         }
         buttonTarget.className = 'active';
         showPage( list, newPage);
      }
   })
}


// Call functions
showPage( data , 1 );
addPagination( data );

// add Search Component
const header = document.querySelector('header');
const label = document.createElement('label');
const input = document.createElement('input');
const buttonSearch = document.createElement('button');
const img = document.createElement('img');
input.id = 'search';
input.placeholder='Search by name...';
buttonSearch.type = 'button';
img.src = "img/icn-search.svg";
img.alt = "Search icon";
label.type = "search";
label.className = "student-search";
buttonSearch.appendChild(img);
label.appendChild(input);
label.appendChild(buttonSearch);
header.appendChild(label);

// Search feature
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
   }  
   showPage(searchResult, 1);
   addPagination( searchResult );
   if ( searchResult.length < 1 ) {
      const studentList = document.querySelector('.student-list');
      studentList.innerHTML = '';
      studentList.innerHTML = 'Sorry, no results found.';
   }


   } 
)



