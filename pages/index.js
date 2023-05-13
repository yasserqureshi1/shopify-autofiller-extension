function saveForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postcode = document.getElementById("postcode").value;
    var phone = document.getElementById("phone").value;
  
    var formData = {
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "address": address,
      "city": city,
      "postcode": postcode,
      "phone": phone
    };
  
    chrome.storage.sync.set({"formData": formData}, function() {
      console.log("Form data saved.");
    });
  }
  
function loadForm() {
    chrome.storage.sync.get("formData", function(data) {
        console.log(data)
        document.getElementById("firstname").value = data.formData.firstname;
        document.getElementById("lastname").value = data.formData.lastname;
        document.getElementById("email").value = data.formData.email;
        document.getElementById("address").value = data.formData.address;
        document.getElementById("city").value = data.formData.city;
        document.getElementById("postcode").value = data.formData.postcode;
        document.getElementById("phone").value = data.formData.phone;
    })
}


  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", saveForm);
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loader").addEventListener("click", loadForm);
  });