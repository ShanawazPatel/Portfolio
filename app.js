function showCard(type) {
  const card = document.getElementById("infoCard");
  const content = document.getElementById("cardContent");

  let html = "";
  if (type === "projects") {
    html = `
      <h2>My Projects</h2>
      <ul>
        <li>Smart Productivity Tracker</li>
        <li>AI Spotify Clone</li>
        <li>CampusConnect</li>
        <li>Portfolio Website</li>
      </ul>`;
  } else if (type === "skills") {
    html = `
      <h2>My Skills</h2>
      <p>Java, JavaScript, React, Node.js, Python, MongoDB, SQL, DSA, Git, GitHub, OOPs</p>`;
  } else if (type === "certificates") {
    html = `
      <h2>Certificates</h2>
      <ul>
        <li>MERN Full Stack Web Development</li>
        <li>DSA Mastery Course</li>
      </ul>`;
  } else if (type === "hobbies") {
    html = `
      <h2>Hobbies & Strengths</h2>
      <p>Reading Tech Blogs, Debugging, Teamwork, Fast Learning, Leadership</p>`;
  }

  content.innerHTML = html;
  card.style.display = "block";
}

function hideCard() {
  document.getElementById("infoCard").style.display = "none";
}
