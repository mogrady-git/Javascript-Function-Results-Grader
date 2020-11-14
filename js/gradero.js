function gradeResult() {
var grade;

var myEnglishResult = parseInt(document.getElementById("value-english").value);
var myIrishResult = parseInt(document.getElementById("value-irish").value);
var myMathsResult = parseInt(document.getElementById("value-maths").value);
var englishGrade, irishGrade, mathsGrade


if (!myEnglishResult)
	alert("English result box left empty");

else if (myEnglishResult >= 90) 
		englishGrade = 'A';
else if (myEnglishResult >= 80) 
		englishGrade = 'B';
else if (myEnglishResult >= 70) 
		englishGrade = 'B-';
else if (myEnglishResult >= 60) 
		englishGrade = 'C';
else if (myEnglishResult >= 50) 
		englishGrade = 'C-';
else if (myEnglishResult >= 40) 
		englishGrade = 'D';
else if (myEnglishResult < 40)
		englishGrade = 'F';

if (!myIrishResult)
	alert("Irish result box left empty");
else if (myIrishResult < 0 || myIrishResult > 100)
	alert("Please enter a valid number between 0 and 100");
else if (myIrishResult >= 90)
		irishGrade = 'A';
else if (myIrishResult >= 80)
		irishGrade = 'B';	
else if (myIrishResult >= 70)
		irishGrade = 'B-';
else if (myIrishResult >= 60)
		irishGrade = 'C';
else if (myIrishResult >= 50)
		irishGrade = 'C-';
else if (myIrishResult >= 40)
		irishGrade = 'D';
else if (myIrishResult < 40)
		irishGrade = 'F';
	
if (!myMathsResult)
	alert("Maths result box left empty");
else if (myMathsResult < 0 || myMathsResult > 100)
	alert("Please enter a valid number between 0 and 100");
else if (myMathsResult >= 90)
		mathsGrade = 'A';
else if (myMathsResult >= 80)
		mathsGrade = 'B';	
else if (myMathsResult >= 70)
		mathsGrade = 'B-';
else if (myMathsResult >= 60)
		mathsGrade = 'C';
else if (myMathsResult >= 50)
		mathsGrade = 'C-';
else if (myMathsResult >= 40)
		mathsGrade = 'D';
else if (myMathsResult < 40)
		mathsGrade = 'F';
	
	
		var message1 = 'You got a ' + englishGrade + ' in English !';
		var message2 = 'You got a ' + irishGrade + ' in Irish !';
		var message3 = 'You got a ' + mathsGrade + ' in Maths !';
		
		
		
		console.log(message1);
		document.getElementById("myEnglishResultSentence").innerHTML = message1;
		document.getElementById("myIrishResultSentence").innerHTML = message2;
		document.getElementById("myMathsResultSentence").innerHTML = message3;
		
		console.log(message2);
		document.getElementById("myEnglishResultSentence").innerHTML = message1;
		document.getElementById("myIrishResultSentence").innerHTML = message2;
		document.getElementById("myMathsResultSentence").innerHTML = message3;
		
		console.log(message3);
		document.getElementById("myEnglishResultSentence").innerHTML = message1;
		document.getElementById("myIrishResultSentence").innerHTML = message2;
		document.getElementById("myMathsResultSentence").innerHTML = message3;
	
}
// end of function