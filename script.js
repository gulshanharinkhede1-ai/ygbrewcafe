function order(item){
  let phone = "9540272547"; // replace with your WhatsApp number
  let message = "Hello! I want to order " + item + " from YG BREWCAFE";
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}