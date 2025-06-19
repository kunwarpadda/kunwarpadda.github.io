import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Projects" dir="r" />

			<div className={styles.projects}>
				{projects.map((project, index) => {
					return <Project key={project.title} {...project} index={index} />;
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: "Project X",
		imgSrc: "/project-imgs/Project X.png", // You'll need to add this image
		code: "",
		projectLink: "",
		demoRequest: true,
		 tech: [
        "React Native CLI", 
        "TypeScript", 
        "Node.js", 
        "Express", 
        "PostgreSQL", 
        "Sequelize ORM",
        "Redis", 
        "NativeWind", 
        "React Navigation",
        "Redux Toolkit",
        "Passport.js", 
        "JWT",
        "OAuth2",
        "Axios",
        "AsyncStorage"
    ],
    description:
        "A sophisticated cross-platform mobile application demonstrating enterprise-grade architecture with complex user workflows, real-time capabilities, and production-ready infrastructure built with modern React Native and scalable Node.js backend.",
    technicalDetails: [
        "Engineered type-safe React Native application with TypeScript, custom hooks, context-based state management, and atomic component design principles",
        "Developed robust multi-step wizard system using React Context and useReducer patterns, enabling complex user flows with form persistence and validation",
        "Implemented comprehensive authentication architecture with Passport.js, featuring JWT tokens, OAuth2 integration, biometric auth, and secure OTP verification",
        "Built scalable backend services using Node.js/Express with Sequelize ORM, implementing RESTful APIs, database migrations, and optimized PostgreSQL queries",
        "Architected responsive UI system using NativeWind (Tailwind CSS) with custom toast notifications, theme management, and cross-platform component libraries"
    ],
    modalContent: (
        <>
            <p>
                Project X is a sophisticated cross-platform mobile application that demonstrates 
                expertise in modern React Native development, backend architecture, and enterprise-grade 
                system design. The application features complex multi-step workflows, real-time capabilities, 
                and production-ready infrastructure.
            </p>
            <p>
                <strong>Technical Architecture:</strong>
            </p>
            <ul>
                <li>Type-safe React Native CLI application with TypeScript</li>
                <li>Scalable Node.js/Express backend with PostgreSQL and Sequelize ORM</li>
                <li>Redis caching for performance optimization and OTP management</li>
                <li>Comprehensive authentication with Passport.js, JWT, and OAuth2</li>
                <li>Advanced state management using Redux Toolkit and Context API</li>
                <li>Responsive UI with NativeWind (Tailwind CSS for React Native)</li>
            </ul>
            <p>
                <strong>Key Engineering Features:</strong>
            </p>
            <ul>
                <li>Multi-step wizard flows with form persistence and validation</li>
                <li>Custom hook patterns for reusable logic and clean architecture</li>
                <li>Biometric authentication and OTP verification systems</li>
                <li>Toast notification system for enhanced user experience</li>
                <li>Phone number formatting and validation utilities</li>
                <li>Safe navigation patterns and error handling</li>
            </ul>
        </>
		),
	},
	{
		title: "Wearlyze",
		imgSrc: "/project-imgs/Wearlyze.png", // You'll need to add this image
		code: "",
		projectLink: "",
		demoRequest: true,
		tech: ["Python", "PyTorch", "YOLOv8", "CLIP", "FAISS", "ResNet-50", "MobileNet-V3", "SQLite", "Computer Vision", "Deep Learning"],
		description:
			"An advanced AI-powered visual recognition platform that seamlessly identifies clothing items from images and retrieves similar products using cutting-edge computer vision, deep learning models, and intelligent similarity search algorithms.",
		technicalDetails: [
			"Implemented YOLOv8-n fine-tuned on DeepFashion2 dataset for precise garment detection and segmentation with mIoU ≥ 0.80",
			"Built similarity retrieval system using CLIP ViT-B/32 with FAISS indexing, achieving Recall@5 ≥ 0.80 for product matching",
			"Developed ensemble CNN architecture combining ResNet-50 and MobileNet-V3 achieving macro-F1 ≥ 0.90 across 50 clothing categories",
			"Optimized for deployment with INT8 quantization and FAISS IVF-PQ indexing, reducing model size to ≤15MB with ≤35ms CPU latency"
		],
		modalContent: (
			<>
				<p>
					Wearlyze is an innovative AI-powered fashion recognition platform that bridges the gap 
					between visual inspiration and product discovery. Using state-of-the-art computer vision 
					and deep learning techniques, the system can identify clothing items from photos and 
					instantly retrieve visually similar products from retail catalogs.
				</p>
				<p>
					<strong>Technical Architecture:</strong>
				</p>
				<ul>
					<li>YOLOv8-n segmentation model fine-tuned on 800K+ DeepFashion images</li>
					<li>Multi-stage CNN pipeline with ResNet-50 and MobileNet-V3 ensemble</li>
					<li>CLIP-based similarity search with 512-dimensional feature embeddings</li>
					<li>FAISS vector database with IVF-PQ indexing for sub-second retrieval</li>
					<li>5-fold stratified cross-validation with comprehensive evaluation metrics</li>
					<li>Production-ready deployment with INT8 quantization and SQLite integration</li>
				</ul>
				<p>
					<strong>Key Capabilities:</strong>
				</p>
				<ul>
					<li>Real-time clothing detection and classification across 50+ categories</li>
					<li>Visual similarity search with more than 80% accuracy in top-5 results</li>
					<li>Support for diverse image sources (social media, street photography, catalogs)</li>
					<li>Lightweight deployment suitable for web and mobile applications</li>
					<li>Scalable architecture handling 490K+ product catalog searches</li>
				</ul>
			</>
		),
	},
	{
		title: "RoomChat",
		imgSrc: "/project-imgs/RoomChat-new.png",
		code: "https://www.github.com/kunwarpadda/RoomChat",
		projectLink: "",
		tech: ["Flask", "Socket.IO", "JavaScript", "HTML5", "CSS3", "MySQL", "Azure"],
		description:
			"A high-performance real-time messaging platform featuring WebSocket communication, secure authentication, dynamic room management, and sub-200ms latency for seamless user experiences.",
		technicalDetails: [
			"Real-time chat app with Flask-SocketIO, maintaining sub-200ms message latency",
			"Implemented secure user authentication and session handling for 30+ concurrent users",
			"Developed dynamic room management supporting 25+ unique chat rooms"
		],
		modalContent: (
			<>
				<p>
					RoomChat is a sophisticated real-time messaging platform that demonstrates 
					full-stack development expertise. Users can create unique room codes, join 
					conversations instantly, and experience lag-free communication through 
					WebSocket technology.
				</p>
				<p>
					<strong>Key Features:</strong>
				</p>
				<ul>
					<li>Real-time bidirectional communication using Socket.IO</li>
					<li>Dynamic room creation with unique codes</li>
					<li>Responsive design optimized for all devices</li>
					<li>Persistent message storage with MySQL</li>
					<li>Deployed on Azure with CI/CD pipeline</li>
				</ul>
			</>
		),
	},
	{
		title: "TaskFlow Pro",
		imgSrc: "/project-imgs/Taskfow pro.png",
		code: "https://github.com/kunwarpadda/Todo-App.git",
		projectLink: "",
		tech: ["Flask", "SQLAlchemy", "JavaScript", "HTML5", "CSS3", "Azure"],
		description:
			"A polished task management application showcasing modern web development practices with intuitive UI design, smooth animations, and robust Flask backend architecture.",
		technicalDetails: [
			"Minimalist UI focused on ease of use and distraction-free task management",
			"Applied modular JavaScript structure for maintainability and scalability",
			"Designed custom checkbox animations and subtle hover effects to enhance interactivity"
		],
		modalContent: (
			<>
				<p>
					TaskFlow Pro elevates the traditional todo application concept with 
					professional-grade features and a polished user interface. The application 
					demonstrates mastery of full-stack development principles and database 
					management.
				</p>
				<p>
					<strong>Technical Highlights:</strong>
				</p>
				<ul>
					<li>RESTful API design with Flask</li>
					<li>Advanced SQLAlchemy ORM relationships</li>
					<li>Responsive UI with smooth animations</li>
					<li>Data validation and error handling</li>
					<li>Optimized database queries for performance</li>
				</ul>
			</>
		),
	},
	{
		title: "BudgetBuddy",
		imgSrc: "/project-imgs/BudgetBuddy.png",
		code: "https://github.com/kunwarpadda/BudgetBuddy",
		projectLink: "",
		tech: ["Python", "Selenium", "BeautifulSoup4", "SMTP"],
		description:
			"An intelligent web scraping automation system that monitors product prices across e-commerce platforms, delivering personalized alerts and helping users make informed purchasing decisions.",
		technicalDetails: [
			"BeautifulSoup to extract product data from Amazon.ca",
			"Automated price tracking with scheduled checks and email alerts based on user-defined budgets",
			"Enabled real-time deal monitoring by sending up to 15 weekly notifications when price targets are met"
		],
		modalContent: (
			<>
				<p>
					BudgetBuddy represents the perfect fusion of web scraping expertise and 
					automation engineering. This smart shopping assistant continuously monitors 
					product prices and delivers personalized notifications, helping users save 
					money effortlessly.
				</p>
				<p>
					<strong>Core Capabilities:</strong>
				</p>
				<ul>
					<li>Advanced web scraping with BeautifulSoup4</li>
					<li>Intelligent price threshold monitoring</li>
					<li>Automated email notifications via SMTP</li>
					<li>Robust error handling and retry mechanisms</li>
					<li>Scalable architecture for multiple products</li>
				</ul>
			</>
		),
	},
	{
		title: "BrightDash",
		imgSrc: "/project-imgs/BrightDash.png",
		code: "https://github.com/kunwarpadda/BrightDash",
		projectLink: "",
		tech: ["Python", "Selenium", "Automation"],
		description:
			"A sophisticated browser automation solution that streamlines academic portal access through intelligent element detection, robust error handling, and cross-platform compatibility.",
		technicalDetails: [
			"Selenium WebDriver for robust browser automation and intelligent element detection",
			"Error handling for network and UI changes with configurable wait strategies",
			"Cross-browser compatibility ensuring consistent performance across different environments"
		],
		modalContent: (
			<>
				<p>
					BrightDash transforms the daily university experience by automating the 
					repetitive task of accessing academic portals. Built with Selenium WebDriver, 
					it provides reliable, fast, and secure authentication automation.
				</p>
				<p>
					<strong>Technical Features:</strong>
				</p>
				<ul>
					<li>Selenium WebDriver for robust browser automation</li>
					<li>Intelligent element detection and interaction</li>
					<li>Error handling for network and UI changes</li>
					<li>Configurable wait strategies for reliability</li>
					<li>Cross-browser compatibility</li>
				</ul>
			</>
		),
	},
];
