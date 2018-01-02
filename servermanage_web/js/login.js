function home()
		{
			x=document.getElementById("username");
			y=document.getElementById("password");
			
			if(x.value=="")
			{
			   alert("username can not be empty");
	                   
			}
			if(y.value=="")
			{
				alert("password can not be empty");
                          
			}
			if(x.value=="admin" && y.value=="admin")
			{
				window.location.href="index.html"
			}

		}