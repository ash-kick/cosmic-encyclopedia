import { useParams } from "react-router-dom";
import GoBackButton from "./GoBackButton";

export default function CosmosDetails() {
     const { id } = useParams();
     const cosmo = cosmos[id];

     if (!cosmo) return <p>Not found!</p>;

     return (
          <div className="cosmos">
               <div className="cosmos-text">
                    <h2>{cosmo.title}</h2>
                    <p>{cosmo.body}</p>
               </div>
               <GoBackButton />
          </div>
     );
}

const cosmos = {
     mars: {
          title: "Mars",
          body: "Known as the red planet, Mars has fascinated humans for centuries. It is home to the highest mountain in the solar system, Olympus Mons, and evidence suggest water once flowed on it's surface.",
     },
     venus: {
          title: "Venus",
          body: "Venus, our closest planetary neighbor, is shrouded in thick clouds of sulfuric acid, making it a hostile environment. Its surface temperatures are hot enough to melt lead",
     },
     "orion-nebula": {
          title: "Orion Nebula",
          body: "Located in the constellation of Orion, the Orion Nebula is a vibrant nursery where new stars are born. It is one of the brightest nebulae visible to the naked eye in the night sky",
     },
     "andromeda-galaxy": {
          title: "Andromeda Galaxy",
          body: "Andromeda is the nearest large galaxy to the Milky Way.",
     },
};
