function loginValidation()
{
    var uid = document.login.uid;
    var passid = document.login.password;
    if((userid_validation(uid,5,20)))
    {
        if((passid_validation(passid,5,20)))
        {
            
        }
    }
    return false;
}
function userid_validation(uid,mx,my)
{
    uid_len=uid.value.length;
    if(uid_len==0||uid_len>=my||uid_len<mx)
    {
        alert("User Name can't be empty/ length should be between 5 to 20")
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
        alert("Password can't be empty/ length should be between 5 to 20")
        passid.focus();
        return false;
    }
    else
    {
        alert("Login Successfull");
        //window.location.reload();
        window.location.href="#";
        return true;
    }
    
}
