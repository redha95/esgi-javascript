function type_check_v1(arg1,arg2){

    if(Array.isArray([arg1]) == true){
        if(arg2 != "array"){
            return false
        } else {
            return false;
        }
        
    }
    else if(typeof arg1 == "object" && arg2 == "null"){
        return true;
    }
    else if(typeof arg1 == arg2){
        return true;
    }
  return false;
};

