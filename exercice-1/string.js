//var helloworld = "hello world";
function ucfirst(helloworld){
   
    console.log(helloworld.charAt(0).toUpperCase() + helloworld.slice(1));
    
}
ucfirst(helloworld);

function capitalize(text){
   // var text = "hello world";
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
console.log(text);
}
capitalize(text);

function camelCase(text) {
   // var text = "hello world";
    text = text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    text = text.replace(/\s+/g, '');

console.log(text);

}
camelCase(text);
 
 console.log(camelCase("hello world"));

function snake_case(str){
    //var str = 'hello world !';
    str = str.replace(/\s+/g, '_');
    console.log(str);
}
snake_case(str);

var anaconda = "anaconda";
function leet(anaconda){ // ne marche pas
    

    var spt = anaconda.split('');
   

    for(i=0;i<spt.length;i++){

        switch(spt[i]){
            case "a":
            var regex = /a/gi;
            anaconda = anaconda.replace(regex,"4");
            break;
            case "e":
            var regex = /e/gi;
            anaconda = anaconda.replace(regex,"3");
            break;
            case "i":
            var regex = /i/gi;
            anaconda = anaconda.replace(regex,"1");
            break;
            case "o":
            var regex = /o/gi;
            anaconda = anaconda.replace(regex,"0");
            break;
            case "u":
            var regex = /u/gi;
            anaconda = anaconda.replace(regex,"_");
            break;
            case "y":
            var regex = /y/gi;
            anaconda = anaconda.replace(regex,"7");
            break;
        }
        
    }
    console.log(anaconda);
}
leet(anaconda);

function prop_access(objet,chemin){

    [
        {
            "animals":[
            {
                "type":{
                    "name": "dog"
                }
            },
            {
                "type":{
                    "name": "cat"
                }
            }
           ]
        }
    ]

}

