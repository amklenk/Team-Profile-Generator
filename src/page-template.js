//this will have the template for the html file

//pass and filter
        //For Manager
        //     return `
        //     <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
        //         <div class="card-body px-0 py-0">
        //             <div class="card-header header px-3">
        //                 <h5 class="card-title font-weight-bold">Employee Name</h5>
        //                 <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-mug-hot"></i></span>Manager</h6>
        //             </div>
        //             <ul class="card-text list-group mt-2 px-3 py-3 list">
        //                 <li id="ID list-group-item">ID: </li>
        //                 <li id="email list-group-item">Email: </li>
        //                 <li id="extra-info list-group-item">Office: </li>
        //             </ul>
        //         </div>
        //     </div>
        //     `
            
        //for Engineer
        //    return `
        //    <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
        //         <div class="card-body px-0 py-0">
        //             <div class="card-header header px-3">
        //                 <h5 class="card-title font-weight-bold">Employee Name</h5>
        //                 <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-glasses"></i></span>Engineer</h6>
        //             </div>
        //             <ul class="card-text list-group mt-2 px-3 py-3 list">
        //                 <li id="ID list-group-item">ID: </li>
        //                 <li id="email list-group-item">Email: </li>
        //                 <li id="extra-info list-group-item">GitHub: </li>
        //             </ul>
        //         </div>
        //     </div>
        //    ` 

        //for Intern
        //    return `
        //    <div class="col-9-sm col-6-md col-lg-3 card shadow p-0 mb-5 bg-light rounded mx-4">
        //         <div class="card-body px-0 py-0">
        //             <div class="card-header header px-3">
        //                 <h5 class="card-title font-weight-bold">Employee Name</h5>
        //                 <h6 class="card-subtitle font-weight-bold"><span class = "icon mr-1"><i class="fa-solid fa-graduation-cap"></i></span>Intern</h6>
        //             </div>
        //             <ul class="card-text list-group mt-2 px-3 py-3 list">
        //                 <li id="ID list-group-item">ID: </li>
        //                 <li id="email list-group-item">Email: </li>
        //                 <li id="extra-info list-group-item">School: </li>
        //             </ul>
        //         </div>
        //     </div>
        //    ` 

function generateCardsSection (name, id, email, role, office, github, school) {
if (role === "Manager"){
    return ``
}
};

function generateHTML(templateData) {
    // destructure page data by section
    const { name, id, email, role, office, github, school } = templateData;
  
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
        CARDS GENERATED HERE
        </div>
    </main>
    </html>
    `;
  };

  module.exports= generateHTML;