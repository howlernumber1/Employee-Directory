//global variables
let employees = "";

//render function to display employee list
const render = function() {
  employeeList.forEach(function(element) {
    employees += `<div class="div-card"><p>${element.name}</p><p>${element.officeNum}</p><p>${
      element.phoneNum
    }</p></div>`;
    $(".dataOutput").html(employees);
  });
  employees = "";
};

//function to change to the view data perspective when the viewData event listener is triggered
const viewData = function() {
  $("input").addClass("hide");
  $("#search").addClass("hide");
  render();
};

//function to change to the add data perspective when the addData event listener is triggered
const addData = function() {
  $(".dataOutput").empty();
  $("input").removeClass("hide");
  $("#search").removeClass("hide");
  $("#search").on("click", addInfo);
  $("#search").off("click", updateInfo);
  $("#search").off("click", deleteInfo);
  $("#search").off("click", verifyInfo);
};

//function that adds new entry and re-render lists when the search button is pressed (add data perspective)
const addInfo = function() {
  const nameInput = $("#name")
    .val()
    .trim();
  const officeInput = $("#office")
    .val()
    .trim();
  const phoneInput = $("#phone")
    .val()
    .trim();
  const newEntry = {
    name: nameInput,
    officeNum: officeInput,
    phoneNum: phoneInput
  };
  employeeList.push(newEntry);
  render();
};

// function to change to the verify data perspective when the verifyData event listener is triggered
const verifyData = function() {
  $(".dataOutput").empty();
  $("input").removeClass("hide");
  $("#search").removeClass("hide");
  $("#office").addClass("hide");
  $("#phone").addClass("hide");
  $("#search").off("click", addInfo);
  $("#search").off("click", updateInfo);
  $("#search").off("click", deleteInfo);
  $("#search").on("click", verifyInfo);
};

//function that tells if a user is in the employee list (yes or no) when the search button is pressed (verify data perspective)
const verifyInfo = function() {
  const nameInput = $("#name")
    .val()
    .trim();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === nameInput) {
      $(".dataOutput").html("yes");
      return;
    } else {
      $(".dataOutput").html("no");
    }
  }
};

// function to change to the update data perspective when the updateData event listener is triggered
const updateData = function() {
  $(".dataOutput").empty();
  $("input").removeClass("hide");
  $("#search").removeClass("hide");
  $("#search").off("click", addInfo);
  $("#search").on("click", updateInfo);
};

//function that lets you update the office and/or phone number (based on first name) then re-renders the list when the search button is pressed (update data perspective)
const updateInfo = function() {
  const nameInput = $("#name")
    .val()
    .trim();
  const officeInput = $("#office")
    .val()
    .trim();
  const phoneInput = $("#phone")
    .val()
    .trim();
  for (let i = 0; i < employeeList.length; i++) {
    if (nameInput === employeeList[i].name) {
      console.log("yes");
      employeeList[i].officeNum = officeInput;
      employeeList[i].phoneNum = phoneInput;
      render();
      return;
    } else {
      console.log("no");
    }
  }
};

// function to change to the delete data perspective when the deleteData event listener is triggered

const deleteData = function() {
  $(".dataOutput").empty();
  $("input").removeClass("hide");
  $("#search").removeClass("hide");
  $("#search").off("click", addInfo);
  $("#search").off("click", verifyInfo);
  $("#search").off("click", updateInfo);
  $("#search").on("click", deleteInfo);
};

//function that lets you delete an employee entry (based on the first name) then re-renders the list when the search button is pressed (delete data perspective)
const deleteInfo = function() {
  const nameInput = $("#name").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === nameInput) {
      employeeList.splice(i, 1);
    }
  }
  render();
};

//event listeners
$(".view").on("click", viewData);
$(".add").on("click", addData);
$(".verify").on("click", verifyData);
$(".update").on("click", updateData);
$(".delete").on("click", deleteData);
