import type {
  AboutUsCardType,
  AboutUsContentType,
  AssetsType,
  LinksType,
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
  memberImagePlaceHolder:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1692490571/Portrait_Placeholder_w70pnl.png",
  imagePlaceHolder:
    "https://res.cloudinary.com/dglwv2m2o/image/upload/v1692490736/placeholder_pgfe0j.jpg",
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
