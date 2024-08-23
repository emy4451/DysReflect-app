import Doctor from "./Doctor-section/Doctor";
import HeroSection from "./Hero-section/Hero-section";
import Types from "./Types-Dyslexie/Types";
import YouTubeVideo from "./YoutubeTV5/youtube";

function Home() {
    return (
      <div>
   <HeroSection/>
   <div className="app-container">
      <YouTubeVideo videoId="SidgkXO3u3I" />
    </div>
    <Types/>
    <Doctor/>
   
    
  
      </div>
    );
  }
  
  export default Home;