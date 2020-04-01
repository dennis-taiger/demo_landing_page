// Easy HTTP Library
// const http = new EasyHTTP();

// // Authenticate Data
// const data = {
//   username: "sales",
//   password: "Password@123"
// };

// const timer = {
//   id: 1585710524220,
//   time: "2030-04-01T03:26:51.616Z"
// };

// const card = document.querySelector(".card");
// card.addEventListener("mouseenter", authExtract);

// document.body.addEventListener("click", runEvent);

// function runEvent(e) {
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item');
//   // }

//   if (e.target.parentElement.classList.contains("card")) || (e.target.parentElement.parentElement.classList.contains("card")) {
//     console.log("card clicked");
//     //  e.target.parentElement.parentElement.remove();
//   }

//   e.preventDefault();
// }

// card.addEventListener("click", runEvent);

// // Event Handler
// function runEvent(e) {
//   let val;
//   val = e;

//   console.log(e.target.parentElement);
//   // Authenticate with server
//   // http
//   //   .post("http://imatch-demo.taiger.io:8080/api/authenticate", data)
//   //   .then(data => {
//   //     //     console.log(data);
//   //     console.log(`EVENT TYPE: ${e.type}`);
//   //     //console.log(`URL: ${e.target}`);
//   //     var win = window.open(e.target.href, "_blank");
//   //     win.focus();
//   //   })
//   //   .catch(err => console.log(err));

//   e.preventDefault();
// }

// function authExtract(e) {
//   //  let val;
//   //  val = e;

//   console.log(e.target.parentElement);
//   // Authenticate with server
//   http
//     .post("http://imatch-demo.taiger.io:8080/api/authenticate", data)
//     .then(data => {
//       console.log(data);
//       console.log(`EVENT TYPE: ${e.type}`);
//       //console.log(`URL: ${e.target}`);
//       //     var win = window.open(e.target.href, "_blank");
//       //     win.focus();
//       // Set Local Storage item
//       localStorage.setItem("ngIdle.expiry", JSON.stringify(timer));
//     })
//     .catch(err => console.log(err));

//   e.preventDefault();
// }

// $.ajax("http://imatch-demo.taiger.io:8080/api/authenticate", {
//   method: "POST",
//   data: data,
//   crossDomain: true,
//   success: login_success,
//   error: login_error
// });

// $.ajax("http://imatch-demo.taiger.io:8080/api/authenticate", {
//   method: "GET",
//   xhrFields: { withCredentials: true },
//   crossDomain: true,
//   success: whatever_success,
//   error: whatever_error
// });
