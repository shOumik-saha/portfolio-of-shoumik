import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1,
        title: "Health Intelligence Agent",
        description: "An AI-powered wellness companion that tracks sleep, mood, and exercise to uncover hidden lifestyle trends. Using LLMs, it analyzes daily habits to generate narrative weekly reports and actionable insights into your mental and physical performance.",
        image: "/projects/project9.jpg",
        tags: ["React","Node.js","Express","Prisma","PostgreSQL(Docker)","Groq LLaMA 3.3"],
        demoUrl: "https://health-agent-black.vercel.app/",
        githubUrl: "https://github.com/shOumik-saha/health-agent",
    },
    {
        id:2,
        title: "CheckGit-GitHub Repo Analyzer",
        description: "It is a project to analyze any GitHub repository including future suggestions with AI instantly. Get instant insights on tech stack, strengths, and improvement suggestions — powered by Groq LLaMA 3.3.",
        image: "/projects/project8.jpg",
        tags: ["Next.js","TypeScript","REST API","Groq LLaMa 3.3"],
        demoUrl: "https://check-git-sandy.vercel.app/",
        githubUrl: "https://github.com/shOumik-saha/Check-Git",
    },
    {
        id:3,
        title: "Ecommerce Inventory Management System",
        description: "A streamlined inventory system for tracking products, categories, and stock. It features a centralized admin dashboard for real-time updates and ensures seamless synchronization between warehouse levels and the digital storefront.",
        image: "/projects/project7.jpg",
        tags: ["Laravel 12","REST API","Next.js","React","TypeScript","PostgreSQL"],
        demoUrl: "https://ecommerce-inventory-zeta.vercel.app/",
        githubUrl: "https://github.com/shOumik-saha/ecommerce-inventory",
    },
    {
        id:4,
        title: "Lamapin - A photo Editing App",
        description: "It is a modern, Pinterest-like image sharing platform where users can upload photos, create boards, explore pins, engage through likes, saves and comments — built with a scalable architecture and real-time database updates.",
        image: "/projects/project1.jpg",
        tags: ["React","Express.js","Node.js","mongoDB"],
        demoUrl: "https://github.com/shOumik-saha/LAMAPIN",
        githubUrl: "https://github.com/shOumik-saha/LAMAPIN",
    },
    {
        id:5,
        title: "The Multiverse - a Social Media Platform",
        description: "I built a modern, high-performance social media web application using the latest web technologies.The platform allows users to create accounts, edit profiles, follow other users, publish posts, like posts, and interact with a smooth, real-time UI.",
        image: "/projects/project2.jpg",
        tags: ["Next.js","Prisma ORM","TailwindCSS","NeonDB"],
        demoUrl: "https://github.com/shOumik-saha/The-Multiverse",
        githubUrl: "https://github.com/shOumik-saha/The-Multiverse",
    },
    {
        id:6,
        title: "Foodies - Interactive Restaurant & Cuisine Discovery Platform",
        description: "a responsive React-based web application for discovering restaurants, cuisines, and dishes.Implemented real-time AJAX search for instant results without page reloads, and advanced filtering by cuisine type, price, ratings, and dietary preferences.",
        image: "/projects/project3.jpg",
        tags: ["React","AJAX","JavaScript"],
        demoUrl: "https://github.com/shOumik-saha/foodies-website",
        githubUrl: "https://github.com/shOumik-saha/foodies-website",
    },
    {
        id:7,
        title: "Student Management System - Academic Administration Platform",
        description: "a comprehensive Student Management System using Laravel with full CRUD functionality for efficient academic administration.",
        image: "/projects/project4.jpg",
        tags: ["Laravel","PHP","MySQL","Bootstrap"],
        demoUrl: "https://github.com/shOumik-saha/laravel12_crud",
        githubUrl: "https://github.com/shOumik-saha/laravel12_crud",
    },
    {
        id:8,
        title: "Army Camp Project",
        description: "a project designed with C++, OpenGLUT & graphics Design. Used different typed color gradient to create different scenaios including animation movements.",
        image: "/projects/project5.jpg",
        tags: ["C++","OpenGLUT"],
        demoUrl: "https://github.com/shOumik-saha/Computer-Graphics-C-PlusPlus",
        githubUrl: "https://github.com/shOumik-saha/Computer-Graphics-C-PlusPlus",
    },
    {
        id:9,
        title: "Prison Management System",
        description: "a project designed with raw PHP, used javascript authentication and myphpadmin for database. This website manages a Jail where warden,jailer,lawyer and prisoners can perform actions.",
        image: "/projects/project6.PNG",
        tags: ["PHP","MyphpAdmin","HTML5","CSS5"],
        demoUrl: "https://github.com/shOumik-saha/FinalProjectWTFall21-22/tree/master",
        githubUrl: "https://github.com/shOumik-saha/FinalProjectWTFall21-22/tree/master",
    },

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "} 
            Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) =>(
                <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-x5 card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover trasition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between itemms-center">
                        <div className="flex space-x-3">
                            <a 
                            href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <ExternalLink />
                            </a>
                            <a
                            href={project.githubUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/shOumik-saha"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>

        </div>
    </section>
}