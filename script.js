fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    const user = data.results[0];
    const name = user.name;
    document.getElementById("picture").src = user.picture.large;
    document.getElementById("into").innerText = "My Name is:";
    document.getElementById("info").innerText = `${name.title} ${name.first} ${name.last}`;


    // Name Section
    const nameIcon = document.getElementById("name");
    nameIcon.addEventListener("mousemove", function () {
      document.getElementById("into").innerText = "My Name is:";
      document.getElementById("info").innerText = `${name.title} ${name.first} ${name.last}`;
    });


    // Date of Birth Section
    const dateOfBirthIcon = document.getElementById("bateOfBirth");
    dateOfBirthIcon.addEventListener("mousemove", function () {
      document.getElementById("into").innerText = "My Birthday is:";
      document.getElementById("info").innerText = user.dob.date.split("T")[0];
    });


    // Age Section
    const ageIcon = document.getElementById("age");
    ageIcon.addEventListener("mousemove", function () {
      document.getElementById("into").innerText = "My Age is:";
      document.getElementById("info").innerText = user.dob.age;
    });


    // Address Section
    const locationIcon = document.getElementById("address");
    locationIcon.addEventListener("mousemove", function () {
      document.getElementById("into").innerText = "My Address is:";
      document.getElementById("info").innerText = `${user.location.city}, ${user.location.postcode}`;
    });


    // Email Section
    const emailIcon = document.getElementById("email");
    emailIcon.addEventListener("mousemove", function () {
      document.getElementById("into").innerText = "My Email is:";
      document.getElementById("info").innerText = user.email;
    });
  });
