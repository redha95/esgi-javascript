function type_check_v1(arg1,arg2){

    if(Array.isArray(arg1) === true){
        if( arg2 == "array"){
            return true;
        }
        return false;
    }
    else if(typeof arg1 == "object"){
        if(arg1 == null && arg2 == "null"){
            return true;
        } else if(arg2 == "object" && arg1 != null){
            return true;
        }
        return false;
    }
    else if(typeof arg1 == arg2){
        return true;
    }
  return false;
};

function type_check_v2(arg1,objet){

   if(arg1 == objet.value){
       if(Array.isArray(arg1) === true){
        if( objet.type == "array"){
            return true;
        }
        return false;
    }
    else if(typeof arg1 == "object"){
        if(objet.type == null && objet.type == "null"){
            return true;
        } else if(objet.type == "object" && arg1 != null){
            return true;
        }
        return false;
    }
    else if(typeof arg1 == objet.type){
        return true;
    }
   }
   return false;
};
