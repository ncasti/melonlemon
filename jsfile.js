function areAnagrams() {
	var s1 = document.getElementById("input1").value;
	var s2 = document.getElementById("input2").value;
	
	var isAnagram = function(string1, string2) {
		var orderedLetters = function(str) {
			var array = str.replace(/\s/g, '');.split('').sort();
			return array;
		};
		var arr1 = orderedLetters(string1)
		var arr2 = orderedLetters(string2)
		if (arr1.length != arr2.length) {return false;}
		for (var i=0; i<arr1.length; i++) {
			if(arr1[i] != arr2[i]) {return false;}
		}
		return true;
	};
// Used the internet to review regular expressions.
// Things to make this even better: check if input has only spaces, or spaces before and after the word. This could be done with regular expressions or with a for loop. Additionally, program could use an API that checks whether words submitted actually exist. The input could also accept symbols like puntuation and explanation marks and simply ignore them.
// The following if/else statments check: (1) if inputs are empty; (2) if inputs are the same to begin with; (3) if non-alphabetic characters other than the space are submitted; (4) if inputs are anagrams; (5) if they're not.
	if(s1.length === 0 || s2.length === 0){
	document.getElementById("result").innerHTML = "Hey! Remember to type in one word or phrase in each text field before submitting.";
	document.getElementById("changeImage").src = "http://s24.postimg.org/6lajft16d/nosmile.jpg";
	} else if (s1 == s2) {
	document.getElementById("result").innerHTML = "The words need to be different in order to be anagrams of each other. Try again.";
	document.getElementById("changeImage").src = "http://s24.postimg.org/6lajft16d/nosmile.jpg";
	}
	else if (!/^[a-zA-Z ]+$/.test(s1) || !/^[a-zA-Z ]+$/.test(s2)){
	document.getElementById("result").innerHTML = "Oops! Only alphabetic characters are allowed. Please try again.";
	document.getElementById("changeImage").src = "http://s21.postimg.org/oscwtfh53/error.jpg";
	}
	else if (isAnagram(s1,s2)){
	document.getElementById("result").innerHTML = "Yay! The two words are anagrams of each other.";
	document.getElementById("changeImage").src = "http://s11.postimg.org/e99xsslxf/areanagrams.jpg";
	} else {
	document.getElementById("result").innerHTML = "Oh no! The two words are not anagrams of each other."
	document.getElementById("changeImage").src = "http://s3.postimg.org/rrpiegdgj/notanagram.jpg";
	};
}
//enable enter
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        areAnagrams();
    }
}
