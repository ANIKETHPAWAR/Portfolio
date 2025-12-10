import { Experience, Skills, GitHubContributions } from '../components'

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Experience />
      <div className="divider max-w-4xl mx-auto" />
      <Skills />
      <GitHubContributions />
    </div>
  )
}

export default ExperiencePage

