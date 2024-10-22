import React from "react";
import './App.css'
import { StickyScroll } from './components/StickyScroll/StickyScroll';
import { Spotlight } from './components/Spotlight/Spotlight';
import image from "./medias/image.png";
import { CardsCarouselDemo } from "./components/CardsCarouselDemo/CardsCarouselDemo.JSX";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo/BackgroundLinesDemo";
import { ContainerScroll } from "./components/ContainerScrollwithpc/ContainerScroll";
import { TracingBeam } from "./components/blog/TracingBeam";
import { Globe } from "./components/Globe/Globe";
import Header76 from "./components/header76";
import { Tabs } from "./components/Tab/tab";
import Navbar from "./components/navbar/navbar";
import { AnimatedTooltipPreview } from "./components/AnimatedTooltip/AnimatedTooltipPreview";
import { MacbookScroll } from "./components/macbookScroll/macbookScroll";
import { WobbleCard } from "./components/WobbleCard/WobbleCard";
import { WobbleCardDemo } from "./components/WobbleCard/WobbleCardDemo";
import { GlobeDemo } from "./components/Globe/GlobeDemo";



function App() {
  const tabsData = [
  {
    title: "Home",
    value: "home",
    content: (
      <div className="p-4">
        <h1 className="text-xl font-bold">Welcome to Home Tab</h1>
        <p>This is the content of the Home tab.</p>
      </div>
    ),
  },
  {
    title: "Profile",
    value: "profile",
    content: (
      <div className="p-4">
        <h1 className="text-xl font-bold">Profile Information</h1>
        <p>This is the content of the Profile tab. You can add your profile details here.</p>
      </div>
    ),
  },
  {
    title: "Settings",
    value: "settings",
    content: (
      <div className="p-4">
        <h1 className="text-xl font-bold">Settings</h1>
        <p>This is the content of the Settings tab where you can configure your preferences.</p>
      </div>
    ),
  },
];

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real-time.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src={image}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative editing demo"
          />
        </div>
      ),
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real-time.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src={image}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative editing demo"
          />
        </div>
      ),
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real-time.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src={image}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative editing demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Chaque composant prend une page entière */}
      
    
      {/* <Header78/> */}
        {/* <Header76/>  */}
  
        {/* <LampDemo /> */}
       
      
        {/* <TracingBeam/> */}
        {/* <Globe/> */}
       
        <Navbar/>
        {/* <BackgroundLinesDemo/> */}
        <Spotlight />
        <ContainerScroll/>
        <StickyScroll content={content} />
        
        <MacbookScroll/>
        <WobbleCardDemo/>
        <GlobeDemo/>
        {/* <WobbleCardDemo/> */}
        {/* <CardsCarouselDemo/>  */}

        
        {/* <Spotlight /> */}
        {/* <Tabs/>     */}
    </div>
  );
}

export default App;

 