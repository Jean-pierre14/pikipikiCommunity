const username = ''

if(username === undefined || username === ''){
    window.location.href = "../login/"
}else{
    alert('Welcome')
}


// Web Storage
// localStorage
// sessionStorage
// JSON 
// setItem()
// getItem()
// clear() - erase everything
// removeItem( key ) - delete one item
// key( index ) - get the name of one item 

localStorage.setItem('dude', 'Jeffrey Lebowski');
let val = localStorage.getItem('dude');
console.log(val);
let key = 'pacman_highscore';
localStorage.setItem(key, 123123);

let options = {
    "name":"Walter",
    "game":"bowling", 
    "weapons":["uzi", "pistol", "anger"]};
let str = JSON.stringify(options);

localStorage.setItem("TheDude", str);

let original = localStorage.getItem("TheDude");

console.log(original);
let obj = JSON.parse(original); 
console.log(obj);
console.log(obj.weapons[2]);