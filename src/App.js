import './App.css';

function App() {
  return (
    <section class="flex flex-row">
        <section class="shrink-0 mx-7 my-10 h-full sm:basis-48">
            <section>
                <h1 class="text-xl sm:text-3xl font-mono font-bold">Emilio <br /> Ovalles- <br /> Misterman</h1>
            </section>
        
            <section class="text-xs sm:text-sm font-mono font-normal mt-16">
                <ul>
                    <li class="mb-4"><a href="index.html">Home</a></li>
                    <li class="mb-4"><a href="about.html">About</a></li>
                    <li class="mb-4"><a href="projects.html">Projects</a></li>
                    <li class="mb-4"><a href="contact.html">Contact</a></li>
                    <li class="mb-4"><a href="contact.html">CV</a></li>
                </ul>
            </section>

        </section>
    
        <section class="min-h-fit basis-auto my-10 mr-7 text-sm font-mono text-slate-700 max-w-lg">
            
        </section>

        
    </section>
  );
}

export default App;
