import { About, WhyHireMe } from '../components'

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <About />
      
      {/* Why Hire Me Section - Centered */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <WhyHireMe />
        </div>
      </section>
    </div>
  )
}

export default AboutPage
