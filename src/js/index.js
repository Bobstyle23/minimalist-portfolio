const openMenu = document.querySelector(".menu__btn--open");
const closeMenu = document.querySelector(".menu__btn--close");
const navigation = document.querySelector(".navigation");
const navigationListItems =
  document.querySelector(".navigation__list").children;
const navLinks = document.querySelectorAll(".navigation__list--item a");

const toggleMenu = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

closeMenu.addEventListener("click", () => {
  navigation.style.top = "-100%";
  toggleMenu();
});

openMenu.addEventListener("click", () => {
  navigation.style.top = "8.8rem";
  toggleMenu();
});

for (let menu of navigationListItems) {
  menu.addEventListener("click", () => {
    navigation.style.top = "-100%";
    toggleMenu();
  });
}

// WARN: highlight active page (DEV)
// let currentPath = window.location.pathname
//   .split("/")
//   .filter(Boolean)
//   .toString()
//   .split(".")[0];

// PERF: highlight active page (PROD)
let currentPath = window.location.pathname
  .split("/")
  .filter(Boolean)[1]
  .split(".")[0];

navLinks.forEach((link) => {
  let linkName = link
    .getAttribute("href")
    .split("./")
    .filter(Boolean)
    .toString()
    .split(".")[0];
  if (linkName === currentPath) {
    link.classList.add("active");
  }
});

// NOTE: projects
const projects = {
  manage: {
    heroImages: {
      desktop: {
        normal: "./img/detail/desktop/image-manage-hero.webp",
        retina: "./img/detail/desktop/image-manage-hero@2x.webp",
      },
      tablet: {
        normal: "./img/detail/tablet/image-manage-hero.webp",
        retina: "./img/detail/tablet/image-manage-hero@2x.webp",
      },
      mobile: {
        normal: "./img/detail/mobile/image-manage-hero.webp",
        retina: "./img/detail/mobile/image-manage-hero@2x.webp",
      },
    },
    previewImages: {
      desktop: {
        first: {
          normal: "./img/detail/desktop/image-manage-preview-1.webp",
          retina: "./img/detail/desktop/image-manage-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/desktop/image-manage-preview-2.webp",
          retina: "./img/detail/desktop/image-manage-preview-2@2x.webp",
        },
      },
      tablet: {
        first: {
          normal: "./img/detail/tablet/image-manage-preview-1.webp",
          retina: "./img/detail/tablet/image-manage-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/tablet/image-manage-preview-2.webp",
          retina: "./img/detail/tablet/image-manage-preview-2@2x.webp",
        },
      },
      mobile: {
        first: {
          normal: "./img/detail/mobile/image-manage-preview-1.webp",
          retina: "./img/detail/mobile/image-manage-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/mobile/image-manage-preview-2.webp",
          retina: "./img/detail/mobile/image-manage-preview-2@2x.webp",
        },
      },
    },
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    link: "https://bobstyle23.github.io/photosnap-website/" /* NOTE: link to the actual live website */,
  },
  bookmark: {
    heroImages: {
      desktop: {
        normal: "./img/detail/desktop/image-bookmark-hero.webp",
        retina: "./img/detail/desktop/image-bookmark-hero@2x.webp",
      },
      tablet: {
        normal: "./img/detail/tablet/image-bookmark-hero.webp",
        retina: "./img/detail/tablet/image-bookmark-hero@2x.webp",
      },
      mobile: {
        normal: "./img/detail/mobile/image-bookmark-hero.webp",
        retina: "./img/detail/mobile/image-bookmark-hero@2x.webp",
      },
    },
    previewImages: {
      desktop: {
        first: {
          normal: "./img/detail/desktop/image-bookmark-preview-1.webp",
          retina: "./img/detail/desktop/image-bookmark-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/desktop/image-bookmark-preview-2.webp",
          retina: "./img/detail/desktop/image-bookmark-preview-2@2x.webp",
        },
      },
      tablet: {
        first: {
          normal: "./img/detail/tablet/image-bookmark-preview-1.webp",
          retina: "./img/detail/tablet/image-bookmark-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/tablet/image-bookmark-preview-2.webp",
          retina: "./img/detail/tablet/image-bookmark-preview-2@2x.webp",
        },
      },
      mobile: {
        first: {
          normal: "./img/detail/mobile/image-bookmark-preview-1.webp",
          retina: "./img/detail/mobile/image-bookmark-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/mobile/image-bookmark-preview-2.webp",
          retina: "./img/detail/mobile/image-bookmark-preview-2@2x.webp",
        },
      },
    },

    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    link: "",
  },
  insure: {
    heroImages: {
      desktop: {
        normal: "./img/detail/desktop/image-insure-hero.webp",
        retina: "./img/detail/desktop/image-insure-hero@2x.webp",
      },
      tablet: {
        normal: "./img/detail/tablet/image-insure-hero.webp",
        retina: "./img/detail/tablet/image-insure-hero@2x.webp",
      },
      mobile: {
        normal: "./img/detail/mobile/image-insure-hero.webp",
        retina: "./img/detail/mobile/image-insure-hero@2x.webp",
      },
    },
    previewImages: {
      desktop: {
        first: {
          normal: "./img/detail/desktop/image-insure-preview-1.webp",
          retina: "./img/detail/desktop/image-insure-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/desktop/image-insure-preview-2.webp",
          retina: "./img/detail/desktop/image-insure-preview-2@2x.webp",
        },
      },
      tablet: {
        first: {
          normal: "./img/detail/tablet/image-insure-preview-1.webp",
          retina: "./img/detail/tablet/image-insure-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/tablet/image-insure-preview-2.webp",
          retina: "./img/detail/tablet/image-insure-preview-2@2x.webp",
        },
      },
      mobile: {
        first: {
          normal: "./img/detail/mobile/image-insure-preview-1.webp",
          retina: "./img/detail/mobile/image-insure-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/mobile/image-insure-preview-2.webp",
          retina: "./img/detail/mobile/image-insure-preview-2@2x.webp",
        },
      },
    },

    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    link: "",
  },
  fylo: {
    heroImages: {
      desktop: {
        normal: "./img/detail/desktop/image-fylo-hero.webp",
        retina: "./img/detail/desktop/image-fylo-hero@2x.webp",
      },
      tablet: {
        normal: "./img/detail/tablet/image-fylo-hero.webp",
        retina: "./img/detail/tablet/image-fylo-hero@2x.webp",
      },
      mobile: {
        normal: "./img/detail/mobile/image-fylo-hero.webp",
        retina: "./img/detail/mobile/image-fylo-hero@2x.webp",
      },
    },
    previewImages: {
      desktop: {
        first: {
          normal: "./img/detail/desktop/image-fylo-preview-1.webp",
          retina: "./img/detail/desktop/image-fylo-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/desktop/image-fylo-preview-2.webp",
          retina: "./img/detail/desktop/image-fylo-preview-2@2x.webp",
        },
      },
      tablet: {
        first: {
          normal: "./img/detail/tablet/image-fylo-preview-1.webp",
          retina: "./img/detail/tablet/image-fylo-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/tablet/image-fylo-preview-2.webp",
          retina: "./img/detail/tablet/image-fylo-preview-2@2x.webp",
        },
      },
      mobile: {
        first: {
          normal: "./img/detail/mobile/image-fylo-preview-1.webp",
          retina: "./img/detail/mobile/image-fylo-preview-1@2x.webp",
        },
        second: {
          normal: "./img/detail/mobile/image-fylo-preview-2.webp",
          retina: "./img/detail/mobile/image-fylo-preview-2@2x.webp",
        },
      },
    },

    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    link: "",
  },
};

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

const projectTitle = document.querySelector(".detail__title");
const projectDescription = document.querySelector(".detail__description");
const projectLink = document.querySelector(".detail__link");
const projectHeroImages = document.querySelector(".detail__image")?.children;
const projectPreviewImages1 = document.querySelector(
  ".preview__image--first",
)?.children;
const projectPreviewImages2 = document.querySelector(
  ".preview__image--second",
)?.children;

if (projectId && projects[projectId]) {
  const project = projects[projectId];

  const {
    desktop: { normal: desktopNormal, retina: desktopRetina },
    tablet: { normal: tabletNormal, retina: tabletRetina },
    mobile: { normal: mobileNormal, retina: mobileRetina },
  } = project.heroImages;

  const {
    desktop: {
      first: { normal: previewDesktopNormal1, retina: previewDesktopRetina1 },
      second: { normal: previewDesktopNormal2, retina: previewDesktopRetina2 },
    },
    tablet: {
      first: { normal: previewTabletNormal1, retina: previewTabletRetina1 },
      second: { normal: previewTabletNormal2, retina: previewTabletRetina2 },
    },
    mobile: {
      first: { normal: previewMobileNormal1, retina: previewMobileRetina1 },
      second: { normal: previewMobileNormal2, retina: previewMobileRetina2 },
    },
  } = project.previewImages;

  const heroImagesArray = [
    { type: "desktop", normal: desktopNormal, retina: desktopRetina },
    { type: "tablet", normal: tabletNormal, retina: tabletRetina },
    { type: "mobile", normal: mobileNormal, retina: mobileRetina },
  ];

  const previewImagesArray = [
    {
      type: "desktop",
      first: { normal: previewDesktopNormal1, retina: previewDesktopRetina1 },
      second: { normal: previewDesktopNormal2, retina: previewDesktopRetina2 },
    },
    {
      type: "tablet",
      first: { normal: previewTabletNormal1, retina: previewTabletRetina1 },
      second: { normal: previewTabletNormal2, retina: previewTabletRetina2 },
    },
    {
      type: "mobile",
      first: { normal: previewMobileNormal1, retina: previewMobileRetina1 },
      second: { normal: previewMobileNormal2, retina: previewMobileRetina2 },
    },
  ];

  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectLink.setAttribute("href", project.link);

  for (let hero of projectHeroImages) {
    let heroType = hero.getAttribute("class").split("--")[1];
    const heroImg = heroImagesArray.find((img) => img.type === heroType);
    hero.srcset = `${heroImg.normal}, ${heroImg.retina} 2x`;
  }

  for (let previews of [...projectPreviewImages1, ...projectPreviewImages2]) {
    const previewSequence = previews
      .getAttribute("class")
      .split("-")
      .filter(Boolean)[1];
    const previewType = previews.getAttribute("class").split("--")[1];

    let previewImage = previewImagesArray.find(
      (img) => `${img.type}` === previewType,
    )[previewSequence];

    previews.srcset = `${previewImage.normal}, ${previewImage.retina} 2x`;
  }
}

// NOTE: project navigator
const prevProject = document.querySelector(".swiper__left");
const nextProject = document.querySelector(".swiper__right");
const prevProjectTitle = document.querySelector(".prev-project");
const nextProjectTitle = document.querySelector(".next-project");

const projectsList = [
  {
    title: "Manage",
    id: "manage",
  },
  {
    title: "Bookmark",
    id: "bookmark",
  },
  {
    title: "Insure",
    id: "insure",
  },
  {
    title: "Fylo",
    id: "fylo",
  },
];

function getProjects(currentId) {
  const index = projectsList.findIndex((project) => project.id === currentId);
  if (index === -1) return;
  const prevIdx = (index - 1 + projectsList.length) % projectsList.length;
  const nextIdx = (index + 1) % projectsList.length;

  return {
    prev: {
      title: projectsList[prevIdx].title,
      id: projectsList[prevIdx].id,
    },
    next: {
      title: projectsList[nextIdx].title,
      id: projectsList[nextIdx].id,
    },
  };
}

prevProjectTitle.textContent = getProjects(projectId).prev.title;
nextProjectTitle.textContent = getProjects(projectId).next.title;

let currentLocation = window.location.href.split("?")[0];

prevProject.addEventListener("click", () => {
  window.location = `${currentLocation}?id=${getProjects(projectId).prev.id}`;
});

nextProject.addEventListener("click", () => {
  window.location = `${currentLocation}?id=${getProjects(projectId).next.id}`;
});
