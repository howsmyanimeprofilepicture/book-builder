function createPosts(){
  const iframeElement = document.createElement('iframe');
  iframeElement.id = '_posts';
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
document.getElementById('_posts').frameBorder =0 ;
document.getElementById('_posts').src = parsedURL ? `./_posts/${parsedURL}.html` : './_posts/main.html' ;

let sectionElem = document.getElementById('side-bar').getElementsByTagName('section')[0]

document.getElementById('appbar')
.getElementsByTagName('details')[0]
.getElementsByTagName('div')[0].innerHTML = sectionElem.innerHTML;
//side-bar엘리먼트에 있는 애들 다 앱바에도 복사해주는 코드임ㅎ

function onClick (e) {
  e.preventDefault();

  const dirName = e.target.parentElement.getElementsByTagName('summary')[0].innerText
  const parentDirName = e.target.parentElement.parentElement.getElementsByTagName('summary')[0].innerText

  const _postsName = e.target.innerHTML;
  //console.log(_postsName, '_postsName')
  if ( document.getElementById('_posts') ) document.getElementById('_posts').remove();
  const newElem = document.createElement('iframe')
  newElem.id = '_posts'
  newElem.src = `./_posts/${parentDirName}/${dirName}/${_postsName}.html`
  newElem.frameBorder = 0;
  document.getElementsByTagName('body')[0]
  .appendChild(newElem)
  
  
  
  history.pushState(
    null, 
    null, 
    `?q=${parentDirName}/${dirName}/${_postsName}`,
  );
  // document.getElementById('folding').click();
}

  const linkList = document.getElementsByClassName('_postsLink')
  for (item of linkList){
    item.addEventListener('click', onClick)
  }
