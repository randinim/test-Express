const url = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest()

xhr.open('GET',url,true);

xhr.onreadystatechange = function(){
    if(xhr.readyState===4 && xhr.status===200){
        console.log(JSON.parse(xhr.responseText));
    }
    if(xhr.readyState===4 && xhr.status!==200){
        console.log(xhr.responseText)
    }
};
xhr.send();