import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Projects" dir="r" />

			<div className={styles.projects}>
				{projects.map((project) => {
					return <Project key={project.title} {...project} />;
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: "RoomChat",
		imgSrc: "/project-imgs/RoomChat.png",
		code: "https://www.github.com/kunwarpadda/RoomChat",
		projectLink: "https://k-roomchat.azurewebsites.net",
		tech: ["Flask", "Socket.IO", "JavaScript", "HTML5", "CSS3", "MySQL", "Azure"],
		description:
			"A real-time chat application with Flask-SocketIO, featuring user authentication, low-latency messaging, and dynamic room management",
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
		imgSrc: "/project-imgs/Todo App.png",
		code: "https://github.com/kunwarpadda/Todo-App.git",
		projectLink: "https://k-todoapp.azurewebsites.net/",
		tech: ["Flask", "SQLAlchemy", "JavaScript", "HTML5", "CSS3", "Azure"],
		description:
			"A fun and responsive to-do list web app using vanilla HTML, CSS, and JavaScript with Flask backend",
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
		projectLink: "#",
		tech: ["Python", "Selenium", "BeautifulSoup4", "SMTP"],
		description:
			"An automated web scraping application in Python operating the BeautifulSoup library to extract product information from Amazon",
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
		projectLink: "#",
		tech: ["Python", "Selenium", "Automation"],
		description:
			"A powerful automation tool that streamlines university portal access, reducing login time and enhancing student productivity through intelligent browser automation",
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
