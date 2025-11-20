import React from "react";
import { Grid, Tooltip, Card, CardMedia, CardContent } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

function Project() {
	const projects = [
		{
			name: "Savor",
			tech: "React, Vite, Javascript",
			imgName: "savor.png",
			alt: "savor homepage",
			repo: "https://github.com/alinz07/savor",
			aitchref: "https://savor-uuyf.onrender.com/",
			desc: "A static web page for a client's mobile charcuterie bar business that leverages smoothe rendering from vites lazy loading.",
		},
		{
			name: "Linz-Ling Exercises",
			tech: "MongoDB Atlas, Express, React, Node, Javascript",
			imgName: "linzling.png",
			alt: "linzling logged in page",
			repo: "https://github.com/alinz07/mern-deploy",
			aitchref: "https://mern-deploy-1-hixt.onrender.com/",
			desc: "Still in development, this appliaction is to help my sister who is a teacher for the deaf and hard of hearing. It's a MERN app that helps track her students' daily audio equipment checks.",
		},
		{
			name: "National Parks Info and Weather",
			tech: "HTML, CSS, Javascript, Jquery, Foundation by Zurb",
			imgName: "national-parks-screenshot.png",
			alt: "National Parks homepage",
			repo: "https://github.com/p-fassbender/national-parks-info-and-weather",
			aitchref:
				"https://p-fassbender.github.io/national-parks-info-and-weather/",
			desc: "An application for hikers to view national parks in their state and a 5 day weather forecast to help them plan an adventure. My contributions included dynamic HTML scripts and CSS, as well as parsing API JSON data for the National Parks and Weather API.",
		},
		{
			name: "Photo portfolio",
			tech: "React, Jest",
			imgName: "photo-port.png",
			alt: "Photo portfolio homepage",
			repo: "https://github.com/alinz07/photo-port",
			aitchref: "https://alinz07.github.io/photo-port/",
			desc: "A mock Photographer's portfolio leveraging React and a suite of Jest tests for the components. I contributed by converting this to a React app. The HTML, CSS and most Javascript logic was already written by the University.",
		},
	];
	return (
		<Grid
			container
			display="flex"
			wrap="wrap"
			justifyContent="space-evenly"
		>
			{projects.map((project) => (
				<Grid
					item
					container
					xs={12}
					lg={6}
					key={project.name}
					justifyContent="center"
					my={5}
				>
					<Card id="react-card">
						<CardMedia
							component="img"
							alt={project.alt}
							height="200"
							image={require(`../../assets/homepages/${project.imgName}`)}
						/>
						<CardContent>
							<Grid container alignItems="center">
								<Grid
									fontSize="h4.fontSize"
									p={2}
									pb={1}
									item
									xs={12}
								>
									{project.name}
								</Grid>
								<Grid p={2} pt={2} item xs={6}>
									<Tooltip title="Go to link">
										<a
											id="proj-link"
											href={project.aitchref}
											target="_blank"
											rel="noreferrer"
										>
											<LinkIcon /> Deployed App
										</a>
									</Tooltip>
								</Grid>

								<Grid p={2} pt={2} item xs={6}>
									<Tooltip title="Go to link">
										<a id="proj-link" href={project.repo}>
											<LinkIcon /> GitHub Repo
										</a>
									</Tooltip>
								</Grid>
								<Grid
									mt={5}
									p={2}
									item
									xs={12}
									fontSize="h5.fontSize"
									id="port-tech-stack"
								>
									Tech Stack
								</Grid>
								<Grid
									pt={1}
									item
									xs={12}
									fontSize="h6.fontSize"
								>
									{project.tech}
								</Grid>
								<Grid
									mt={5}
									p={2}
									item
									xs={12}
									fontSize="h5.fontSize"
									id="description"
								>
									Motivation and Contribution
								</Grid>
								<Grid
									pt={1}
									item
									xs={12}
									fontSize="h6.fontSize"
								>
									{project.desc}
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}

export default Project;
