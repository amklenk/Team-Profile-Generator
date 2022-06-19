//this will have the template for the html file 
// const manager = require("../lib/Manager");
// const engineer = require("../lib/Engineer");
// const intern = require("../lib/Intern");

// function filterRoles(teamArray){
// const managerArray = [];
// const internArray = [];
// const engineerArray = [];

// for(var i=0; i < teamArray.length; i++){
// let employee = teamArray[i];
// let role = employee.getRole();
//     if(role === "Manager"){
//         managerArray.push(employee);
//     } else if(role === "Intern"){
//         internArray.push(employee);
//     } else {
//         engineerArray.push(employee);
//     }
// }
// generateManagerCards(managerArray);
// generateInternCards(internArray);
// generateEngineerCards(engineerArray);
// };

// function generateManagerCards (managerArray){
//     for (var i = 0; i < managerArray.length; i++) {
//         let currentManager = managerArray[i];
//         retun `
//               <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
//                   <div class="card-body px-0 py-0">
//                       <div class="card-header header px-3">
//                           <h5 class="card-title font-weight-bold">${currentManager.name}</h5>
//                           <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-mug-hot"></i></span>Manager</h6>
//                       </div>
//                       <ul class="card-text list-group mt-2 px-3 py-3 list">
//                           <li id="ID list-group-item">ID: ${currentManager.id}</li>
//                           <li id="email list-group-item">Email: <a href="mailto:${currentManager.email}">${currentManager.email}</a></li>
//                           <li id="extra-info list-group-item">Office: ${office}</li>
//                       </ul>
//                   </div>
//               </div>
//               `
//     }
// };

// function generateInternCards(internArray){
//     for (var i = 0; i < internArray.length; i++) {
//         console.log(internArray[i]);
// }
// };

// function generateEngineerCards(engineerArray){
//     for (var i = 0; i < engineerArray.length; i++) {
//         console.log(engineerArray[i]);
// }
// };

// function generateCardsSection (managerArray, internArray, engineerArray) {
//   console.log(managerArray);
//   console.log(internArray);
//   console.log(engineerArray);
//   for (var i = 0; i < managerArray.length; i++) {
//     console.log("Manager!");
//     return `
//               <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
//                   <div class="card-body px-0 py-0">
//                       <div class="card-header header px-3">
//                           <h5 class="card-title font-weight-bold">${name}</h5>
//                           <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-mug-hot"></i></span>Manager</h6>
//                       </div>
//                       <ul class="card-text list-group mt-2 px-3 py-3 list">
//                           <li id="ID list-group-item">ID: ${id}</li>
//                           <li id="email list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//                           <li id="extra-info list-group-item">Office: ${office}</li>
//                       </ul>
//                   </div>
//               </div>
//               `
//   }

//   for (var i = 0; i < internArray.length; i++){
//     console.log("intern");
//       return `
//   <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
//        <div class="card-body px-0 py-0">
//            <div class="card-header header px-3">
//                <h5 class="card-title font-weight-bold">${name}</h5>
//                <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-graduation-cap"></i></span>Intern</h6>
//            </div>
//            <ul class="card-text list-group mt-2 px-3 py-3 list">
//                <li id="ID list-group-item">ID: ${name}</li>
//                <li id="email list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//                <li id="extra-info list-group-item">School: ${school}</li>
//            </ul>
//        </div>
//    </div>
//   `
//   }

//   for(var i = 0; i < engineerArray.length; i++) {
//     console.log("Engineer");
//       return `
        //    <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
        //         <div class="card-body px-0 py-0">
        //             <div class="card-header header px-3">
        //                 <h5 class="card-title font-weight-bold">${name}</h5>
        //                 <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-glasses"></i></span>Engineer</h6>
        //             </div>
        //             <ul class="card-text list-group mt-2 px-3 py-3 list">
        //                 <li id="ID list-group-item">ID: ${id}</li>
        //                 <li id="email list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        //                 <li id="extra-info list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
        //             </ul>
        //         </div>
        //     </div>
//            `
//   }
// }

function generateHTML(teamArray) {
    let cardSection= ""
    for (var i = 0; i < teamArray.length; i++) {
        let employee = teamArray[i];
        let role = employee.getRole();
        if (role === "Manager") {
            cardSection += `<div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
                              <div class="card-body px-0 py-0">
                                  <div class="card-header header px-3">
                                      <h5 class="card-title font-weight-bold">${employee.name}</h5>
                                      <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-mug-hot"></i></span>Manager</h6>
                                  </div>
                                  <ul class="card-text list-group mt-2 px-3 py-3 list">
                                      <li id="ID list-group-item">ID: ${employee.id}</li>
                                      <li id="email list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                      <li id="extra-info list-group-item">Office: ${employee.office}</li>
                                  </ul>
                              </div>
                          </div>`
        } else if (role === "Intern") {
            cardSection += `  <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
            <div class="card-body px-0 py-0">
                <div class="card-header header px-3">
                    <h5 class="card-title font-weight-bold">${employee.name}</h5>
                    <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-graduation-cap"></i></span>Intern</h6>
                </div>
                <ul class="card-text list-group mt-2 px-3 py-3 list">
                    <li id="ID list-group-item">ID: ${employee.id}</li>
                    <li id="email list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li id="extra-info list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>`
        } else {
            cardSection += `           <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
            <div class="card-body px-0 py-0">
                <div class="card-header header px-3">
                    <h5 class="card-title font-weight-bold">${employee.name}</h5>
                    <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-glasses"></i></span>Engineer</h6>
                </div>
                <ul class="card-text list-group mt-2 px-3 py-3 list">
                    <li id="ID list-group-item">ID: ${employee.id}</li>
                    <li id="email list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li id="extra-info list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${github}</a></li>
                </ul>
            </div>
        </div>`
        }
    }

    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <script src="https://kit.fontawesome.com/d3c562c8a0.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
    </head>

    <header>
        <h1 class="title text-left ml-5 py-2 font-weight-bolder"> <span class="icon" id="header-icon"><i class="fa-solid fa-people-group"></i></span> My Team</h1>
    </header>

    <main class="container mt-5">
        <div class="row justify-content-center">
        ${cardSection}
        </div>
    </main>
    </html>
    `;
  };

  module.exports= generateHTML;
