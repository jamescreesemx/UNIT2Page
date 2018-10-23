/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//my variables to target DOM elements
  const studentList = document.querySelectorAll("student-list")[0];
  const studItem = document.getElementsByClassName("student-item cf");
  const divHead= document.querySelector("page-header");
  const divPage = document.getElementsByClassName("page")[0];
  const totalPages = Math.ceil(studItem.length/10);
  const input = document.createElement('input');
  let page1= 1;

  let linkList = 'null';

//Function to determine which group of list items to show

function showPage(whichPage){
  for( let i=0; i< studItem.length; i++){
  studItem[i].style.display = 'none';
        }
          let page = whichPage-1;
          let pageStart = page* 10;
          let lastPage= whichPage* 10;
          for(let i =0; i<studItem.length; i++){

      if(i>= pageStart && i< lastPage){
        studItem[i].style.display = 'block';

      }

  }
}

//function to add links links and list items to the bottom of each page

function pagLinks(numbers){
let divPagin= document.createElement('div');
  let divUl = document.createElement('ul');
            divPagin.className= 'pagination';
      divPage.appendChild(divPagin);
divPagin.appendChild(divUl);
    for(let i=0; i< numbers; i++ ){

        let  liPage = document.createElement('li');
        let  anchor =document.createElement('a');
        anchor.textContent= i + 1;
        liPage.appendChild(anchor);
        divUl.appendChild(liPage);

      if(anchor.textContent == page1){
              anchor.className += 'active';
                //adds the classname 'active' as it goes down through the array of students
          } else {
              anchor.className = '';
          }
        }
}
    //this is the function that shows the designated list of students associated with each page
        document.addEventListener('click', (e)=>{
            if(event.target.tagName == 'A'){
                if(event.target.className != 'active'){

                  let anchorLink = document.getElementsByClassName('active')[0];
                  anchorLink.className = '';
                  event.target.className = 'active';
                  let anchorLinkContent =document.querySelectorAll('.active')[0].textContent;
                  showPage(anchorLinkContent);

                }


              }

        });


//calls my functions
        showPage(page1);
        pagLinks(totalPages);
