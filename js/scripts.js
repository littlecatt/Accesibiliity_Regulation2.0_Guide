function toggle_criteria_visibility(event){
	console.log("apply button is clicked, enter function");
  var a_check = document.querySelector("#Level-A-check");
  var aa_check = document.querySelector("#Level-AA-check");
  var aaa_check = document.querySelector("#Level-AAA-check");
  var ins_check = document.querySelector("#inspection-check");
  var eva_check = document.querySelector("#evaluation-check");
  // Level A check
  if (a_check.checked != true){
  	console.log("A is not checked.");
    var content_list = document.querySelectorAll(".accesibility-level-A .div-to-filter-out");
    console.log("length of selected item: " + (content_list.length));
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", true);
      console.log("toggle class");
    }
    var title_list = document.querySelectorAll(".accesibility-level-A h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", true);
    }
  }
  else{
    var content_list = document.querySelectorAll(".accesibility-level-A .div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", false);
    }
    var title_list = document.querySelectorAll(".accesibility-level-A h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", false);
    }
  }
  // Level AA check
  if (aa_check.checked != true){
    // Get all the criteria of level AA
    var content_list = document.querySelectorAll(".accesibility-level-AA .div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", true);
    }
    var title_list = document.querySelectorAll(".accesibility-level-AA h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", true);
    }
  }
  else{
    var content_list = document.querySelectorAll(".accesibility-level-AA .div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", false);
    }
    var title_list = document.querySelectorAll(".accesibility-level-AA h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", false);
    }

  }
  // Level AAA check
  if (aaa_check.checked != true){
    // Get all the criteria of level AAA
    var content_list = document.querySelectorAll(".accesibility-level-AAA .div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", true);
    }
    var title_list = document.querySelectorAll(".accesibility-level-AAA h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", true);
    }
  }
  else{
    var content_list = document.querySelectorAll(".accesibility-level-AAA .div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", false);
    }
    var title_list = document.querySelectorAll(".accesibility-level-AAA h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", false);
    }
  }
  // Inspection check
  if (ins_check.checked != true){
  	console.log("inspection check is not checked");
  	var inspection_list = document.querySelectorAll(".inspection-collapse, .inspection-content");
  	console.log("length of target: " + inspection_list.length);
  	for (var i = 0; i < inspection_list.length; i++){
  		var target = inspection_list[i];
  		target.classList.toggle("filter-out", true);
  	}
  }
  else{
  	var inspection_list = document.querySelectorAll(".inspection-collapse, .inspection-content");
  	for (var i = 0; i < inspection_list.length; i++){
  		var target = inspection_list[i];
  		target.classList.toggle("filter-out", false);
  	}
  }
  // Evaluation check
  if (eva_check.checked != true){
  	var evaluation_list = document.querySelectorAll(".evaluation-collapse, .evaluation-content");
  	for (var i = 0; i < evaluation_list.length; i++){
  		var target = evaluation_list[i];
  		target.classList.toggle("filter-out", true);
  	}
  }
  else{
  	var evaluation_list = document.querySelectorAll(".evaluation-collapse, .evaluation-content");
  	for (var i = 0; i < evaluation_list.length; i++){
  		var target = evaluation_list[i];
  		target.classList.toggle("filter-out", false);
  	}
  }
}
function clearFilter(event){

	console.log("Enter clear function")	
	var a_check = document.querySelector("#Level-A-check");
	var aa_check = document.querySelector("#Level-AA-check");
	var aaa_check = document.querySelector("#Level-AAA-check");
	var ins_check = document.querySelector("#inspection-check"); 
	var eva_check = document.querySelector("#evaluation-check"); 
	// Re-check all the checkboxes
	a_check.checked = true;
	aa_check.checked = true;
	aaa_check.checked = true;
	ins_check.checked = true;
	eva_check.checked = true;
	// Toggle all element back to non-filter class
    var content_list = document.querySelectorAll(".div-to-filter-out");
    for (var i = 0; i < content_list.length; i++){
      var target = content_list[i];
      target.classList.toggle("filter-out", false);
    }
    var title_list = document.querySelectorAll(".criteria-content h4");
    for (var i = 0; i < title_list.length; i++){
      var target = title_list[i];
      target.classList.toggle("filter-out", false);
    }
    var button_list = document.querySelectorAll(".inspection-collapse, .inspection-content,\
    											 .evaluation-collapse, .evaluation-content");
    for (var i = 0; i < button_list.length; i++){
      var target = button_list[i];
      target.classList.toggle("filter-out", false);
    }
}

// Set of evaluation codes and inspection codes: 4 category
var EVs = ["EV1010100", "EV1010101", "EV1010102", "EV1010103", 
           "EV1010104", "EV1010105",  "EV1010200",                  //"EV1010106" this one is skipped accidently,
           "EV1010300", "EV1010400", "EV1010500", "EV1010501", 
           "EV1010600", "EV1010601", "EV1010602", "EV1020100", 
           "EV1020101", "EV1020102", "EV1020200", "EV1020300", 
           "EV1020301", "EV1020302", "EV2020400", "EV2020500", 
           "EV3020600", "EV3020601", "EV3020700", "EV3020800", 
           "EV3020900", "EV3020901", "EV1030100",                   //"EV3020801", 
           "EV1030101", "EV1030102", "EV1030103", "EV1030104", 
           "EV1030105", "EV1030106", "EV1030107", "EV1030108",
           "EV1030110", "EV1030111", "EV1030112",                   //"EV1030113", 
           "EV1030200", "EV1030201", "EV1030202", "EV1030203", 
           "EV1030300", "EV1040100", "EV1040101", "EV1040102", 
           "EV1040200", "EV2040300", "EV2040301", "EV2040302", 
           "EV2040303", "EV2040400", "EV2040401", "EV2040303", 
           "EV2040500", "EV3040600", "EV3040601", "EV3040602", 
           "EV3040700", "EV3040800", "EV3040801", "EV3040802", 
           "EV3040804", "EV3040805", "EV3040806", "EV3040807", 
           "EV3040900" ];
           // "EV1050100", "EV1050101", "EV1050200", 
           // "EV3050300", "EV1060100", "EV1060101", "EV1060200", 
           // "EV1060201", "EV1060202", "EV1060203", "EV1060204", 
           // "EV1060205", "EV3060300", "EV3060400", "EV3060500", 
           // "EV3060501", "EV1070100", "EV1070101", "EV3070200", 
           // "EV1080100", "EV1080101", "EV1080102", "EV1080103", 
           // "EV1080104", "EV1080105", "EV1080200", "EV1080300", 
           // "EV1080301", "EV1080400", "EV1080401", "EV1080402", 
           // "EV1080403", "EV1080404", "EV1080405", "EV1080500", 
           // "EV2080600", "EV2080601", "EV2080700", "EV3080800", 
           // "EV3080900", "EV3080901", "EV3080902", "EV3080904", 
           // "EV3080905", "EV3081000", "EV1090100", "EV2090200", 
           // "EV3090300", "EV3090400", "EV3090500", "EV3090501", 
           // "EV3090502", "EV3090503", "EV3090504", "EV3090600", 
           // "EV1100100", "EV1100200", "EV1100201", "EV1100202", 
           // "EV2100300", "EV2100400", "EV3100500", "EV3100501", 
           // "EV1110100", "EV1110101", "EV1110102", "EV1110200", 
           // "EV1110201", "EV1110202", "EV1110203", "EV1110204", 
           // "EV1110205", "EV1110206", "EV2110300", "EV2110301", 
           // "EV2110400", "EV2110401", "EV2110402", "EV2110403", 
           // "EV3110500", "EV3110501", "EV3110502", "EV3110600", 
           // "EV3110601", "EV3110602", "EV3110603", "EV1120200"];

var XHs = ["XH1010100", "XH1010101", "XH1010102",                     //"XH1010103", 
            "XH1010200", "XH1010600", "XH1030100",                    //"XH1010104",
           "XH1030101", "XH1030102", "XH1030103", "XH1030200", 
           "XH1030100" ];
           // "XH1080102", "XH1080200", "XH1080400", 
           // "XH1080401", "XH3080900", "XH3081000", "XH1090100", 
           // "XH2090200", "XH3110500", "XH1120100", "XH1120100", 
           // "XH1120101"];

var CSs = ["CS2040400", "CS2040401", "CS2040402", "CS3040800", 
           "CS3040801", "CS3040803"];

var MEs = ["ME1100200"];

var id_set = [EVs, XHs, CSs, MEs];

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function search_valid(pattern, id_set){
  console.log("enter search valid");
  // Check validity of user input
  if (pattern.length < 2 || pattern.length > 9 ) return -1;
  if (!isLetter(pattern[0]) || !isLetter(pattern[1])) return -1;
  // Pattern head
  var pat_head = pattern[0]  + pattern[1];
  // Determine category by pattern head
  // And search inside category
  valid_id_set = [];
  var pass_once = false;
  if (pat_head === "EV"){
    var pool = id_set[0];
    for (var idx in pool){
      var test_pattern = pool[idx];
      var pass = true;
      for (var i = 0; i < pattern.length; i++){
        if (pattern[i] != test_pattern[i]){
          pass = false;
        }
      }
      if (pass) {
        valid_id_set.push(test_pattern);
        pass_once = true; 
      }
    }
  }
  else if (pat_head === "XH"){
    var pool = id_set[1];
    for (var idx in pool){
      var test_pattern = pool[idx];
      var pass = true;
      for (var i = 0; i < pattern.length; i++){
        if (pattern[i] != test_pattern[i]){
          pass = false;
        }
      }
      if (pass) {
        valid_id_set.push(test_pattern);
        pass_once = true; 
      }
    }
  }
  else if (pat_head === "CS"){
    var pool = id_set[2];
    for (var idx in pool){
      var test_pattern = pool[idx];
      var pass = true;
      for (var i = 0; i < pattern.length; i++){
        if (pattern[i] != test_pattern[i]){
          pass = false;
        }
      }
      if (pass) {
        valid_id_set.push(test_pattern);
        pass_once = true; 
      }
    }
  }
  else if (pat_head === "ME"){
    var pool = id_set[3];
    for (var idx in pool){
      var test_pattern = pool[idx];
      var pass = true;
      for (var i = 0; i < pattern.length; i++){
        if (pattern[i] != test_pattern[i]){
          pass = false;
        }
      }
      if (pass) {
        valid_id_set.push(test_pattern);
        pass_once = true; 
      }
    }
  }
  if (pass_once == false) return -1;
  return valid_id_set;
}

function toggle_search_class(valid_id_set){
  console.log("enter toggle search class");
  console.log("valid set: " + valid_id_set);
  var search_elements = []
  var search_divs = []
  for (var i = 0; i < valid_id_set.length; i++){
    // Get elements containing valid id (search result)
    search_elements.push(document.getElementById(valid_id_set[i]));
    // Get their parent div (div-to-filter-out)
    console.log("elements: " + valid_id_set[i]);
    search_divs.push(search_elements[i].parentNode.parentNode.parentNode);
  }

  // Toggle
  var content_list = document.querySelectorAll(".div-to-filter-out");
  var title_list = document.querySelectorAll(".criteria-content h4");
  for (var i = 0; i < content_list.length; i++){
    var content = content_list[i];
    var title = title_list[i];
    // Check validity
    if (search_divs.indexOf(content) == -1){
      // Not valid, filter out
      content.classList.toggle("filter-out", true);
      title.classList.toggle("filter-out", true);
    }
    else{
      // Valid
      console.log(title + "not valid");
      content.classList.toggle("filter-out", false);
      title.classList.toggle("filter-out", false);
    }
  }
}

function message_space(on_or_off){
    var message_row = document.querySelector(".search-message-row");
    var main_container = document.querySelector(".main-content-container");
    var sidebar_container = document.querySelector(".sidebar-container");
  if (on_or_off == "on"){
    console.log("opening message row");
    message_row.classList.toggle("in-search", true);
    main_container.classList.toggle("in-search", true);
    sidebar_container.classList.toggle("in-search", true);
  }
  else{
    console.log("closing message row");
    message_row.classList.toggle("in-search", false);
    main_container.classList.toggle("in-search", false);
    sidebar_container.classList.toggle("in-search", false);
  }
}

function sorry_space(on_or_off){
    var sorry_place = document.getElementById("sorry-message");
    if (on_or_off == "on"){
      sorry_place.classList.toggle("col-lg-7", true);
      sorry_place.classList.toggle("col-md-7", true);
    }
    else{ 
      sorry_place.textContent = "";
      sorry_place.classList.toggle("col-lg-7", false);
      sorry_place.classList.toggle("col-md-7", false);
    }
}

function toggle_criteria_by_search(event){
  console.log("enter toggle search");
  // Clear previous search first
  clearSearch();
  // Get the search pattern input by user
  var pattern = document.getElementById("search-input").value;
  // Get space for message
  message_space("on");
  sorry_space("off");
  // Showing info message about this search 
  var search_message = "正在搜尋包含" + "\"" + pattern + "\"" + "的規範";
  document.getElementById("search-message").textContent = search_message;
  // Search in the dataset (should return valid ids)
  var valid_id_set = search_valid(pattern, id_set);
  // If nothing found, print sorry message
  if (valid_id_set == -1){
    var sorry_message = "很抱歉，搜尋結果中沒有包含" + "\"" + pattern + "\"" + "的規範，請確認輸入的字串如\"EV1010100\"或是\"XH10\"";
    var sorry_place = document.getElementById("sorry-message");
    sorry_place.textContent = sorry_message;
    sorry_space("on");
  // Showing info message about this search 
    return;
  }
  // Toggle class of criterias, like in filter 
  toggle_search_class(valid_id_set);
}

function clearSearch(event){
  // Toggle back the class
  var content_list = document.querySelectorAll(".div-to-filter-out");
  var title_list = document.querySelectorAll(".criteria-content h4");
  for (var i = 0; i < content_list.length; i++){
    var content = content_list[i];
    var title = title_list[i];
    content.classList.toggle("filter-out", false);
    title.classList.toggle("filter-out", false);
  }
  // Hide the message row again
  message_space("off");
}
// Apply Filter
document.querySelector("#applyFilterBTN")
  .addEventListener("click", toggle_criteria_visibility);
// Clear Filter
document.querySelector("#clearFilterBTN")
  .addEventListener("click", clearFilter);

// Apply search
document.querySelector("#applySearchBTN")
  .addEventListener("click", toggle_criteria_by_search);
// Clear search
document.querySelector("#clearSearchBTN")
  .addEventListener("click", clearSearch);
  

// Test for parentNode
var e_div = document.getElementById("EV1010100");
var p1 = e_div.parentNode;
var p2 = p1.parentNode;
var p3 = p2.parentNode;
var p4 = p3.parentNode;
console.log(p1); 
console.log(p2); 
console.log(p3); 
console.log(p4); 

for (var i = 0 ; i < 4; i++){
  console.log(id_set[i]);
}

