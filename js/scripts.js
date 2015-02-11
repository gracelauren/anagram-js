var isAnagram = function(word, string) {
  var wordParts = word.split("").sort();
  var possibleAnagrams = string.split(" ");
  var areAnagrams = "";
  var isAnagramWord ="";

  possibleAnagrams.forEach(function(anagramWord) {
    var anagramWord = anagramWord;
    var testWord = anagramWord.split("").sort();
    if (testWord.length === wordParts.length) {
      for(var c = 0; c < wordParts.length; c++) {
        for (var i = 0; i < testWord.length; i++) {
          if (testWord[i] === wordParts[c]) {
            isAnagramWord = anagramWord;
          }
        }
      }
    }
    areAnagrams = areAnagrams + isAnagramWord + " ";
  });

  areAnagrams = areAnagrams.slice(0, areAnagrams.length - 1);
  return areAnagrams;
};

// $(document).ready(function() {
//   $('#fancy-inputs input[type="text"]').blur(function(){
//     if($(this).val().length > 0){
//       $(this).addClass('white');
//     } else {
//       $(this).removeClass('white');
//     }
//   });
//   $("form#comparearray").submit(function(event) {
//     var array = ($("input#array").val()).split(" ");
//     var result = titleCase(array);
//
//     $(".array").text(result);
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
