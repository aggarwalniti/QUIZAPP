
var q1="";
var q2="";
var q3="";
var q4="";
var q5="";
var userInput=[];

function login(){
    username=document.getElementById("user_name").value;
  
    if(username.length==0)
    {   
        window.alert("Enter the Name");
    }
    else{
        localStorage.setItem("login" , username);
        window.location="options.html";
 
    }
}
function coding(){
    window.location.replace("coding-test.html")
}
function math(){
    window.location.replace("math-test.html")
}


function logout()
{
    window.location="login.html";
}

function back()
{
    window.location="options.html";

}
function reload()
{
    window.location.reload();
}




function submitAnswers(){
    var total=5;
    var score=0;
    var j=0;
    var k=0;
    var a=[];
    /* Get user Input*/
    q1 = document.forms['quiz']['q1'].value;
    q2 = document.forms['quiz']['q2'].value;
    q3 = document.forms['quiz']['q3'].value;
    q4 = document.forms['quiz']['q4'].value;
    q5 = document.forms['quiz']['q5'].value;

    var a= [q1,q2,q3,q4,q5];
       // Validation
    for(i=0; i < a.length; i++){
        j=i+1;
       if(a[i]==''){
          
      alert('You missed Question '+j);
      return false;
    }}    

    // Set Correct Answers
    var answers=["c","c","a","b","d"];

    // Check Answers
    for(i=0; i < a.length; i++){
      j=i+1,
      k="ans"+j

    if(a[i] == answers[i]){
       
     score++;
      document.getElementById(k).style.color="Green";
      document.getElementById(k).innerHTML= "The Correct Answer is :&quot;"+ answers[i]+ "&quot;"; 
      
    }
    else{
        document.getElementById(k).style.color="red";
        document.getElementById(k).innerHTML= "Wrong!! The Correct answer is &quot;"+ answers[i]+"&quot;"; 
    }
}
    
    //Display Results
    document.getElementById('results').innerHTML ='<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'
    return false;
  }
  
