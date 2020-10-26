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
      let divStudent = document.createElement('div');
      let img = document.createElement('img');
      let h3 = document.createElement('h3');
      let firstName = data[i].name.first;
      let lastName = data[i].name.last;
      let spanEmail = document.createElement('span');
      let divJoined = document.createElement('div');
      let spanDate = document.createElement('span');
      li.className = `student-item cf`;
      divStudent.className = `student-details`;
      img.className = 'avatar';
      img.src = `${data[i].picture.large}`;
      img.alt = `Profile Picture`;
      h3.innerHTML = `${firstName} ${lastName}`;
      spanEmail.className = `email`;
      spanEmail.innerHTML = `${data[i].email}`;
      divStudent.appendChild(img);
      divStudent.appendChild(h3);
      divStudent.appendChild(spanEmail);
      divJoined.className = `joined-details`;
      spanDate.className = `date`;
      spanDate.innerHTML = `Joined ${data[i].registered.date}`
      divJoined.appendChild(spanDate);
      li.appendChild(divStudent);
      li.appendChild(divJoined);
      studentList.appendChild(li);
   }

 }
}
showPage(data, 2)

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
