import React from "react";

// Composant de bouton personnalisé
const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 font-bold text-white rounded";
  const styles = {
    primary: `${baseStyle} bg-blue-500 hover:bg-blue-700`,
    secondary: `${baseStyle} bg-gray-500 hover:bg-gray-700`,
  };
  
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

// Composant principal
const Header76 = (props) => {
  const { heading, description, buttons, images } = {
    ...Header76Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} variant={button.variant}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          {/* Première colonne d'images avec animation */}
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Deuxième colonne d'images avec animation */}
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Valeurs par défaut du composant Header76
const Header76Defaults = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button", variant: "primary" }, { title: "Button", variant: "secondary" }],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
  ],
};

export default Header76;
