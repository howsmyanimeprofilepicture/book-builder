function createPosts(){
  const iframeElement = document.createElement('iframe');
  iframeElement.id = 'posts';
  iframeElement.src = `./main`;
  iframeElement.frameBorder = 0;
  
  return iframeElement;
}

function createParsedURL(){
  let parsedURL = location.href;
  parsedURL = parsedURL.split('?').pop().split('=').pop();
  if (parsedURL.startsWith('http') ||parsedURL.startsWith('file') ) return null; 
  
  
  return parsedURL;
}

const iframeElement = createPosts();
const parsedURL = createParsedURL();
document.getElementsByTagName('body')[0].appendChild(iframeElement);

console.log(parsedURL);
document.getElementById('posts').frameBorder =0 ;
document.getElementById('posts').src = parsedURL ? `./posts/${parsedURL}.html` : './posts/main.html' ;

let sectionElem = document.getElementById('side-bar').getElementsByTagName('section')[0]

document.getElementById('appbar')
.getElementsByTagName('details')[0]
.getElementsByTagName('div')[0].innerHTML = sectionElem.innerHTML;
//side-bar엘리먼트에 있는 애들 다 앱바에도 복사해주는 코드임ㅎ

function onClick (e) {
  e.preventDefault();

  const dirName = e.target.parentElement.getElementsByTagName('summary')[0].innerText
  const parentDirName = e.target.parentElement.parentElement.getElementsByTagName('summary')[0].innerText

  const postsName = e.target.innerHTML;
  //console.log(postsName, 'postsName')
  if ( document.getElementById('posts') ) document.getElementById('posts').remove();
  const newElem = document.createElement('iframe')
  newElem.id = 'posts'
  newElem.src = `./posts/${parentDirName}/${dirName}/${postsName}.html`
  newElem.frameBorder = 0;
  document.getElementsByTagName('body')[0]
  .appendChild(newElem)
  
  
  
  history.pushState(
    null, 
    null, 
    `?q=${parentDirName}/${dirName}/${postsName}`,
  );
  // document.getElementById('folding').click();
}

  const linkList = document.getElementsByClassName('postsLink')
  for (item of linkList){
    item.addEventListener('click', onClick)
  }
