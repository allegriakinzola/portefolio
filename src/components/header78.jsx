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
const Header78 = (props) => {
  const { heading, description, buttons, images } = {
    ...Header78Defaults,
    ...props,
  };

  return (
    <div className="mx-auto px-4">
        <section id="relume"  className="px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden w-full bg-red-400">
      <div className="bg-slate-500 flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} variant={button.variant}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            {/* Première rangée (défilement de gauche à droite) */}
            <div className="grid w-full animate-marquee-left auto-cols-fr grid-cols-[repeat(4,_1fr)] gap-4 self-center">
              {/* Duplication des images pour créer l'effet de défilement continu */}
              {[...new Array(2)].map((_, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Deuxième rangée (défilement de droite à gauche) */}
            <div className="grid w-full animate-marquee-right auto-cols-fr grid-cols-[repeat(4,_1fr)] gap-4 self-center">
              {/* Duplication des images pour créer l'effet de défilement continu */}
              {[...new Array(2)].map((_, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

// Valeurs par défaut du composant Header78
const Header78Defaults = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
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

export default Header78;
