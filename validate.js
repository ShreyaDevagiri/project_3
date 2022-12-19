function formValidation()
{
    var uname= document.registration.uname;
    var uid= document.registration.uid;
    var passid= document.registration.password;
    var ucountry= document.registration.country;
    var uemail= document.registration.email;
    var phone= document.registration.phone;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;  
    if(allLetter(uname))
    {
        if(userid_validation(uid,5,20))
        {
            if(passid_validation(passid,5,20))
            {
                if(countryselect(ucountry))
                {
                    if(validatemail(uemail))
                    {
                        if(phonenumber(phone))
                        {
                            if(validsex(umsex,ufsex))
                            {
                                
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function allLetter(uname)
{
    var letters=/^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Username must have alphabet characters only");
        uname.focus();
        return false;
    }
}
function userid_validation(uid,mx,my)
{
    uid_len=uid.value.length;
    if(uid_len==0||uid_len>=my||uid_len<mx)
    {
        alert("User Id should not be empty / length be between" +mx+ "to" +my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid,mx,my)
{
    passid_len=passid.value.length;
    if(passid_len==0||passid_len>=my||passid_len<mx)
    {
        alert("Password should not be empty / length be between " +mx+ "to" +my);
        passid.focus();
        return false;
    }
    return true;
}
function countryselect(ucountry)
{
    if(ucountry.value=="Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    return true;
}
function validatemail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
  }
}
function phonenumber(inputtxt) 
{
    var phoneno = /^\d{10}$/;
    if ((inputtxt.value.match(phoneno)))
     {
      return true;
    }
    else {
      alert("Enter a valid 10 digit phone number");
      phone.focus();
      return false;
    }
  }
  function validsex(umsex, ufsex) {
    x = 0;
  
    if (umsex.checked) {
      x++;
    } if (ufsex.checked) {
      x++;
    }
    if (x == 0) {
      alert('Select Male/Female');
      umsex.focus();
      return false;
    }
    else {
      alert('Form Succesfully Submitted');
      //window.location.reload()
      window.location.href = "http://programminghead.com";
      alert("WELCOME")
      return true;
    }
  }