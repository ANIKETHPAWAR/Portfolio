import { 
  Hero, 
  AboutPreview, 
  SkillsPreview, 
  FeaturedProjects, 
  GitHubContributions,
  WhyHireMe,
  BlogPreview,
  HomeCTA 
} from '../components'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Main intro with profile */}
      <Hero />
      
      {/* About Preview - Brief story */}
      <AboutPreview />
      
      {/* Skills - Tech stack icons */}
      <SkillsPreview />
      
      {/* Featured Projects - Top 3 projects */}
      <FeaturedProjects />
      
      {/* GitHub Contributions - Activity chart */}
      <GitHubContributions />
      
      {/* Why Hire Me + Blog Preview - Two column layout */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Why Hire Me - Takes 2 columns */}
            <div className="lg:col-span-2">
              <WhyHireMe />
            </div>
            
            {/* Blog Preview - Side widget */}
            <div className="lg:col-span-1">
              <BlogPreview />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA - Final call to action */}
      <HomeCTA />
    </div>
  )
}

export default HomePage
