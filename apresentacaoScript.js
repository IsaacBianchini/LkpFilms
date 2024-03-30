function enviarEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "isaacbr871@gmail.com",
      Password: "970917EEA271AD3158B60C1A0EBC8FE6EAAA",
      To: "emprogresso4@gmail.com",
      From: "isaacbr871@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }