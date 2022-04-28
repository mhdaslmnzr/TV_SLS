var subheadings = [
  "• US Politics",
  "• Impeachment",
  "• Global News",
  "• Global Markets & Economy"
];
var news = [
  ["• Biden kills 5000 jobs by canceling the border wall construction",
  "• US pauses arms sales",
  "• Wyoming sues Biden Govt",
  "• McCabe Aware of Exculpatory Evidence",
  "• End of US Politics"],
  ["• DHS sees a heightened threat",
  "• US pauses arms sales",
  "• Wyoming sues Biden Govt.",
  "• McCabe Aware of Exculpatory Evidence",
  "• End of Impeachment"],
  ["• India to send soldiers to Russia for S-400 training",
  "• US pauses arms sales",
  "• Wyoming sues Biden Govt.",
  "• McCabe Aware of Exculpatory Evidence",
  "• End of Global News"],
  ["• All indices down by at least 2.6%",
  "• US pauses arms sales",
  "• Wyoming sues Biden Govt.",
  "• McCabe Aware of Exculpatory Evidence",
  "• End of Global Markets"]
];

for (i = 0; i < subheadings.length; i++) {
  $("#newsTicker p").append(
    "<span class='section'; style='color:#E8F9C5'>" + subheadings[i] + "</span>"
  );

for (j = 0; j < news[i].length; j++) {
  $("#newsTicker p").append(
    
    "<span class='story'>"  + news[i][j] + "</span>"
  );
}
}


// var dt = new Date();
// document.getElementById('date-time').innerHTML=dt;