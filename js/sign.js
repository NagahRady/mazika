   var password=document.getElementById("password"),
       confirmpassword=document.getElementById("confirmpassword"),
       email=document.getElementById("email"),
       confirmemail=document.getElementById("confirmemail"),
       fname=document.getElementById("fname"),
       lname=document.getElementById("lname"),
       user=document.getElementById("user");

       


                $(".sign").submit(function(e){
                         if(fname.value.length<"3")
            {
                e.preventDefault();
                      alert("الاسم الاول اقل من 3 احرف");            }  
                       else if(lname.value.length<"3")
            {
                e.preventDefault();
               alert("الاسم الاخير اقل من 3 احرف");
            }  
                       else if(user.value.length<"6")
            {
                e.preventDefault();
                alert("اسم المستخدم اقل من 6 احرف");
            }     	
             
            else if(password.value!==confirmpassword.value)
            {
                e.preventDefault();
                alert("الرقم السري غير متطابق");
            }
             else if(email.value!==confirmemail.value)
            {
                e.preventDefault();
                alert("الايميل غير متطابق");
            } 
           else if(password.value.length<"10")
            {
                e.preventDefault();
                alert("الرقم السري يجي ان يحتوي علي 10 ارقام");
            }   

        
    });
