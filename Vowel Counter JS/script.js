var userInput = prompt("Enter a Sentence : ");

var vowels = ["a", "e", "i", "o", "u"];

var words = userInput.toLowerCase().split("");

var vowelCount = 0;
var a_counter = 0;
var e_counter = 0;
var i_counter = 0;
var o_counter = 0;
var u_counter = 0;

if (!userInput) {
    alert("Please enter a sentence.");
} else {
    for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
        if (words[i] === vowels[j]) {
        vowelCount++;
        if (words[i] === "a") {
            a_counter++;
        } else if (words[i] === "e") {
            e_counter++;
        } else if (words[i] === "i") {
            i_counter++;
        } else if (words[i] === "o") {
            o_counter++;
        } else if (words[i] === "u") {
            u_counter++;
        }
        break;
        }
    }
    }
}
alert(
    "Number of vowels in (" +
    userInput +
    ") is : " +
    vowelCount +
    "\n" +
    "\n" +
    "<==Summary==>" +
    "\n" +
    "Number of a : " +
    a_counter +
    "\n" +
    "Number of e : " +
    e_counter +
    "\n" +
    "Number of i : " +
    i_counter +
    "\n" +
    "Number of o : " +
    o_counter +
    "\n" +
    "Number of u : " +
    u_counter
);
