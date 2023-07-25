import type {
  AboutUsCardType,
  AboutUsContentType,
  AssetsType,
  EquipmentSlideType,
  EventsCardType,
  LinksType,
  MeetOurTeamCardType,
  ProjectsSlideType,
  ResourcesCardType,
} from "./types";

export const links: LinksType = {
  instagram: "https://www.instagram.com/vrclub.sjsu/",
  discord: "https://discord.gg/gSbpSzZ2uG",
  email: "",
};

export const assets: AssetsType = {
  logoWhite:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689839473/logo-white.svg",
  logoBlack:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838586/logo-black.svg",
  logoIconWhite:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/logo-icon-white",
  logoIconBlack:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/logo-icon-black",
  discordIconWhite:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838138/discord-icon-white.svg",
  discordIconBlack:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838137/discord-icon-black.svg",
  heroText:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838903/hero-text.svg",
  heroBgImage:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838139/planets-0.png",
  heroBgImageMobile:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838140/planets-1.png",
  bgImageBlurGradient:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/bg-image-blur-gradient",
  locationIcon0:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838139/location-icon-0.svg",
  locationIcon1:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838140/location-icon-1.svg",
  locationIcon2:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838139/location-icon-2.svg",
  lightIcon:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838139/light-icon.svg",
  canvasIcon:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838138/canvas-icon.svg",
  puzzleIcon:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838137/puzzle-icon.svg",
  vrGirl:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689838138/vr-girl.png",
  starIcon:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/star",
  arrowIconWhite:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/arrow-white",
  arrowIconBlack:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/f_auto,q_auto/arrow-black",
  carouselGuide:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689883866/3d-carousel-guide.svg",
};

export const aboutUsCards: AboutUsCardType[] = [
  {
    icon: assets.puzzleIcon,
    description: `Immerse yourself in different realities with our cutting-edge AR/VR equipment, from Oculus Quest 2 and Microsoft HoloLens 2 to HTC VIVE Pro and more.`,
  },
  {
    icon: assets.lightIcon,
    description: `Participate in engaging tutorials, workshops, and discussions. Learn from industry experts, faculty mentors, and fellow members.`,
  },
  {
    icon: assets.canvasIcon,
    description: `Collaborate on innovative AR/VR projects, like ZenVR, our mindfulness-focused VR experience. Put theory into practice and see your ideas come to life.`,
  },
];

export const aboutUsContent: AboutUsContentType = {
  description: `Our mission is to dive into the immersive world of Augmented and Virtual Realities. We are a community of passionate individuals from all disciplines, bonded together by our shared fascination for AR and VR. 
    
Whether you're a seasoned expert or someone who's never put on a VR headset before, you're welcome here.`,
  image: assets.vrGirl,
};

export const equipmentSlides: EquipmentSlideType[] = [
  {
    title: "Oculus Go",
    model: "https://prod.spline.design/oAD77Xt0Dt-TXloM/scene.splinecode",
  },
  {
    title: "Oculus Go",
    model: "https://prod.spline.design/oAD77Xt0Dt-TXloM/scene.splinecode",
  },
  {
    title: "Oculus Go",
    model: "https://prod.spline.design/oAD77Xt0Dt-TXloM/scene.splinecode",
  },
  {
    title: "Oculus Go",
    model: "https://prod.spline.design/oAD77Xt0Dt-TXloM/scene.splinecode",
  },
];

export const meetOurTeamCards: MeetOurTeamCardType[] = [
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689885904/dexter.jpg",
    name: "Dexter Allen",
    position: "President",
  },
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689885904/kyle.jpg",
    name: "Kyle Nguyen",
    position: "Vice President",
  },
  {
    image: "",
    name: "Cosmo Maddux",
    position: "Treasurer",
  },
];

export const projectsSlides: ProjectsSlideType[] = [
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689886106/zen-vr.jpg",
    title: "ZenVR",
    description:
      "Take a breath, relax, and immerse yourself in tranquility with ZenVR. Our team at the AR/VR Club @ SJSU has taken mindfulness to a whole new level by developing a unique VR experience designed to promote relaxation and mental well-being.",
  },
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689886631/haunted-house.png",
    title: "Haunted House VR",
    description:
      "Prepare for a spine-chilling, adrenaline-pumping adventure with our VR Haunted House Project. At the AR/VR Club, we have ventured into the realm of virtual horror, designing an immersive haunted house experience that pushes the boundaries of fear and fun.",
  },
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689886631/haptic-glove.webp",
    title: "Haptic Gloves",
    description:
      "Ever wished you could touch and feel objects in the virtual world? With our Haptic Glove Project, we're making that possible. True immersion in AR/VR comes not just from what we see or hear, but also from what we can touch.",
  },
];

export const eventsCards: EventsCardType[] = [
  {
    title: "AR/VR Club General Meeting",
    description:
      "During this meeting, we will go over the summer roadmap, you will meet fellow team members and we will begin working with unity.    ",
    location: "375 South 9th St San Jose, CA 95112",
    date: "2023-07-20T08:39:14+0000",
    link: "",
  },
  {
    title: "Unity workshop",
    description:
      "We will go over everything you need to know to create your first virtual reality game, from the basics of Unity all the way to porting your game into a headset (Headsets will be provided). The meeting will be approximately 3 hours with an intermission in the middle.",
    location: "150 E San Fernando St San Jose, CA 95112 KLEVR Lab",
    date: "2023-07-20T08:39:14+0000",
    link: "",
  },
  {
    title: "AR/VR Social",
    description:
      "Experience the future of technology. Join the SJSU Virtual Reality Club to create, learn, and explore with like minded students. Don't miss out, become a part of the VR Club today!",
    location: "375 South 9th St San Jose, CA 95112",
    date: "2023-07-20T08:39:14+0000",
    link: "",
  },
];

export const resourcesCards: ResourcesCardType[] = [
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1689887100/KLEVR-lab.jpg",
    title: "KLEVR Lab",
    description:
      "The King Library Experiential Virtual Reality (KLEVR) Lab provides a new form of learning and instruction through the use of AR and VR technologies.",
    link: "https://library.sjsu.edu/klevr-lab",
  },
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1690315460/game_dev.png",
    title: "SJSU Game Dev Club",
    description:
      "A club for game makers and fans. Everyone is welcome, even non-students!",
    link: "https://sjsugamedev.com/#/games",
  },
  {
    image:
      "https://res.cloudinary.com/dglwv2m2o/image/upload/v1690315461/unity.png",
    title: "Unity 3D Engine",
    description:
      "The Unity 3D Engine is a powerful platform for creating interactive, real-time 3D content.",
    link: "https://store.unity.com/download",
  },
];
