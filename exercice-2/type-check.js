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

