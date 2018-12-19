
String.prototype.ucfirst = function(){
   
   return this.charAt(0).toUpperCase() + this.slice(1);
    
}

String.prototype.capitalize = function(){
   // 
this.valueOf = this.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
return this.valueOf;
}

String.prototype.camelCase = function() {
  
    this.valueOf = this.valueOf.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    this.valueOf = this.valueOf.replace(/\s+/g, '');

return this.valueOf;

}

String.prototype.snake_case = function(str){
    //var str = 'hello world !';
    str = str.replace(/\s+/g, '_');
    return str;
}

String.prototype.leet = function(anaconda){ 
    

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


