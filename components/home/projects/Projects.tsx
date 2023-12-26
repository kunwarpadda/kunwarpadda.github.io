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
		title: "Room Chat",
		imgSrc: "/project-imgs/RoomChat.png",
		code: "https://www.github.com/kunwarpadda",
		projectLink: "https://k-roomchat.azurewebsites.net",
		tech: ["Flask", "Socketio", "Javascript", "HTML", "CSS", "MySQL"],
		description:
			" A real-time chat application using frontend technologies—JavaScript, HTML, and CSS—coupled with Python Flask as the robust backend. ",
		modalContent: (
			<>
				<p>
					Developed from the ground up, this application employs
					SocketIO to facilitate real-time message exchange. By
					generating a unique room code, it enables users to join
					designated rooms and engage in conversations with their
					peers in a structured and efficient manner.
				</p>
				<p>
					The tech stack is based on HTML, CSS, Javascript with the
					custom Styled components, connected to a FLask backend, with
					data stored in Mysql.
				</p>
				<p>
					<b>Note</b>: Please be aware that I, as the developer, am
					still working on this application. It's currently under
					development, so you might encounter some bugs. I appreciate
					your understanding. Thank you!
				</p>
			</>
		),
	},
	{
		title: "Todo-App",
		imgSrc: "/project-imgs/Todo App.png",
		code: "https://github.com/kunwarpadda/Todo-App.git",
		projectLink: "https://k-todoapp.azurewebsites.net/",
		tech: ["Flask", "SQLAlchemy", "HTML,CSS,Javascript"],
		description:
			"The TodoApp, represents a comprehensive task management application imbued with the capability to seamlessly add, update, and delete tasks. Executed through the integration of Flask and SQLAlchemy, this project proficiently handles data storage and updates.",
		modalContent: (
			<>
				<p>
					The implementation of GET and POST requests in this project
					has been instrumental in deepening my understanding of their
					practical application, underscoring the impactful
					intersection of my acquired skills with real-world
					scenarios.
				</p>
				<p>This is a very fun project that i made using Flask.</p>
				<p>For simplicity I kept only single database for all users.</p>
			</>
		),
	},
	{
		title: "BudgetBuddy",
		imgSrc: "/project-imgs/BudgetBuddy.png",
		code: "https://github.com/kunwarpadda/BudgetBuddy",
		projectLink: "#",
		tech: ["Python", "beautifulSoup4", "smtp"],
		description:
			"A Python script empowering users to streamline their online shopping experience, BudgetBuddy efficiently navigates the Amazon web store. Tailored to specific user preferences, it diligently seeks products within a designated budget range.",
		modalContent: (
			<>
				<p>
					Upon discovering a match, BudgetBuddy promptly sends a
					personalized email notification, complete with the product
					link, providing users with a seamless and budget-conscious
					shopping solution.
				</p>
				<p>
					In my primary role, I specialize in the scraping component,
					adeptly employing BeautifulSoup to ensure precise product
					searches. Concurrently, the responsibility of orchestrating
					email notifications to users, utilizing SMTP and other
					relevant libraries, is expertly managed by my collaborative
					partner.
				</p>
				<p>
					The team in total consists of 2 developers. This is a
					passion project for both of us.
				</p>
			</>
		),
	},
	{
		title: "BrightDash",
		imgSrc: "/project-imgs/BrightDash.png",
		code: "https://github.com/kunwarpadda/BrightDash",
		projectLink: "#",
		tech: ["Python", "Selenium"],
		description:
			"BrightDash is a Python-based script meticulously designed for expeditious and automated access to Brightspace.",
		modalContent: (
			<>
				<p>
					Leveraging the Selenium framework, BrightDash effortlessly
					navigates the login process, significantly saving valuable
					time for users engaged in daily university tasks within the
					Brightspace platform.
				</p>
				<p>
					This streamlined solution ensures efficient and seamless
					connectivity, enhancing the overall user experience for
					swift and hassle-free access to academic resources.
				</p>
			</>
		),
	},
];
