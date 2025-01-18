import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chatbot } from "@/pages/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <div className="App">
        <header style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)", color: "white", padding: "20px 0", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <Container>
            <Typography variant="h2" component="h1" style={{ fontWeight: "bold" }}>James's Personal CV</Typography>
            <Typography variant="h6">Software Engineer III | Frontend Focus</Typography>
          </Container>
        </header>
        <main style={{ padding: "40px 0" }}>
          <Container>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #3f51b5, #5c6bc0)", color: "white" }}
                >
                  <Typography>About Me</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    Experienced Frontend Engineer with a solid background as a Software Engineer III. Proficient in
                    JavaScript, React, and other modern frontend technologies, with a strong emphasis on creating
                    responsive and user-friendly interfaces. Adept at collaborating with cross-functional teams to
                    deliver robust software solutions. Skilled in optimizing web performance and improving user
                    experience. Dedicated to continuous learning and staying updated with the latest industry trends.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #ffa726, #ffb74d)", color: "white" }}
                >
                  <Typography>Work Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <ul>
                      <li><br/>Proofpoint December 2021 – Present <br/>
                        Frontend Engineer – Part of the Frontend team for the CASB division in Israel, I design,
                        develop, and maintain user-facing aspects of web applications. Collaborating with designers and
                        backend developers, I create seamless, visually appealing interfaces. I write clean, efficient
                        code using HTML, CSS, JavaScript, React, and Angular, ensuring cross-browser compatibility. I
                        also perform regular testing, debugging, and optimize applications for speed and
                        scalability. <br/>
                        Software Engineer II December 2021 – August 2023 <br/>
                        Sofware Engineer III August 2023 – Present <br/>
                        Stack: Microfrontend, Vite, Nx (monorepo), react, typescript, zod, react-query, Playwright,
                        zustand <br/>
                      </li>
                      <li><br/>Bridgify.io August 2021 – December 2021<br/>
                        Fullstack Developer – Part of a team of 5 developers, I work on Python Django for the server
                        side and React-Typescript for the frontend. I excel in a dynamic environment, addressing
                        customer feedback almost daily, and consistently deliver high-quality solutions to meet client
                        deadlines.<br/>
                        Stack: AWS, Django, React, Typescript, vitejs, PostgreSQL<br/>
                      </li>
                      <li><br/>Intel Corporation May 2020 – August 2021<br/>
                        Automation Engineer – As part of the validation team for the Thunderbolt technology, responsible
                        for coding automated tests, infrastructure for automation in Python with Robot
                        framework/Ansible, and CI/CD tools like TeamCity and Gitlab. Worked alongside software
                        developers in writing STPs according to per feature SRS’s. Well adapt with the scrum methodology
                        and was exposed to a lot of hardware material and different Operating systems
                        (Windows/Ubuntu/ChromeOS).<br/>
                        Stack: Python with Robot framework/Ansible, Team city<br/>
                      </li>
                    </ul>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #43a047, #66bb6a)", color: "white" }}
                >
                  <Typography>Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <ListItemText primary="Ariel University
Bachelor of Science - B.S.c, Computer Science · (2016 - 2019)"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="עמותת תפוח | Academy Appleseeds
Full Stack Web Developer  · (2019 - 2020)"/>
                    </ListItem>

                  </List>
                </AccordionDetails>
              </Accordion>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #43a047, #66bb6a)", color: "white" }}
                >
                  <Typography>Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <ListItemText primary="Frontend: React, Angular, Zustand, React-Query, Vite"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Backend: Node.js, Express.js, Python (Django)"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Cloud: AWS"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Languages: TypeScript, JavaScript, Python"/>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #ab47bc, #ba68c8)", color: "white" }}
                >
                  <Typography>Hobbies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <ListItemText primary="Basketball"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Cooking and enjoying adobo, spaghetti, and fried chicken"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Spending time with family"/>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

            </section>
            <section style={{ marginBottom: "30px" }}>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    style={{ background: "linear-gradient(to right, #3f51b5, #5c6bc0)", color: "white" }}
                >
                  <Typography>Contact</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    Phone: +972523755792
                  </Typography>
                  <Typography paragraph>

                    LinkedIn: <Link
                      href={'https://www.linkedin.com/in/john-james-benitez-4797a4157/'}>https://www.linkedin.com/in/john-james-benitez-4797a4157/</Link>
                  </Typography>
                  <Typography paragraph>
                    Github: <Link href={'https://github.com/crapwood'}>https://github.com/crapwood</Link>
                  </Typography>
                  <Typography paragraph>
                    Email: <Link href={''}>jjbe.93@gmail.com</Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
          </Container>
        </main>
        <footer>
          <Chatbot />
        </footer>
      </div>
  );
}
