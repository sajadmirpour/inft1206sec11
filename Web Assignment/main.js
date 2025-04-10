// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

showHideBtn.onclick = function() {
  let expanded = showHideBtn.getAttribute('aria-expanded') === 'true';
  
  if(!expanded) {
    showHideBtn.textContent = 'Hide comments';
    showHideBtn.setAttribute('aria-expanded', 'true');
    commentWrapper.hidden = false;
  } else {
    showHideBtn.textContent = 'Show comments';
    showHideBtn.setAttribute('aria-expanded', 'false');
    commentWrapper.hidden = true;
  }
};


// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

 // Announce to screen readers that a comment was added
 const announcement = document.createElement('div');
 announcement.setAttribute('aria-live', 'polite');
 announcement.setAttribute('role', 'status');
 announcement.style.position = 'absolute';
 announcement.style.clip = 'rect(0 0 0 0)';
 announcement.textContent = 'Comment added successfully';
 document.body.appendChild(announcement);
 
 setTimeout(() => {
   document.body.removeChild(announcement);
 }, 1000);
}

