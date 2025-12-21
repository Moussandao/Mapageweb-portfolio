// Initialisation EmailJS
(function () {
  emailjs.init("4YwlRg-vMrZQXzKOC"); // 🔑 Remplace par ta Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = document.getElementById("submit-btn");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 🛑 Anti-spam (honeypot)
    if (document.getElementById("website").value !== "") {
      return;
    }

    // UI pendant l'envoi
    button.disabled = true;
    button.textContent = "Envoi en cours...";
    status.textContent = "";
    status.className = "";

    emailjs
      .sendForm("service_3bo8vsn", "template_vxoqix1", form)
      .then(
        function () {
          status.textContent = "✅ Message envoyé avec succès !";
          status.className = "success";
          form.reset();
        },
        function (error) {
          status.textContent =
            "❌ Une erreur est survenue. Veuillez réessayer.";
          status.className = "error";
          console.error("EmailJS Error :", error);
        }
      )
      .finally(function () {
        button.disabled = false;
        button.textContent = "Envoyer";
      });
  });
});

const translations = {
  fr: {
    nav_home: "Acceuille",
    nav_about: "À propos",
    nav_skills: "Parcours & Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",

    home_title: "Salut ! je suis Moussa Ndene Ndao",
    home_passion: "Passioné de developpement informatique.",
    home_values: "« Rigueur, Créativité, Adaptabilité »",

    contact_title: "Formulaire de Contact",
    form_name: "Votre Nom:",
    form_email: "Votre Email:",
    form_send: "Envoyer",
    about_title: "À propos de moi",
    about_text: `
Je suis un développeur web passionné, animé par la curiosité et le désir de créer des expériences numériques simples,
esthétiques et utiles. Mon parcours m’a permis de bâtir une solide base en HTML, CSS et JavaScript,
que j’enrichis chaque jour par l’apprentissage du fullstack et des bonnes pratiques modernes.

Au-delà du code, j’aime transmettre mes connaissances et accompagner les autres dans leur progression,
grâce à une communication claire et adaptée. Je crois que la technologie n’est pas seulement une affaire de logique,
mais aussi de créativité et de sens : chaque projet est pour moi l’occasion d’allier rigueur et imagination.

Polyvalent et motivé, je m’investis aussi dans des domaines variés comme le design et la broderie,
où je retrouve la même exigence de précision et de plaisir du détail.
Mon objectif est de contribuer à des projets qui ont un impact positif,
tout en continuant à apprendre et à évoluer avec enthousiasme.
`,
    about_audio: "Ecoutez la section about en version audio. ",
    contactez_moi: "contactez-moi",
    skills_title: "Parcours & Compétences",
    parcours_title: "Parcours",
    skills_title_small: "Compétences",
    bac: "Baccalauréat Scientifique (S2)",
    lmi: 'Mathématiques – Informatique (LMI) "Bac+1"',
    frontend_cert: "Certification en Développement Web Front-End",
    web_fundamentals: "Certification sur les fondamentaux du développement web",

    nb_note:
      "NB : Vous pouvez cliquer sur les formations pour voir le diplôme ou le certificat obtenu.",

    projects_title: "Mes projets",
    projects_intro:
      "En tant que débutant dans le domaine du développement web, j’ai travaillé sur plusieurs projets visant à consolider mes connaissances. Voici quatre (4) projets choisis parmi tant d’autres :",

    docplanner_desc:
      "Docplanner est une entreprise internationale de santé numérique qui facilite la mise en relation entre patients et médecins grâce à une plateforme simple et efficace.",

    quiz_desc:
      "Une application de quiz dédiée aux élèves et apprenants pour renforcer leurs connaissances tout en s’amusant.",

    jumdelices_desc:
      "« La pâtisserie de la banlieue » qui propose les meilleurs délices. JumDelices, votre pâtisserie au format numérique.",

    cart_desc:
      "Un prototype de panier e-commerce permettant de réaliser des achats en ligne de manière efficace.",
    E_commerce_panier: "Pannier E-commerce",
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Background & Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    home_title: "Hi! I am Moussa Ndene Ndao",
    home_passion: "Passionate about software development.",
    home_values: "“Discipline, Creativity, Adaptability”",

    contact_title: "Contact Form",
    form_name: "Your Name:",
    form_email: "Your Email:",
    form_send: "Send",
    about_title: "About Me",
    about_text: `
I am a passionate web developer driven by curiosity and the desire to create simple,
aesthetic, and useful digital experiences. My journey has allowed me to build a solid foundation
in HTML, CSS, and JavaScript, which I strengthen every day by learning fullstack development
and modern best practices.

Beyond coding, I enjoy sharing knowledge and supporting others in their learning journey
through clear and effective communication. I believe technology is not only about logic,
but also creativity and meaning: each project is an opportunity to combine rigor and imagination.

Versatile and motivated, I am also involved in various fields such as design and embroidery,
where I find the same attention to detail and precision.
My goal is to contribute to projects that have a positive impact
while continuing to learn and grow with enthusiasm.
`,
    about_audio: "Listen to the About section in audio version.",
    contactez_moi: "contact me",
    skills_title: "Background & Skills",
    parcours_title: "Education",
    skills_title_small: "Skills",
    bac: "Scientific Baccalaureate (S2)",
    lmi: 'Mathematics & Computer Science (LMI) "Year 1"',
    frontend_cert: "Front-End Web Development Certification",
    web_fundamentals: "Web Development Fundamentals Certification",
    nb_note:
      "Note: You can click on the courses to view the diploma or certificate obtained.",
    projects_title: "My Projects",
    projects_intro:
      "As a beginner in web development, I have worked on several projects to strengthen my skills. Here are four (4) selected projects among many others:",

    docplanner_desc:
      "Docplanner is an international digital healthcare company that connects patients and doctors through a simple and efficient online platform.",

    quiz_desc:
      "A quiz application designed for students and learners to improve their knowledge while having fun.",

    jumdelices_desc:
      "“The neighborhood bakery” offering the finest treats. JumDelices, your bakery in digital format.",

    cart_desc:
      "An e-commerce cart prototype that allows users to shop online efficiently.",
    E_commerce_panier: "E-commerce shopping cart",
  },
};
function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Placeholder du textarea
  const messageField = document.querySelector("textarea[name='user_message']");

  if (messageField) {
    messageField.placeholder =
      lang === "fr"
        ? "Écrivez votre message ici !!!"
        : "Write your message here !!!";
  }

  // Sauvegarde du choix utilisateur
  localStorage.setItem("site_lang", lang);
}

document.getElementById("lang-fr").addEventListener("click", () => {
  changeLanguage("fr");
});

document.getElementById("lang-en").addEventListener("click", () => {
  changeLanguage("en");
});
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("site_lang") || "fr";
  changeLanguage(savedLang);
});

/*******
 * 4YwlRg-vMrZQXzKOC
 * "service_3bo8vsn", "template_vxoqix1"
 */
