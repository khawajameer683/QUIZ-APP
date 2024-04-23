// function submitForm() {
//     var Name = document.getElementById("Name").value;
//     var rollno = document.getElementById("rollno").value;
//     var batch = document.getElementById("batch").value;
//     var section = document.getElementById("section").value;
// }
//      var userInfo = { 
//    NAME: Name,
//    ROLLNO: rollno,
//    BATCH: batch,
//    SECTION: section
//    };
  
//     console.log(Name); // Optional: Display user information in the console



    const form = document.getElementById('studentForm');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (page reload)
        event.preventDefault();

        // Get the form data
        const rollNumber = document.getElementById('rollNumber').value;
        const name = document.getElementById('name').value;
        const batch = document.getElementById('batch').value;
        const section = document.getElementById('section').value;

        // Store the data in session storage
        sessionStorage.setItem('rollNumber', rollNumber);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('batch', batch);
        sessionStorage.setItem('section', section);

        // Display a success message
        alert('Student details stored in session storage.');
    });