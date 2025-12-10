// ============================================
// BLOG POSTS - Single Source of Truth
// ============================================

const blogPosts = [
  {
    id: 1,
    title: "Inside My Job Hunt: A Final-Year Journey",
    excerpt: "A raw, honest look at the job-hunting grind as a final-year B.Tech student. Hundreds of applications, countless rejections, and the lessons learned along the way.",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    tags: ["Personal", "Career", "Job Hunt"],
    slug: "/blog/job-hunt-journey",
    featured: true,
    content: `🚀 Inside My Job Hunt: A Final-Year Journey Through Rejections, Grind & Growth

Hi everyone,
I'm Aniketh Pawar, a final-year B.Tech student at NIT Durgapur, and like thousands of students across India, I'm deep into the job-hunting phase. If you're reading this, there's a good chance you're on the same path—or will be soon.

This blog is not a success story (yet).
It's about showing up every day, even when it feels impossible.

🔍 The Reality: Hundreds of Applications, Countless Emails & Endless Effort

Every week, I apply to hundreds of roles—
Full-time, internships, startups, MNCs.
Every platform—LinkedIn, AngelList, company portals.

I write:
• Tailored emails
• Cover letters
• Cold DMs on LinkedIn and Twitter
• Networking messages
• Follow-ups

And in between all of this…
I'm still preparing for interviews, revising fundamentals, building projects, and upskilling.

The grind is real.
But the growth is real too.

🧠 Job Hunting Isn't Just Technical—It's Mental

Let's talk honestly:
There are days you feel mentally exhausted.
Days where every rejection email stings a little more.
Days where you doubt your skills, doubt your efforts, even doubt your potential.

But here's the truth I learned:

If you stop now, you won't just lose today's opportunity — you'll lose tomorrow's too.

Opportunities don't wait for "the right moment."
You have to keep moving, even when tired, frustrated, or overwhelmed.

🎯 The Habit That Changed Everything: Apply Daily

One lesson this journey taught me:

⭐ Consistency beats intensity.

You don't need to apply for 100 jobs in one day.
Just apply for some every single day.

Even when:
• You're tired
• You're busy
• You just got rejected
• You had a bad interview
• You're stressed about college or exams

Take one shot.
Send one application.
Write one cold DM.
Do one thing your future self will be proud of.

The difference between getting a job and staying stuck often comes down to that one extra application you sent when you didn't feel like it.

📈 Upskilling Between Applications

Parallel to applying, I keep learning:
• Fixing mistakes after every interview
• Reworking my resume based on feedback
• Solving questions I got stuck on
• Improving my fundamentals
• Rebuilding confidence in skills I already know

Every interview—good or bad—makes you 1% better.
And this compounding finally pays off.

🧭 The Journey Continues…

This is not the final chapter.
I'm still interviewing, still learning, still applying, still hustling.

I'll be sharing:
• My complete job-hunting journey
• Strategies that actually helped
• Cold email and DM templates
• How I prepare for interviews
• What mistakes to avoid
• How to stay sane through the process

If you're in the same phase, just remember:

Keep going.
Take your shot.
Believe in yourself.
Your opportunity is on its way.

Thanks for reading.
If my journey resonates with you, stay connected — more coming soon. 🚀

— Aniketh Pawar`
  },
]


/**
 * Get all blog posts sorted by date (newest first)
 */
export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB - dateA
  })
}

/**
 * Get featured posts for homepage (max 3)
 * If no posts are marked as featured, returns the 3 most recent
 */
export const getFeaturedPosts = (limit = 3) => {
  const featured = blogPosts.filter(post => post.featured)
  if (featured.length > 0) {
    return featured.slice(0, limit)
  }
  return getAllPosts().slice(0, limit)
}

/**
 * Get a single post by slug
 */
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

/**
 * Check if there are any blog posts
 */
export const hasPosts = () => {
  return blogPosts.length > 0
}

/**
 * Get total number of posts
 */
export const getPostCount = () => {
  return blogPosts.length
}

/**
 * Get all unique tags
 */
export const getAllTags = () => {
  const tags = blogPosts.flatMap(post => post.tags || [])
  return [...new Set(tags)]
}

export default blogPosts
