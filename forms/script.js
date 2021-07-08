let info_list = []
let current_info = {}
$('#exampleModalCenter').modal({
  show: false
})
let radio1 = document.getElementById('male-id');
let radio2 = document.getElementById('female-id');

function radio_check() {
  if (radio1.checked == true)
    return radio1.value;
  else if (radio2.checked == true)
    return radio2.value;
  else
    return 1;
}

function modal_write() {
  document.getElementById("name-col").innerHTML = current_info.name;
  document.getElementById("dob-col").innerHTML = current_info.dob;
  document.getElementById("sex-col").innerHTML = current_info.sex;
  document.getElementById("email-col").innerHTML = current_info.email_id;
  document.getElementById("address-col").innerHTML = current_info.address;
  document.getElementById("school-col").innerHTML = current_info.school;
  document.getElementById("department-col").innerHTML = current_info.department;
  document.getElementById("course-col").innerHTML = current_info.course;
  document.getElementById("number-col").innerHTML = current_info.number;
  $('#exampleModalCenter').modal('show');
}

function form_submit() {
  let given_name = document.getElementById('name').value;
  let given_dob = document.getElementById('dob').value;
  let given_sex = radio_check();
  let given_email_id = document.getElementById('email').value;
  let given_address = document.getElementById('address').value;
  let given_school = document.getElementById('school').value;
  let given_department = document.getElementById('department').value;
  let given_course = document.getElementById('course').value;
  let given_number = document.getElementById('number').value;
  let given_password = document.getElementById('password').value;
  let given_password_conf = document.getElementById('password-conf').value;

  let unfilled_items = []
  let unfilled_count = 0
  if (!given_name) {
    unfilled_items.push("name-small");
    unfilled_count++;
  }
  if (!given_dob) {
    unfilled_items.push("dob-small");
    unfilled_count++;
  }
  if (given_sex == 1) {
    unfilled_items.push("sex-small");
    unfilled_count++;
  }
  if (!given_email_id) {
    unfilled_items.push("email-small");
    unfilled_count++;
  }
  if (!given_address) {
    unfilled_items.push("address-small");
    unfilled_count++;
  }
  if (given_school == "Select..") {
    unfilled_items.push("school-small");
    unfilled_count++;
  }
  if (given_department == "Select..") {
    unfilled_items.push("department-small");
    unfilled_count++;
  }
  if (given_course == "Select..") {
    unfilled_items.push("course-small");
    unfilled_count++;
  }
  if (!given_number) {
    unfilled_items.push("number-small");
    unfilled_count++;
  }
  if(!given_password){
    unfilled_items.push("password-small");
    unfilled_count++;
  }

  if (unfilled_count) {
    for (var i = 0; i <= unfilled_count; i++) {
      document.getElementById(unfilled_items[i]).style.display = "block";
    }
  }
  else {
    let form_details = {
      name: given_name,
      dob: given_dob,
      sex: given_sex,
      email_id: given_email_id,
      address: given_address,
      school: given_school,
      department: given_department,
      course: given_course,
      number: given_number
    };

    if (given_email_id.includes("@") == true) {
      if (!isNaN(given_number) && given_number.length >= 10) {
        if(given_password == given_password_conf && given_password){
          current_info = form_details;
          modal_write();
        }
        else{
          document.getElementById("password-conf-small").style.display = "block";
        }
      } else {
        alert("Please enter a valid mobile number");
      }
    } else {
      alert("Please enter a valid Email id");
    }
  }
}

function form_reset() {
  document.getElementById('FORM').reset();
}

function save_changes() {
  info_list.push(current_info);
  $(".btn-secondary").click();
  form_reset();
  alert("data saved");
}
