function areAnagrams() {
	var s1 = document.getElementById("input1").value;
	var s2 = document.getElementById("input2").value;
	
	var isAnagram = function(string1, string2) {
		var orderedLetters = function(str) {
			var array = str.replace(/[^a-zA-Z]+/g, '').split('').sort();
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
	if(s1.length === 0 || s2.length === 0){
	document.getElementById("result").innerHTML = "Hey! Remember to type in one word or phrase in each text field before submitting.";
	document.getElementById("changeImage").src = "http://s24.postimg.org/6lajft16d/nosmile.jpg";
	} else if (s1 == s2) {
	document.getElementById("result").innerHTML = "The words or phrases need to be different in order to be anagrams of each other. Try again.";
	document.getElementById("changeImage").src = "http://s24.postimg.org/6lajft16d/nosmile.jpg";
	}
	else if (!/^[a-zA-Z ]+$/.test(s1) || !/^[a-zA-Z ]+$/.test(s2)){
		document.getElementById("result").innerHTML = "Oops! Only alphabetic characters are allowed. Please try again.";
		document.getElementById("changeImage").src = "http://s21.postimg.org/oscwtfh53/error.jpg";
	}
	else if (isAnagram(s1,s2)){
	document.getElementById("result").innerHTML = "Yay! They are anagrams of each other.";
	document.getElementById("changeImage").src = "http://s11.postimg.org/e99xsslxf/areanagrams.jpg";
	} else {
	document.getElementById("result").innerHTML = "Oh no! They are not anagrams of each other."
	document.getElementById("changeImage").src = "http://s3.postimg.org/rrpiegdgj/notanagram.jpg";
	};
}
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        areAnagrams();
    }
}
