chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            console.log(request)
            document.getElementById("checkout_email").value = request.email;
            document.getElementById("checkout_shipping_address_first_name").value = request.firstname;
            document.getElementById("checkout_shipping_address_last_name").value = request.lastname;
            document.getElementById("checkout_shipping_address_address1").value = request.address;
            document.getElementById("checkout_shipping_address_city").value = request.city;
            document.getElementById("checkout_shipping_address_zip").value = request.postcode;
            document.getElementById("checkout_shipping_address_phone").value = request.phone;
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
        return true
    }
  );
