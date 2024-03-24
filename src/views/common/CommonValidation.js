/**
 * Check Number Between Two Value
 *
 * @param number, check value1, check value2
 * @reutrn True (valid) | False (not valid)
 */
export const validateEmail = (email) => {
    var re = /^(([^<>()[\]{}\\.,;:\s@$%#!*&*"^_]+(\.[^<>()[\]{}\\.,;:\s@$%#&!*"^_]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/**
 * Check null or blank
 *
 * @param num
 * @reutrn True (has value) | False (null or blank)
 */
export function checkNullOrBlank(value) {
    if (value == '' || value == null) {
        return false;
    }
    return true;
}

/**
  * Test empty or not
  *
  * @param value
  * @reutrn boolean
  * @author
  * @date 2021-02-10
  */
 export const isEmpty = (val) =>{
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

 /**
  * Validate Integer Only
  *
  * @param num
  * @reutrn True (valid) | False (not valid)
  */
  export const validateIntegerOnly = (num)=>{
    var re = /^(\s*|\d+)$/;
    return re.test(num);
}

/**
 * Explanation or Description of this method
 *
 * @author
 * @create date
 * @param name
 * @return true(valid) || false(invalid)
 *
 */
 export const validateName = (name) =>{

    let namechk = /^[a-z ,.'-]+$/i;
    if(name.match(namechk)){
        return true;
    }else return false;

}

 /**
 * Explanation or Description of this method
 *
 * @author
 * @create date
 * @param string
 * @return true(not null) || false(null)
 *
 */
export const nullChk = (i) =>{
    if(i === null || i === "" || i.length <= 0) {
        return false;
    }else return true;
}


 /**
 * Explanation or Description of this method
 *
 * @author
 * @create date
 * @param email
 * @return true(valid) || false(invalid)
 *
 */
let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const emailChk = (email) => {
    if(email.match(emailFormat)){
        return true;
    }
    else return false;
}

 /**
 * Explanation or Description of this method
 *
 * @author
 * @create date
 * @param num
 * @return true(valid) || false(invalid)
 *
 */
let numberFormat=/^[0-9]+$/;
export const numberChk = (num) => {
    if(num.match(numberFormat) || num == ""){
        return true;
    }else return false;
}




export const validatePwd = (pwd) => {
    // const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,1000}$/;
    const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^~])([a-zA-Z0-9@$!%*#?&^~]{8,1000})$/;
    if(reg.test(pwd)) {
        return true;
    }else{
        return false;
    }
}

export const validateNRC = (nrc) => {
	var re = /^[0-9\u1040-\u1049]{0,2}\/[a-zA-Z\u101E\u1000-\u1021]{0,9}\([a-zA-Z\u1014][\u102D]{0,1}[\u102F]{0,1}[\u1004]{0,1}[\u103A]{0,1}\)[0-9\u1040-\u1049]{0,6}/g;
    return re.test(nrc);
}

/**
  * Validation white space
  *
  * @param value
  * @reutrn
  */
 export const validationWhiteSpace = (str) =>{
    if(!str) return str;
  return str.replace(/^\s+/g, '');
}
export const checkPassword = (str) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(str);
}
