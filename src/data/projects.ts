import type { StaticImageData } from 'next/image'
import Project8 from '../../public/blue-cafe-website.png'
import Project9 from '../../public/clipboard-landing-page.png'
import Project1 from '../../public/edusphere.gif'
import Project6 from '../../public/fake-store-ecommerce-webapp.png'
import Project2 from '../../public/kanban-board.gif'
import Project4 from '../../public/newsbuzz-website.png'
import Project7 from '../../public/notes-todo-webapp.png'
import Project5 from '../../public/quiz-game-webapp.png'
import Project3 from '../../public/spacex.png'

export type Project = {
	id: number
	image: StaticImageData
	title: string
	description: string
	techs: string[]
	githubLink: string
	liveLink: string
	isLive: boolean
	isGif?: boolean
}

const projects: Project[] = [
	{
		id: 1,
		image: Project1,
		title: 'EduSphere',
		description: "An LMS application inspired by Google Classroom's UI and functionality.",
		techs: ['React', 'Tailwind', 'Express', 'MySQL'],
		githubLink: 'https://github.com/drewmendez/edusphere-lms',
		liveLink: '#',
		isLive: false,
		isGif: true,
	},
	{
		id: 2,
		image: Project2,
		title: 'Kanban Board',
		description: 'An application where you can manage tasks efficiently with drag and drop.',
		techs: ['React', 'Tailwind', 'Express', 'MySQL'],
		githubLink: 'https://github.com/drewmendez/kanban-board-webapp',
		liveLink: '#',
		isLive: false,
		isGif: true,
	},
	{
		id: 3,
		image: Project3,
		title: 'SpaceX Launch Tracker',
		description: 'A website that tracks and displays detailed information about SpaceX past launches.',
		techs: ['Vue/Nuxt', 'Vuetify', 'Typescript'],
		githubLink: 'https://github.com/drewmendez/spacex-launch-tracker',
		liveLink: 'https://spacexnuxt.vercel.app',
		isLive: true,
	},
	{
		id: 4,
		image: Project4,
		title: 'NewsBuzz',
		description: 'A website where you can browse news articles around the world.',
		techs: ['Next', 'Typescript', 'Tailwind'],
		githubLink: 'https://github.com/drewmendez/newsbuzz-website',
		liveLink: 'https://newsbuzz-website.vercel.app',
		isLive: true,
	},
	{
		id: 5,
		image: Project5,
		title: 'Quiz Game',
		description: "An engaging game that tests players' knowledge across various subjects.",
		techs: ['React', 'Typescript', 'Tailwind'],
		githubLink: 'https://github.com/drewmendez/trivia-sprint-game',
		liveLink: 'https://trivia-sprint.vercel.app',
		isLive: true,
	},
	{
		id: 6,
		image: Project6,
		title: 'Fake Store',
		description: 'An E-commerce website focused on clean design and good UX',
		techs: ['React', 'Sass'],
		githubLink: 'https://github.com/drewmendez/fake-store-webapp',
		liveLink: 'https://ecomm-fakestore.vercel.app/',
		isLive: true,
	},
	{
		id: 7,
		image: Project7,
		title: 'Notes | Todos',
		description: 'A webapp where you can take notes and list your todos.',
		techs: ['Javascript', 'CSS', 'HTML'],
		githubLink: 'https://github.com/drewmendez/notes-todo-webapp',
		liveLink: 'https://drewmendez.github.io/notes-todo-webapp',
		isLive: true,
	},
	{
		id: 8,
		image: Project8,
		title: 'Blue Cafe',
		description: 'A cafe website',
		techs: ['HTML', 'CSS', 'Javascript'],
		githubLink: 'https://github.com/drewmendez/blue-cafe-website',
		liveLink: 'https://drewmendez.github.io/blue-cafe-website',
		isLive: true,
	},
	{
		id: 9,
		image: Project9,
		title: 'Clipboard',
		description: 'A landing page',
		techs: ['HTML', 'CSS'],
		githubLink: 'https://github.com/drewmendez/clipboard-landing-page',
		liveLink: 'https://drewmendez.github.io/clipboard-landing-page',
		isLive: true,
	},
]

export default projects
