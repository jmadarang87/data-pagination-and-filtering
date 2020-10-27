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



const studentsPerPage = 9;


function showPage( list, pageParameter ) {

 const startIndex = ( pageParameter * studentsPerPage ) - studentsPerPage;
 const endIndex = ( pageParameter * studentsPerPage) - 1;
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
 for ( let i = 0; i < list.length; i++ ) {
   if ( i >= startIndex && i <= endIndex ) {

      
      let li = document.createElement('li');
      li.className = `student-item cf`;


      let img = document.createElement('img');
      img.className = 'avatar';

      img.src = `${list[i].picture.large}`;
      img.alt = `Profile Picture`;

      let h3 = document.createElement('h3');
      const firstName = list[i].name.first;
      const lastName = list[i].name.last;

      h3.innerHTML = `${firstName} ${lastName}`;

      let spanEmail = document.createElement('span');
      spanEmail.className = `email`;
      spanEmail.innerHTML = `${list[i].email}`;

      let divStudent = document.createElement('div');
      divStudent.className = `student-details`;
      divStudent.appendChild(img);
      divStudent.appendChild(h3);
      divStudent.appendChild(spanEmail);


      let divJoined = document.createElement('div');
      divJoined.className = `joined-details`;

      let spanDate = document.createElement('span');
      spanDate.className = `date`;
      spanDate.innerHTML = `Joined ${list[i].registered.date}`
      divJoined.appendChild(spanDate);

      li.appendChild(divStudent);
      li.appendChild(divJoined);

      studentList.appendChild(li);
   }

 }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination( list ) {
   const pages = Math.ceil( list.length / 9 );
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
            console.log(newButtons);
            newButtons[i].className = '';
         }
         buttonTarget.className = 'active';
         showPage( data, newPage);
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

buttonSearch.addEventListener( 'click', (e) => {
   let inputSearch = input.value;
   let searchResult = [];
   for ( let i = 0; i < data.length; i++ ) {
      if ( data[i].name.first.toLowerCase() === inputSearch.toLowerCase() || data[i].name.last.toLowerCase() === inputSearch.toLowerCase()) {
         searchResult.push(data[i]);
      }
   }  
   console.log(searchResult);
   showPage(searchResult, 1);
   addPagination( searchResult );

   } 
)



