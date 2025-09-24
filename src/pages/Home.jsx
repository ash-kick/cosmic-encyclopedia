import React from "react";
import GoBackButton from "./content/GoBackButton";

export default function Home() {
     return (
          <div className="home">
               <div className="home-text">
                    <h2>Welcome to the Cosmic Encyclopedia</h2>
                    <p>
                         Embark on a journey through the universe and discover the ownders of the cosmos. From the fiery surfaces of stars to the icy realms of distant comets, the Cosmic Encyclopedia
                         is your gateway to understanding the celestial bidies that populate our galaxy and beyond.
                    </p>
                    <p>Navigate through our collection to learn more about the various celestial phenomena, their history, composition and the history they hold.</p>
               </div>
               <GoBackButton />
          </div>
     );
}
