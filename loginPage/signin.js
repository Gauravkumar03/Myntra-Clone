document.querySelector("#form").addEventListener("submit",submit)


var userDetails=[{otp:"12345"}]

function submit()
{
    event.preventDefault()
       var loginObj={
        userId: form.tel.value,
        userPaswd: form.pswd.value
        }
        userDetails.push(loginObj)
        localStorage.setItem("userNum",JSON.stringify(userDetails))

        if(userDetails.userId=="" || userDetails.userPaswd=="")
        {
            var errormsg = document.createElement("p")
            errormsg.innerText = "Please enter userid and password"

            errormsg.append()
        }
    window.location.href="index.html"
}