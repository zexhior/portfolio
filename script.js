const frontEndSkills = [
  { tech: "HTML", image: "images/html.svg" },
  { tech: "CSS", image: "images/css.svg" },
  { tech: "Javascript", image: "images/javascript.svg" },
  { tech: "Typescript", image: "images/typescript.svg" },
  { tech: "React", image: "images/react.svg" },
];

const backEndSkills = [{ tech: "Node/Express", image: "images/node.svg" }];

const toolSkills = [
  { tech: "Git", image: "images/git.svg" },
  { tech: "Docker", image: "images/docker.svg" },
];

const projectsList = [
  {
    name: "SmartLibrary",
    logo: "images/logo-gray.png",
    link: "http://smartlibrary.com",
  },
];

const contactList = [
  {
    label: "Téléphone",
    icon: "images/icons/phone-xxl.png",
    data: "0382626428/ 0325416917",
  },
  {
    label: "E-mail",
    icon: "images/icons/mail-xxl.png",
    data: "herizoras1@gmail.com",
  },
  {
    label: "Adresse",
    icon: "images/icons/house-xxl.png",
    data: "Lot II A 25 D Amboditsiry",
  },
];

const width = document.documentElement.clientHeight;
const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list-item");
const slider = document.querySelector(".content");
const slides = document.querySelectorAll(".slide");
const frontEnd = document.querySelector(".skill__front-end-section");
const backEnd = document.querySelector(".skill__back-end-section");
const tools = document.querySelector(".skill__tools-section");
const content = document.querySelector(".content");
const projects = document.querySelector(".projects__list");
const contacts = document.querySelector(".contacts__content-left-list");
const burger = document.querySelector(".burger");
const burgerList = document.querySelector(".burger-element-list");

function card(project) {
  return `<!-- Debut Card -->
              <div class="card">
                <div class="project__logo card__head">
                  <img
                    class="project__img"
                    src="${project.logo}"
                    width="150px"
                    alt="logo"
                  />
                </div>
                <div class="project__name card__body">
                  <p>${project.name}</p>
                  <a href="#">${project.link}</a>
                </div>
              </div>
              <!-- Fin Card -->`;
}

function init() {
  console.log(width);
  console.log(list.clientHeight);
  listItems.forEach((item, index) =>
    item.setAttribute("data-index", index + 1)
  );
  frontEndSkills.forEach((skill, index) => {
    frontEnd.insertAdjacentHTML(
      "beforeend",
      `<div class="tech__section">
            <img class="tech" src="${skill.image}" alt="tech" />
            <p class="tech__label">${skill.tech}</p>
        </div>`
    );
  });
  backEndSkills.forEach((skill, index) => {
    backEnd.insertAdjacentHTML(
      "beforeend",
      `<div class="tech__section">
            <img class="tech" src="${skill.image}" alt="tech" />
            <p class="tech__label">${skill.tech}</p>
        </div>`
    );
  });
  toolSkills.forEach((skill, index) =>
    tools.insertAdjacentHTML(
      "beforeend",
      `<div class="tech__section">
            <img class="tech" src="${skill.image}" alt="tech" />
            <p class="tech__label">${skill.tech}</p>
        </div>`
    )
  );
  projectsList.forEach((project) => {
    projects.insertAdjacentHTML("beforeend", card(project));
  });
  burger.addEventListener("click", (e) => {
    burgerList.style.display === "none"
      ? (burgerList.style.display = "inline")
      : (burgerList.style.display = "none");
  });
  burgerList.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("list-item")) {
      burgerList.style.display = "none";
    } else {
      console.log(e.target);
    }
  });
  // contactList.forEach((contact) =>
  //   contacts.insertAdjacentHTML(
  //     "beforeend",
  //     `<div class="label">
  //         <img
  //           class="label__icon icon"
  //           src=${contact.icon}
  //           alt="icon"
  //         />
  //         <p class="label__text">${contact.data}</p>
  //       </div>`
  //   )
  // );
}

init();

function goToSlide(index) {
  slides.forEach(
    (item) => (item.style.transform = `translateX(-${100 * index}%)`)
  );
}

list.addEventListener("click", function (e) {
  const index = +e.target.dataset.index - 1;
  if (e.target.classList.contains("list-item")) {
    goToSlide(index);
  }
});
