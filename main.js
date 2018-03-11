function submitForm(){
	var firstname=document.getElementById("firstname-box").value;
	var lastname=document.getElementById("lastname-box").value;
	var age=document.getElementById("age-box").value;

// check if any fields are empty cosole.log("Please fill up the form");
    
/*  if(firstname==""){
    console.log ("Please fill up the form");
    }
    
   if(lastname==""){
    console.log ("Please fill up the form");
    }

    if(age==""){
    console.log ("Please fill up the form");
  }	
 */
 
/*  if((firstname=="")|| (lastname=="") || (age==""))
    console.log( "Please fill up the form" );
  
*/
  
  
 // fill up all the form is empty
  
//   if((firstname=="")&& (lastname=="") && (age==""))
//     console.log( "Please fill up the form" );
  

 //Any first name and lastname to be fill. Age fill needs to be fill
    if ((firstname==""||lastname=="")&& age=="")
    console.log( "Please fill up the form" );
  
  
  
// if statement (age) 
    
  if (age<18){
		console.log("GoStudy");
	}
	else if(age<=40){
		console.log ("Go to Work!");

	}else{
		console.log ("Welcome");
	}
 
//  alert("Thank you,  "+ firstname +" "+lastname);


}