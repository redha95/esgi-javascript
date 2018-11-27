
function ucfirst(helloworld){
   
   return helloworld.charAt(0).toUpperCase() + helloworld.slice(1);
    
}

function capitalize(text){
   // 
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
return text;
}

function camelCase(text) {
  
    text = text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    text = text.replace(/\s+/g, '');

return text;

}

function snake_case(str){
    //var str = 'hello world !';
    str = str.replace(/\s+/g, '_');
    return str;
}

function leet(anaconda){ 
    

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
    return anaconda;
}


