import Sidebar from "./Sidebar";

const Projects = () => {
    return (
        <>
            {/* <Sidebar /> */}
            <section class="min-h-fit basis-auto my-10 mr-7 text-sm font-mono text-slate-700 max-w-lg">
                <h2 class="text-3xl sm:text-2xl font-extrabold mb-16">Projects</h2>
                <div class="mb-16">
                    <a href="https://playmakerspotify.com" class="text-xl font-light mb-1">TracKemist</a>
                    <p>React web app that connects to Spotify and allows users to create playlists and view their favorite songs and artists.</p>
                </div>
                <div class="mb-16">
                    <a href="https://github.com/eomisterman/gamechanger_app" class="text-xl font-light mb-1">Schedule</a>
                    <p>Website displaying mock schedule for a youth sports team. The front end is made using React and the API is made with Kotlin and SpringBoot.</p>
                </div>
                <div class="mb-16">
                    <a href="https://github.com/eomisterman/machine-eyes" class="text-xl font-light mb-1">Machine Eyes</a>
                    <p>Capstone project for the Computer Science major. Using Kinect motion sensor, machine learning, and Max, Machine Eyes is capable of tracking and identifying movements within a space. When target movements are identified, eyes are projected on a canvas to follow the user throughout the space.</p>
                </div>
                <div class="mb-16">
                    <a href="https://github.com/eomisterman/scraper" class="text-xl font-light mb-1">Scraper</a>
                    <p>Basic web scraper using node.js.</p>
                </div>
                <div class="mb-16">
                    <a href="https://github.com/eomisterman/adventure_time" class="text-xl font-light mb-1">Adventure Time</a>
                    <p>This site is an adventure piece for the Digital Studio class, it explores addiction and the effects that addiction has on one's perception, health, and values.</p>
                </div>
                <div class="mb-16">
                    <a href="https://github.com/eomisterman/domestika" class="text-xl font-light mb-1">Sketches</a>
                    <p>Collection of sketches generated using p5.js.</p>
                </div>
                {/* Add more projects here! */}
            </section>        
        </>
    );
}

export default Projects;