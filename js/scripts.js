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
// Apply Filter
document.querySelector("#applyFilterBTN")
  .addEventListener("click", toggle_criteria_visibility);
// Clear Filter
document.querySelector("#clearFilterBTN")
  .addEventListener("click", clearFilter);

