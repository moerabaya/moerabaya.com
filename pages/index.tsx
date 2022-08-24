import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/app.scss'
import React, { useEffect } from 'react';
import { Project } from '../types'
import Link from 'next/link';
import {GrAppleAppStore} from "react-icons/gr";
import {BsGlobe2} from "react-icons/bs";
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';

interface Props {
  projects: Project[]
}
const Home: NextPage<Props> = ({projects}: Props) => {

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_LOGIN_CREDENTIALS);
    return () => {
      // cleanup
    }
  }, [])

  function WorkItems() {
    var list: any = [];

    projects?.sort((a: any, b: any) => a.index - b.index).map((project: Project) => {
      list.push(
        <li key={project.slug} className={"work-item " + project.slug}>
          <div className="content-media">
            <Image placeholder="blur" layout="responsive" alt="" src={project.cover_photo && require("../assets/images/projects/" + project.cover_photo)} />
          </div>
          <div className="content-wrapper">
            <h3 className='project-name'>{project.title}</h3>
            <h4 className='project-type'>{project.project_type}</h4>
            <div className="project-links">
              {/* <Link href={project.path}> */}
                {/* <a title='Coming soon!' className='project-link disabled'>Case Study</a> */}
              {/* </Link> */}
              {/* <Link href={project.behance}> */}
                {project.behance ? <a title='View Project on Behacne' href={project.behance} target="_blank" className='project-link media' rel="noreferrer">
                  View on Behance
                </a> : <a title='Coming soon!' className='project-link disabled'>Case Study</a>}

                {project.appstore && <a title={`Download ${project.title} App`} href={project.appstore} target="_blank" className='project-link media' rel="noreferrer">
                  <GrAppleAppStore />
                </a>}

                {project.website && <a title={`Visit ${project.title}'s website`} href={project.website} target="_blank" className='project-link media' rel="noreferrer">
                  <BsGlobe2 />
                </a>}

              {/* </Link> */}
            </div>
          </div>
        </li>
      )
    })
    return (
      <ul className="work-list">
        {list}
      </ul>
    )
  }
  return (
      <div className="page-content">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
  
          <title>Mohammed Rabay&apos;a — UX, Product Designer | Senior Engineer</title>
          
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
          <meta name="description" content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences." />
  
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:url" content="https://moerabaya.com/" />
          <meta property="og:title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
          <meta property="og:description" content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences." />
          <meta property="og:image" content={require('../assets/images/metaimage.png')} />
  
          {/* <!-- Twitter --> */}
          <meta property="twitter:url" content="https://moerabaya.com/" />
          <meta property="twitter:title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
          <meta property="twitter:description" content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences." />
          <meta property="twitter:image" content={require('../assets/images/metaimage.png')} />
        </Head>
  
        <header>
          <div className="container">
            {/* <div className="flex-grid"> */}
              {/* <div className="col contact-details">
                <a className="animated" href="mailto:rabaya.moe@gmail.com"><h4>rabaya.moe[at]gmail.com</h4></a>
                <br/>
                <a className="animated" href="tel:00962799127281"><h4>(962) 799 127 281</h4></a>
                &nbsp; &nbsp;
                <a className="animated" target="_blank" href="https://www.google.com/search?q=Amman%2C+Jordan"><h4>Amman, Jordan</h4></a>
              </div>
              <div className="col"> */}
              <h1 className="title">I design/develop user inter­­&shy;faces and engaging product experi­­en­­&shy;ces for humans.</h1>
              {/* <ArrowDown className="arrow-down" /> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </header>
        {/* <div className="container">
          <hr />
        </div> */}
        <section className="work-section">
          {/* <div className="container"> */}
            {/* <h2 className="work-title">Selected Projects</h2> */}
            <div className="content">
              {WorkItems()}
            </div>
          {/* </div> */}
        </section>
      </div>
  )
}

export default Home;

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd()/* process current directory */, 'projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const files = await Promise.all(filenames.map(async (filename: any) => {
    const filePath = path.join(projectsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const matter = grayMatter(content);
    return {
      filename, matter
    }
  }))

  const projects = files.map(file => {
    return {
      ...file.matter.data,
      path: `work/${file.filename.replace('.mdx', '')}`
    }
  })

  return {
    props: {
      projects
    }
  }
}
