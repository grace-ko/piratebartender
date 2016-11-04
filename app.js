
var pirateBartender = [
  { question: "Do ye like yer drinks strong?",
    type: "strong",
    ingredient: ["glug of rum", "slug of whisky", "splash of gin"]
  },
  { question: "Do ye like it with a salty tang?",
    type: "salty",
    ingredient: ["olive on a stick", "salt-dusted rim", "rasher of bacon"]
    },
  { question: "Are ye a lubber who likes it bitter?", 
    type: "bitter",
    ingredient: ["Shake of bitters", "splash of tonic", "twist of lemon peel"]
  },
  { question: "Would ye like a bit of sweetness with yer poison?",
    type: "sweet",
    ingredient: ["sugar cube", "spoonful of honey", "splash of cola"]
  },
  { question: "Are ye one for a fruity finish?",
    type: "fruity",
    ingredient: ["slice of orange", "dash of cassis", "cherry on top"]
  }
];

$(function(){
  $('.drinksResult').hide();
  var chooseIngredients = "";
 
  for (var i = 0; i < pirateBartender.length; i++) {
    $('.questions').append('<p>' + pirateBartender[i].question +'</p>' + 
      "Aye!" + '<input type = "radio" name = "' + pirateBartender[i].type + '" value = "yes">' +
      "No" + '<input type = "radio" name = "' + pirateBartender[i].type + '" value = "no">' 
    );
  }
    $('button').click(function() {
      $('.drinksResult').show();
      $('.questions').hide();
      $('button').hide();
      for (var i = 0; i < pirateBartender.length; i++) {
        if ($('input[name="' + pirateBartender[i].type + '"]:checked').val() == "yes") {
          chooseIngredients+= '<p>' + pirateBartender[i].ingredient[randomIngredient(2, 0)] + '</p>';  
        }
      }
      $('.drinksResult').append('<p>' + "The ingredients for yer drinks:" + '</p>' + chooseIngredients);
    });  

  var randomIngredient = function(maximum, minimum) {
    return (Math.floor(Math.random() * (maximum - minimum + 1)));
  }

});
  
  



