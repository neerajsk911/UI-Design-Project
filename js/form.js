function validate()
{
	var text1=document.getElementById("username");
	var text2=document.getElementById("pswrd");
	if(text1.value=="19238" && text2.value=="UI")
	{
		alert("Authentication Success");
		load("dashboard.html");
	}
	else{
		alert("Refer to the Placeholder text and type the Username and Password Accordingly");
		load("index.html");
	}
}
function load(url)
{
	location.href=url;
}