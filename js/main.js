var users;
var fname=document.getElementById("uName");
var femail= document.getElementById("uEmail");
var fpass=document.getElementById("uPass");
var inEmail=document.getElementById("emailId");
var inPass=document.getElementById("passId");

var ma5zan=[];


if (localStorage.getItem("allUsers")!= null)
{
    ma5zan=JSON.parse(localStorage.getItem("allUsers"));
}
/*sign up */
function addUser()
{
    /*------------------1-save users */
    users={
        userName: fname.value,
        userEmail:femail.value,
        userPass: fpass.value
    }
     /*---------------2-check if values is null */
    if(users.userName=="" || users.userEmail=="" ||users.userPass=="")
    {
        document.getElementById("success").innerHTML="<p class='fs-5 text-danger'>All inputs is required</p>";
    }
    /*---------------3-check if values is not  null and email not exist */
    if(users.userName!="" && users.userEmail!="" && users.userPass!="" )
    {
        if(alreadyExist( )!=true)
        {
            ma5zan.push(users);
            document.getElementById("success").innerHTML="<p class='fs-5 text-success'>success</p>";
            localStorage.setItem("allUsers",JSON.stringify( ma5zan));
        }
        else{
            alreadyExist( );
        }
    }
}
/*-----------------------is email exist  */
function  alreadyExist( ){
    for(var i=0;i<ma5zan.length;i++)
    {
        if(ma5zan[i].userEmail==femail.value)
        {
            document.getElementById("success").innerHTML="<p class='fs-5 text-danger'>email already exists</p>";
            return true;
        }
    }

}


/*sign in  */

function signIn(){

    if(inEmail.value == "" ||inPass.value == "" )
    {
        document.getElementById("forAlerts").innerHTML="<p class='fs-5 text-danger'>All inputs is required</p>";
    }

    for(var i=0 ; i<ma5zan.length;i++)
    {   
        if(inEmail.value != "" && inPass.value != ""){
            if(inEmail.value != ma5zan[i].userEmail && inPass.value != ma5zan[i].userPass )
            {
                document.getElementById("forAlerts").innerHTML="<p class='fs-5 text-danger'>incorrect email or password</p>";
            };
        }
    }

    for(var i=0 ; i<ma5zan.length;i++)
    {   if(inEmail.value != "" && inPass.value != ""){
            if(inEmail.value == ma5zan[i].userEmail && inPass.value == ma5zan[i].userPass )
            {
                localStorage.setItem("names",ma5zan[i].userName);
                document.getElementById("loginWel").setAttribute("href","home.html");
                welcome();
            };
        }
        // else if(inEmail.value != "" && inPass.value != ""){
        //     if(inEmail.value != ma5zan[i].userEmail && inPass.value != ma5zan[i].userPass )
        //     {
        //         document.getElementById("forAlerts").innerHTML="<p class='fs-5 text-danger'>incorrect email or password</p>";
        //     }
        // }
    }
}

/*----------------------say hello */
var namess=document.getElementById("nameOfUser");
namess.innerHTML=localStorage.getItem("names");


/*---------------------log out */
function out()
{
    document.getElementById("logOut").setAttribute("href","index.html")
}

