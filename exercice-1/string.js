


function ucfirst(){
    var helloworld = "hello world";
    console.log(helloworld.charAt(0).toUpperCase() + helloworld.slice(1));
    
}
ucfirst();

function capitalize(){
    var text = "hello world";
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
console.log(text);
}
capitalize();

function snake_case(){
    var str = 'hello world !';
    str = str.replace(/\s+/g, '_');
    console.log(str);
}
snake_case();

function leet(){


}
leet();