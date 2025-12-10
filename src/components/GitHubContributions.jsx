import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GitHubContributions = () => {
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hoveredDay, setHoveredDay] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/ANIKETHPAWAR?y=last')
        const data = await response.json()
        setGithubData(data)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGitHubData()
  }, [])

  const getColor = (level) => {
    const colors = [
      'rgba(255, 255, 255, 0.03)',
      'rgba(255, 255, 255, 0.1)',
      'rgba(255, 255, 255, 0.2)',
      'rgba(255, 255, 255, 0.4)',
      'rgba(255, 255, 255, 0.6)',
    ]
    return colors[level] || colors[0]
  }

  const processContributions = (contributions) => {
    if (!contributions || contributions.length === 0) return { weeks: [], monthLabels: [] }
    
    const weeks = []
    let currentWeek = []
    
    const firstDate = new Date(contributions[0]?.date)
    const firstDay = firstDate.getDay()
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push(null)
    }
    
    contributions.forEach((day) => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        weeks.push(currentWeek)
        currentWeek = []
      }
    })
    
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push(currentWeek)
    }

    const monthLabels = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let lastShownMonth = -1

    weeks.forEach((week, weekIndex) => {
      const firstValidDay = week.find(d => d !== null)
      if (firstValidDay) {
        const date = new Date(firstValidDay.date)
        const month = date.getMonth()
        if (month !== lastShownMonth) {
          monthLabels.push({ weekIndex, label: months[month] })
          lastShownMonth = month
        }
      }
    })
    
    return { weeks, monthLabels }
  }

  const { weeks, monthLabels } = processContributions(githubData?.contributions || [])

  const handleCellHover = (day, e) => {
    if (!day) return
    const rect = e.currentTarget.getBoundingClientRect()
    const gridRect = gridRef.current?.getBoundingClientRect()
    if (gridRect) {
      setTooltipPos({
        x: rect.left - gridRect.left + rect.width / 2,
        y: rect.top - gridRect.top - 10
      })
    }
    setHoveredDay(day)
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section className="py-20 px-6 hidden md:block">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="section-label">Activity</div>
          <h2 className="heading-lg text-white">
            GitHub Contributions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="card p-6"
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-6 h-6 border-2 border-zinc-700 border-t-zinc-400 rounded-full animate-spin" />
              <p className="mt-3 text-sm text-zinc-500">Loading...</p>
            </div>
          ) : githubData ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl font-semibold text-white">
                      {githubData.total?.lastYear || 0}
                    </span>
                    <span className="text-sm text-zinc-500 ml-2">
                      contributions in the last year
                    </span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-zinc-600 mr-1">Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="w-[10px] h-[10px] rounded-sm"
                      style={{ backgroundColor: getColor(level) }}
                    />
                  ))}
                  <span className="text-[10px] text-zinc-600 ml-1">More</span>
                </div>
              </div>

              {/* Grid */}
              <div ref={gridRef} className="relative overflow-x-auto pb-2">
                <div className="inline-block">
                  {/* Month Labels */}
                  <div className="flex mb-1.5" style={{ marginLeft: '28px' }}>
                    {weeks.map((_, weekIndex) => {
                      const monthLabel = monthLabels.find(m => m.weekIndex === weekIndex)
                      return (
                        <div key={weekIndex} className="flex-shrink-0" style={{ width: '13px' }}>
                          {monthLabel && (
                            <span className="text-[10px] text-zinc-600 whitespace-nowrap">
                              {monthLabel.label}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Grid */}
                  <div className="flex">
                    <div className="flex flex-col gap-[3px] mr-1.5">
                      {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                        <div key={i} className="h-[10px] flex items-center justify-end pr-1">
                          <span className="text-[9px] text-zinc-600 leading-none">{day}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-[3px]">
                      {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                          {week.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              onMouseEnter={(e) => handleCellHover(day, e)}
                              onMouseLeave={() => setHoveredDay(null)}
                              className="w-[10px] h-[10px] rounded-sm transition-transform duration-100 hover:scale-[1.4] cursor-pointer"
                              style={{ backgroundColor: day ? getColor(day.level) : 'rgba(255,255,255,0.02)' }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredDay && (
                  <div
                    className="absolute z-30 px-2.5 py-1.5 rounded-md pointer-events-none"
                    style={{
                      left: tooltipPos.x,
                      top: tooltipPos.y,
                      transform: 'translate(-50%, -100%)',
                      background: 'rgba(0, 0, 0, 0.95)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <p className="text-[11px] text-white whitespace-nowrap">
                      <span className="font-medium">{hoveredDay.count}</span>
                      <span className="text-zinc-400"> contribution{hoveredDay.count !== 1 ? 's' : ''}</span>
                    </p>
                    <p className="text-[10px] text-zinc-500">{formatDate(hoveredDay.date)}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-center">
                <a
                  href="https://github.com/ANIKETHPAWAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  View profile on GitHub
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-sm text-zinc-500">Unable to load contributions</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubContributions

