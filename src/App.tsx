import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Activity, ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Camera, Check, Code2, Database, Download, FileCode2, Github, Globe2, Layers3, Linkedin, Mail, MapPin, Menu, Phone, Radio, Server, Sparkles, Truck, X } from 'lucide-react'

const navigation = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact']] as const
const contactEmail = 'kumarmadhan3033@gmail.com'
const opportunitySubject = encodeURIComponent('Software Developer Opportunity - Madhankumar Vetrivel')
const opportunityBody = encodeURIComponent(`Hello Madhankumar,

I came across your portfolio and would like to discuss a software development opportunity with you.

Regards,
[Your Name]`)
const opportunityMailto = `mailto:${contactEmail}?subject=${opportunitySubject}&body=${opportunityBody}`
const skillGroups = [
  { title: 'Programming', icon: Code2, skills: ['Java', 'Python', 'JavaScript'] },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', icon: Database, skills: ['SQL', 'MongoDB', 'Mongoose'] },
  { title: 'Web', icon: Globe2, skills: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Core', icon: Layers3, skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'Data Analytics'] },
  { title: 'Tools', icon: Braces, skills: ['Git', 'GitHub', 'Microsoft Excel'] },
]
const projects = [
  { number: '01', type: 'OPERATIONS · SERVICE MANAGEMENT', title: 'Truck Service Management System', description: 'A service-management concept for organizing truck requests, customer details, and workshop status in one place.', stack: ['Truck service', 'Management'], icon: Truck, tone: 'blue', visual: 'service', liveUrl: 'https://dadw-perundurai.onrender.com/' },
  { number: '02', type: 'ARTIFICIAL INTELLIGENCE · MONITORING', title: 'AI-Based Driver Behavior & Health Monitoring System', description: 'An AI and sensor-based concept bringing driver behavior signals and health indicators into view.', stack: ['AI', 'Driver behavior', 'Health'], icon: Activity, tone: 'violet', visual: 'health' },
  { number: '03', type: 'IOT · AUTOMOTIVE SAFETY', title: 'Alcohol Detection in Automobiles using IoT', description: 'An automotive safety concept showing how an alcohol sensor can interact with detection and ignition states.', stack: ['IoT', 'Automotive', 'Safety'], icon: Radio, tone: 'green', visual: 'vehicle' },
]
const easing = [0.22, 1, 0.36, 1] as const
const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: easing } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } } }
type IntroStage = 'boot' | 'streams' | 'binary' | 'code' | 'converge' | 'resolved' | 'sweep' | 'complete'

function ScrambledIdentity() {
  const textRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const identity = 'Madhankumar Vetrivel'
    const alphabet = '01{}[]<>/\|@#$%&*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let iteration = 0
    const interval = window.setInterval(() => {
      iteration += 1
      if (!textRef.current) return
      textRef.current.textContent = Array.from(identity, (character, index) => character === ' ' || index < iteration ? character : alphabet[Math.floor(Math.random() * alphabet.length)]).join('')
      if (iteration >= identity.length) {
        textRef.current.textContent = identity
        window.clearInterval(interval)
      }
    }, 40)
    return () => window.clearInterval(interval)
  }, [])
  return <span className="intro-scramble" ref={textRef}>const developer = true;</span>
}

function CinematicNameIntro({ stage, bounds }: { stage: IntroStage; bounds: DOMRect | null }) {
  if (!bounds || stage === 'boot' || stage === 'streams' || stage === 'complete') return null
  const codeStage = stage === 'code'
  const convergeStage = stage === 'converge'
  const resolvedStage = stage === 'resolved' || stage === 'sweep'
  const centerTop = bounds.top + bounds.height / 2
  return <motion.div className={`cinematic-intro cinematic-intro-${stage}`} style={{ left: bounds.left - 24, top: centerTop, width: Math.max(bounds.width + 48, 300) }} aria-hidden="true">
      {stage === 'binary' && <motion.div className="intro-binary" key="binary" initial={{ opacity: 0, scale: .84, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: .36, ease: easing }}>
        <span>01001101 01100001 01100100</span><span>01101000 01100001 01101110</span><span>01101011 01110101 01101101</span><span>01100001 01110010 01100101</span>
      </motion.div>}
      {codeStage && <motion.div className="intro-code" key="code" initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .38, ease: easing }}>
        <span><i>const</i> developer = <b>true</b>;</span><span><i>function</i> initialize() {'{'}</span><span>&nbsp;&nbsp;const name = <em>"Madhankumar"</em>;</span><span>{'}'} <i>return</i> developer;</span>
      </motion.div>}
      {convergeStage && <motion.div className="intro-converge" key="converge" initial={{ opacity: 0, scale: 1.12, filter: 'blur(9px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: .3, ease: easing }}><ScrambledIdentity /></motion.div>}
      {resolvedStage && <motion.div className={`intro-resolved${stage === 'sweep' ? ' has-sweep' : ''}`} key="resolved" initial={{ opacity: 0, scale: .97, filter: 'blur(8px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: .55, ease: easing }}><span>Madhankumar</span><span>Vetrivel</span>{stage === 'sweep' && <i className="intro-light-sweep" />}</motion.div>}
  </motion.div>
}

function SectionHeading({ number, eyebrow, title, accent }: { number: string; eyebrow: string; title: string; accent: string }) {
  return <div className="section-heading"><motion.p className="eyebrow" variants={reveal}><span className="section-number">{number}</span><span className="eyebrow-line" />{eyebrow}</motion.p><motion.h2 variants={reveal}>{title} <span>{accent}</span></motion.h2><motion.span className="heading-rule" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.75, delay: 0.13, ease: easing } }}} /></div>
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'service') return <div className="project-visual service-visual" aria-label="Conceptual dashboard visual, not a screenshot"><div className="mock-window-bar"><span className="window-dots"><i /><i /><i /></span><span>FLEET / SERVICE OVERVIEW</span><span className="mock-live"><i /> LIVE VIEW</span></div><div className="service-dashboard"><div className="dashboard-title"><div><small>WORKSHOP OPERATIONS</small><strong>Service requests</strong></div><span className="dashboard-date">TODAY <ArrowDown size={11} /></span></div><div className="service-table-head"><span>TRUCK ID</span><span>CUSTOMER</span><span>STATUS</span></div><div className="service-row"><span className="truck-id"><Truck size={13} /> TRK-204</span><span>Northline</span><span className="service-status status-progress"><i /> In progress</span></div><div className="service-row"><span className="truck-id"><Truck size={13} /> TRK-118</span><span>Roadway Co.</span><span className="service-status status-pending"><i /> Pending</span></div><div className="service-row"><span className="truck-id"><Truck size={13} /> TRK-392</span><span>Fleetworks</span><span className="service-status status-ready"><i /> Ready</span></div><div className="workshop-strip"><span><i /> WORKSHOP FLOOR</span><span>3 REQUESTS <ArrowUpRight size={11} /></span></div></div></div>
  if (type === 'health') return <div className="project-visual health-visual" aria-label="Illustrative camera and sensor concept, not a project screenshot"><div className="health-topline"><span><i /> SENSOR ARRAY</span><span>ILLUSTRATIVE PREVIEW</span></div><div className="camera-stage"><div className="camera-grid" /><div className="scan-beam" /><div className="face-frame"><i /><i /><i /><i /><span className="face-detection">FACE DETECTION</span></div><span className="camera-label"><Camera size={12} /> CABIN CAM</span><span className="scan-coordinates">SENSOR / ACTIVE</span></div><div className="health-metrics"><div className="health-metric"><span><Activity size={12} /> HEART RATE</span><strong>-- <small>BPM</small></strong><div className="pulse-line"><i /></div></div><div className="health-metric"><span><Sparkles size={12} /> SpO₂</span><strong>--<small>%</small></strong><div className="oxygen-line">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div></div></div></div>
  return <div className="project-visual vehicle-visual" aria-label="Illustrative vehicle sensor and ignition flow, not a project screenshot"><div className="vehicle-topline"><span><Radio size={13} /> IOT SAFETY SYSTEM</span><span>ILLUSTRATIVE PREVIEW</span></div><div className="vehicle-stage"><div className="vehicle-rings" /><div className="vehicle-line-art"><Truck size={102} strokeWidth={0.85} /><span className="vehicle-sensor"><Radio size={14} /></span></div><span className="sensor-wave wave-one" /><span className="sensor-wave wave-two" /></div><div className="safety-flow"><div className="flow-node"><span className="flow-icon"><Radio size={14} /></span><small>ALCOHOL SENSOR</small><strong>Input</strong></div><ArrowRight size={14} /><div className="flow-node flow-detected"><span className="flow-icon"><Check size={14} /></span><small>DETECTION</small><strong>Monitor</strong></div><ArrowRight size={14} /><div className="flow-node"><span className="flow-icon"><Sparkles size={14} /></span><small>IGNITION</small><strong>Safety state</strong></div></div></div>
}

function ProjectCard({ project, index, reducedMotion }: { project: typeof projects[number]; index: number; reducedMotion: boolean }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const smoothX = useSpring(rotateX, { stiffness: 170, damping: 22, mass: 0.6 })
  const smoothY = useSpring(rotateY, { stiffness: 170, damping: 22, mass: 0.6 })
  return <motion.article className={`project-card tone-${project.tone}`} variants={reveal} style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 950 }} onPointerMove={(event) => { if (reducedMotion || event.pointerType !== 'mouse' || innerWidth <= 760) return; const rect = event.currentTarget.getBoundingClientRect(); rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5); rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5); event.currentTarget.style.setProperty('--glow-x', `${((event.clientX - rect.left) / rect.width) * 100}%`); event.currentTarget.style.setProperty('--glow-y', `${((event.clientY - rect.top) / rect.height) * 100}%`) }} onPointerLeave={(event) => { rotateX.set(0); rotateY.set(0); event.currentTarget.style.setProperty('--glow-x', '100%'); event.currentTarget.style.setProperty('--glow-y', '0%') }} whileHover={reducedMotion ? undefined : { y: -7, transition: { type: 'spring', stiffness: 260, damping: 23 } }} whileTap={{ scale: 0.99 }} data-cursor-hover>
    <div className="project-card-glow" /><div className="project-top"><span className="project-number">/{project.number}</span><project.icon size={18} strokeWidth={1.5} /></div><ProjectVisual type={project.visual} /><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions"><a className="project-action project-action-github" href="https://github.com/Madhankumar2026" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} data-cursor-hover><Github size={14} /><span>GitHub</span></a>{'liveUrl' in project && project.liveUrl && <motion.a className="project-action project-action-demo" href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={reducedMotion ? undefined : { y: -2, boxShadow: '0 7px 19px rgba(135,170,255,.2)' }} whileTap={{ scale: 0.97 }} aria-label={`Open live demo of ${project.title}`} data-cursor-hover><span>Live Demo</span><ArrowRight size={14} /></motion.a>}</div></div><span className="project-index">PROJECT / {String(index + 1).padStart(2, '0')}</span>
  </motion.article>
}

type CodeStream = {
  x: number
  y: number
  speed: number
  spacing: number
  fontSize: number
  opacity: number
  blur: number
  drift: number
  angle: number
  acceleration: number
  phase: number
  layer: number
  tokens: string[]
  color: string
}

const codeFragments = [
  '01010101', '01101001', '10110101', '01100110', '0x4F2A', '0x7C10',
  'const dev = true;', 'function init()', 'while(true)', 'API.fetch()', '=> {}',
  'import React', 'npm install', '{ code }', '</>', '[]', '&&', '0b1010',
  'return data;', 'async () =>', 'let state = 1;', 'node --run', '01 10 11',
]

const codePalettes = ['#86b7ff', '#73d5e8', '#a79bf1', '#7fc8d5', '#bd91de', '#d98bd5']

function CodeStreamBackground({ reducedMotion }: { reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context) return

    let animationFrame = 0
    let lastDraw = 0
    let elapsed = 0
    let viewportWidth = 0
    let viewportHeight = 0
    let pixelRatio = 1
    let streams: CodeStream[] = []
    let particles: { x: number; y: number; radius: number; opacity: number; phase: number }[] = []
    let protectedAreas: { rect: DOMRect; opacity: number }[] = []
    let measureCount = 0
    let pointerTargetX = 0
    let pointerTargetY = 0
    let pointerDriftX = 0
    let pointerDriftY = 0
    let pageVisible = document.visibilityState === 'visible'
    let lowPerformanceFrames = 0
    let recoveredFrames = 0
    let quality = 1
    let frameInterval = 1000 / 60
    let sectionIntensity = 0.82
    const textWidthCache = new Map<string, number>()

    const random = (minimum: number, maximum: number) => minimum + Math.random() * (maximum - minimum)
    const makeStream = (x?: number): CodeStream => {
      const layer = Math.random() < 0.34 ? 0 : Math.random() < 0.68 ? 1 : 2
      const depth = [0.68, 1, 1.34][layer]
      const length = Math.floor(random(4, layer === 0 ? 9 : 12))
      return {
        x: x ?? random(-12, viewportWidth + 12),
        y: random(-viewportHeight * 0.18, viewportHeight * 1.05),
        speed: random(35, 76) * depth,
        spacing: random(18, 29) * depth,
        fontSize: Math.round(random(10, 14) * depth * 2) / 2,
        opacity: random(layer === 0 ? 0.13 : layer === 1 ? 0.42 : 0.66, layer === 0 ? 0.2 : layer === 1 ? 0.63 : 0.9) * (layer === 0 ? 0.72 : 1),
        blur: layer === 0 ? random(2.6, 4.8) : layer === 1 ? random(0.8, 1.7) : random(0, 0.25),
        drift: random(-10, 10),
        angle: random(-0.12, 0.12),
        acceleration: random(0.2, 1.1),
        phase: random(0, Math.PI * 2),
        layer,
        tokens: Array.from({ length }, () => codeFragments[Math.floor(Math.random() * codeFragments.length)]),
        color: codePalettes[Math.floor(Math.random() * codePalettes.length)],
      }
    }

    const resize = () => {
      viewportWidth = window.innerWidth
      viewportHeight = window.innerHeight
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(viewportWidth * pixelRatio)
      canvas.height = Math.round(viewportHeight * pixelRatio)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      const mobile = viewportWidth <= 600
      const tablet = viewportWidth <= 960
      const count = mobile ? 12 : tablet ? 24 : 40
      canvas.dataset.streamCount = String(count)
      streams = Array.from({ length: count }, () => makeStream())
      const particleCount = mobile ? 8 : tablet ? 14 : 24
      particles = Array.from({ length: particleCount }, () => ({ x: random(0, viewportWidth), y: random(0, viewportHeight), radius: random(0.5, 1.1), opacity: random(0.08, 0.22), phase: random(0, Math.PI * 2) }))
    }

    const measureProtection = () => {
      const name = document.querySelector('.hero-name')
      const copy = document.querySelector('.hero-copy')
      const portrait = document.querySelector('.hero-visual')
      protectedAreas = [
        { element: name, opacity: 0.025, padding: 28 },
        { element: copy, opacity: 0.11, padding: 12 },
        { element: portrait, opacity: 0.035, padding: 10 },
      ].filter((area) => area.element).map(({ element, opacity, padding }) => {
        const rect = element!.getBoundingClientRect()
        return { rect: new DOMRect(rect.left - padding, rect.top - padding, rect.width + padding * 2, rect.height + padding * 2), opacity }
      })

      const viewportMidpoint = window.innerHeight * 0.5
      const visibleSection = [...document.querySelectorAll<HTMLElement>('#main-content > section, #home')]
        .find((section) => {
          const rect = section.getBoundingClientRect()
          return rect.top <= viewportMidpoint && rect.bottom > viewportMidpoint
        })
      const intensityBySection: Record<string, number> = { home: 1, about: 0.78, skills: 0.82, projects: 0.92, experience: 0.8, education: 0.78, contact: 0.94 }
      sectionIntensity = visibleSection ? intensityBySection[visibleSection.id] ?? 0.82 : 0.78
    }

    const draw = (timestamp: number) => {
      animationFrame = 0
      if (!context) return
      if (!pageVisible) return
      if (!reducedMotion && timestamp - lastDraw < frameInterval) {
        animationFrame = window.requestAnimationFrame(draw)
        return
      }
      const frameTime = lastDraw ? timestamp - lastDraw : 1000 / 60
      const delta = Math.min(frameTime / 1000, 0.05)
      lastDraw = timestamp
      elapsed += delta
      context.clearRect(0, 0, viewportWidth, viewportHeight)
      measureCount += 1
      if (measureCount % 8 === 0 || protectedAreas.length === 0) measureProtection()

      if (!reducedMotion) {
        if (frameTime > 38) {
          lowPerformanceFrames += 1
          recoveredFrames = 0
        } else if (frameTime < 26) {
          recoveredFrames += 1
          lowPerformanceFrames = Math.max(0, lowPerformanceFrames - 1)
        }
        if (quality === 1 && lowPerformanceFrames >= 24) {
          quality = 0.55
          frameInterval = 1000 / 30
          canvas.dataset.performanceFallback = '30fps-half-draw'
        } else if (quality < 1 && recoveredFrames >= 150) {
          quality = 1
          frameInterval = 1000 / 60
          lowPerformanceFrames = 0
          delete canvas.dataset.performanceFallback
        }
      }

      const streamEntrance = reducedMotion ? 0.28 : 0.18 + Math.min(elapsed / 1.8, 1) * 0.82
      const introDim = (document.body.classList.contains('cinematic-intro-active') ? 0.78 : 1) * sectionIntensity
      pointerDriftX += (pointerTargetX - pointerDriftX) * 0.025
      pointerDriftY += (pointerTargetY - pointerDriftY) * 0.025
      streams.forEach((stream, streamIndex) => {
        if (quality < 1 && streamIndex % 2 === 1) return
        const speedPulse = 1 + Math.max(0, Math.sin(elapsed * stream.acceleration + stream.phase)) * 0.58
        if (!reducedMotion) stream.y += stream.speed * speedPulse * delta
        const sway = reducedMotion ? 0 : Math.sin(elapsed * 0.32 + stream.phase) * stream.drift + pointerDriftX * (stream.layer + 1) * 0.28
        const parallaxY = reducedMotion ? 0 : pointerDriftY * (stream.layer + 1) * 0.16
        const tailLength = stream.tokens.length * stream.spacing
        if (stream.y - tailLength > viewportHeight + 30 && !reducedMotion) {
          Object.assign(stream, makeStream(random(-12, viewportWidth + 12)))
          stream.y = -random(20, viewportHeight * 0.65)
        }
        context.save()
        context.font = `${stream.layer === 2 ? 500 : 400} ${stream.fontSize}px "DM Mono", monospace`
        context.textBaseline = 'top'
        context.shadowColor = stream.color
        context.shadowBlur = quality < 1 ? 3 : [3, 5, 7][stream.layer]
        const trailX = stream.x + sway + pointerDriftX * (stream.layer + 1) * 0.28
        const trailTop = stream.y - tailLength + parallaxY
        context.beginPath()
        context.moveTo(trailX, trailTop)
        context.lineTo(trailX + Math.tan(stream.angle) * tailLength, stream.y + stream.fontSize + parallaxY)
        context.strokeStyle = stream.color
        context.lineWidth = stream.layer === 2 ? 1.25 : 0.8
        context.globalAlpha = stream.opacity * streamEntrance * introDim * (stream.layer === 0 ? 0.17 : 0.26)
        context.stroke()
        context.shadowBlur = quality < 1 ? 2 : (stream.layer === 2 ? 5 : 3)
        const tokenLimit = quality < 1 ? Math.ceil(stream.tokens.length * 0.68) : stream.tokens.length
        stream.tokens.slice(0, tokenLimit).forEach((token, tokenIndex) => {
          const y = stream.y - tokenIndex * stream.spacing + parallaxY
          if (y < -stream.spacing || y > viewportHeight + stream.spacing) return
          const x = stream.x + sway + Math.sin(tokenIndex * 0.7 + stream.phase) * stream.drift * 0.16 + Math.tan(stream.angle) * tokenIndex * stream.spacing
          const widthKey = `${stream.fontSize}|${token}`
          let cachedWidth = textWidthCache.get(widthKey)
          if (cachedWidth === undefined) {
            cachedWidth = Math.min(context.measureText(token).width, 160)
            textWidthCache.set(widthKey, cachedWidth)
            if (textWidthCache.size > 1800) textWidthCache.clear()
          }
          const tokenWidth = cachedWidth
          let protectedOpacity = 1
          protectedAreas.forEach(({ rect, opacity }) => {
            if (x < rect.right && x + tokenWidth > rect.left && y < rect.bottom && y + stream.fontSize > rect.top) protectedOpacity = Math.min(protectedOpacity, opacity)
          })
          const tailProgress = tokenIndex / Math.max(stream.tokens.length - 1, 1)
          const tailFade = Math.pow(1 - tailProgress, 1.35) * 0.9 + 0.055
          context.globalAlpha = stream.opacity * tailFade * streamEntrance * introDim * protectedOpacity
          context.fillStyle = tokenIndex === 0 ? '#e4faff' : stream.color
          context.fillText(token, x, y, 160)
          if (tokenIndex === 0 && stream.layer === 2 && quality === 1) {
            context.shadowBlur = 0
            context.globalAlpha *= 0.62
            context.fillStyle = '#ffffff'
            context.fillText(token, x, y, 160)
            context.shadowBlur = 5
          }
        })
        context.restore()
      })

      context.save()
      particles.forEach((particle) => {
        if (!reducedMotion) particle.phase += delta * 0.32
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(168, 196, 255, ${particle.opacity * (0.7 + Math.sin(particle.phase) * 0.3)})`
        context.fill()
      })
      context.restore()

      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      textWidthCache.clear()
      if (reducedMotion) {
        measureProtection()
        draw(0)
      }
    }

    const handleVisibility = () => {
      pageVisible = document.visibilityState === 'visible'
      if (!pageVisible) {
        window.cancelAnimationFrame(animationFrame)
        animationFrame = 0
      } else if (!reducedMotion) {
        lastDraw = 0
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    resize()
    measureProtection()
    if (reducedMotion) draw(0)
    else animationFrame = window.requestAnimationFrame(draw)
    const desktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateParallax = (event: MouseEvent) => {
      pointerTargetX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 10
      pointerTargetY = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 8
    }
    if (!reducedMotion && desktopPointer.matches) window.addEventListener('mousemove', updateParallax, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', updateParallax)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} className="code-stream-canvas" aria-hidden="true" />
}

function App() {
  const reducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const heroNameRef = useRef<HTMLHeadingElement>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursorActive, setCursorActive] = useState(false)
  const [cursorHover, setCursorHover] = useState(false)
  const [introStage, setIntroStage] = useState<IntroStage>('boot')
  const [introBounds, setIntroBounds] = useState<DOMRect | null>(null)
  const pointerX = useMotionValue(-100); const pointerY = useMotionValue(-100)
  const cursorX = useSpring(pointerX, { stiffness: 140, damping: 22, mass: 0.3 }); const cursorY = useSpring(pointerY, { stiffness: 140, damping: 22, mass: 0.3 })
  const glowX = useSpring(pointerX, { stiffness: 48, damping: 24, mass: 1.2 }); const glowY = useSpring(pointerY, { stiffness: 48, damping: 24, mass: 1.2 })
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.25 })
  const backOpacity = useTransform(progress, [0, 0.025], [0, 1]); const backY = useTransform(progress, [0, 0.025], [12, 0])

  useEffect(() => {
    if (reducedMotion) {
      setIntroStage('complete')
      document.body.classList.remove('cinematic-intro-active')
      return
    }

    document.body.classList.add('cinematic-intro-active')
    let disposed = false
    const measureName = () => {
      if (disposed) return
      const rect = heroNameRef.current?.getBoundingClientRect()
      const heroRect = heroRef.current?.getBoundingClientRect()
      if (rect && heroRect && rect.width > 0 && rect.height > 0) setIntroBounds(new DOMRect(rect.left - heroRect.left, rect.top - heroRect.top, rect.width, rect.height))
    }
    const measureFrame = window.requestAnimationFrame(measureName)
    window.addEventListener('resize', measureName, { passive: true })
    document.fonts?.ready.then(measureName)

    const stages: [number, IntroStage][] = [[800, 'streams'], [1000, 'binary'], [1000, 'code'], [1000, 'converge'], [800, 'resolved'], [600, 'sweep'], [600, 'complete']]
    let stageIndex = 0
    let remainingDelay = stages[0][0]
    let stageStartedAt = 0
    let stageTimer = 0
    const scheduleStage = () => {
      if (document.visibilityState !== 'visible' || stageIndex >= stages.length) return
      stageStartedAt = performance.now()
      stageTimer = window.setTimeout(() => {
        const [, stage] = stages[stageIndex]
        setIntroStage(stage)
        stageIndex += 1
        if (stage === 'complete') {
          document.body.classList.remove('cinematic-intro-active')
          return
        }
        remainingDelay = stages[stageIndex][0]
        scheduleStage()
      }, remainingDelay)
    }
    const handleIntroVisibility = () => {
      if (document.visibilityState === 'hidden' && stageTimer) {
        window.clearTimeout(stageTimer)
        remainingDelay = Math.max(0, remainingDelay - (performance.now() - stageStartedAt))
        stageTimer = 0
      } else if (document.visibilityState === 'visible' && !stageTimer) {
        scheduleStage()
      }
    }
    scheduleStage()
    document.addEventListener('visibilitychange', handleIntroVisibility)

    return () => {
      disposed = true
      window.cancelAnimationFrame(measureFrame)
      window.removeEventListener('resize', measureName)
      window.clearTimeout(stageTimer)
      document.removeEventListener('visibilitychange', handleIntroVisibility)
      document.body.classList.remove('cinematic-intro-active')
    }
  }, [reducedMotion])

  useEffect(() => {
    const sections = navigation.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActiveSection(visible.target.id) }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] })
    sections.forEach((section) => observer.observe(section))
    const updateScroll = () => setScrolled(window.scrollY > 24)
    updateScroll(); window.addEventListener('scroll', updateScroll, { passive: true })
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updatePointerMode = () => {
      const enabled = finePointer.matches && !reducedMotion
      setCursorActive(enabled)
      document.body.classList.toggle('cursor-enabled', enabled)
    }
    updatePointerMode(); finePointer.addEventListener('change', updatePointerMode)
    const onMouseMove = (event: MouseEvent) => { pointerX.set(event.clientX); pointerY.set(event.clientY) }
    const onPointerOver = (event: PointerEvent) => setCursorHover(Boolean((event.target as HTMLElement | null)?.closest('a, button, [data-cursor-hover]')))
    const onPointerOut = (event: PointerEvent) => { if ((event.target as HTMLElement | null)?.closest('a, button, [data-cursor-hover]')) setCursorHover(false) }
    if (finePointer.matches && !reducedMotion) { window.addEventListener('mousemove', onMouseMove, { passive: true }); document.addEventListener('pointerover', onPointerOver, { passive: true }); document.addEventListener('pointerout', onPointerOut, { passive: true }) }
    return () => { observer.disconnect(); window.removeEventListener('scroll', updateScroll); finePointer.removeEventListener('change', updatePointerMode); window.removeEventListener('mousemove', onMouseMove); document.removeEventListener('pointerover', onPointerOver); document.removeEventListener('pointerout', onPointerOut); document.body.classList.remove('cursor-enabled') }
  }, [pointerX, pointerY, reducedMotion])

  const closeMenu = () => setMenuOpen(false)
  return <div className="site-shell">
    <CodeStreamBackground reducedMotion={Boolean(reducedMotion)} />
    <motion.div className="page-reveal" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.62, ease: 'easeOut' }} aria-hidden="true" /><motion.div className="scroll-progress" style={{ scaleX: progress }} />
    {cursorActive && <><motion.div className="cursor-glow" style={{ x: glowX, y: glowY }} aria-hidden="true" /><motion.div className={`custom-cursor${cursorHover ? ' is-hovering' : ''}`} style={{ x: cursorX, y: cursorY }} aria-hidden="true" /></>}

    <a className="skip-link" href="#main-content">Skip to content</a>
    <motion.header className={`site-header${scrolled ? ' is-scrolled' : ''}`} initial={reducedMotion ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: easing }}>
      <a className="brand" href="#home" aria-label="MK, home" onClick={closeMenu} data-cursor-hover><span className="brand-mark">MK<span className="brand-mark-light" /></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined} href={`#${id}`} onClick={closeMenu} data-cursor-hover>{label}{activeSection === id && <motion.span className="nav-indicator" layoutId="nav-indicator" transition={{ type: 'spring', stiffness: 450, damping: 35 }} />}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu} data-cursor-hover>Let’s talk <ArrowUpRight size={14} /></a></nav>
    </motion.header>

    <main id="main-content">
      <section ref={heroRef} className="hero section-shell" id="home">
        <div className="ambient ambient-blue" aria-hidden="true" /><div className="ambient ambient-violet" aria-hidden="true" />
        {!reducedMotion && introStage !== 'complete' && <CinematicNameIntro stage={introStage} bounds={introBounds} />}
        <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
          <motion.p className="eyebrow hero-eyebrow" variants={reveal}><span className="eyebrow-line" /> Hello, I’m</motion.p>
          <motion.h1 ref={heroNameRef} className={`hero-name${!reducedMotion && ['binary', 'code', 'converge', 'resolved', 'sweep'].includes(introStage) ? ' is-decoding' : ''}`} variants={stagger}><motion.span variants={reveal}>Madhankumar</motion.span><motion.span className="name-highlight" variants={reveal}>Vetrivel</motion.span></motion.h1>
          <motion.p className="hero-role" variants={reveal}><span>Aspiring Software Developer</span><i /></motion.p>
          <motion.p className="hero-description" variants={reveal}>Building practical software solutions with Java, Python, backend technologies and modern web development.</motion.p>
          <motion.div className="hero-actions" variants={stagger}><motion.a className="button button-primary" href="#projects" variants={reveal} whileHover={reducedMotion ? undefined : { y: -3, boxShadow: '0 10px 30px rgba(155,178,255,.23)' }} whileTap={{ scale: 0.97 }} data-cursor-hover>View my work <ArrowDownRight size={16} /></motion.a><motion.a className="button button-secondary" href="/Madhankumar-V-Resume.txt" download variants={reveal} whileHover={reducedMotion ? undefined : { y: -3, borderColor: 'rgba(169,189,255,.55)' }} whileTap={{ scale: 0.97 }} data-cursor-hover>Download resume <Download size={15} /></motion.a></motion.div>
          <motion.div className="hero-socials" aria-label="Social links" variants={stagger}><motion.a href="https://github.com/Madhankumar2026" target="_blank" rel="noreferrer" aria-label="GitHub" variants={reveal} whileHover={{ y: -3 }} data-cursor-hover><Github size={17} /></motion.a><motion.a href="https://linkedin.com/in/madhan-kumar-a65012330/" target="_blank" rel="noreferrer" aria-label="LinkedIn" variants={reveal} whileHover={{ y: -3 }} data-cursor-hover><Linkedin size={17} /></motion.a><motion.a href={`mailto:${contactEmail}`} aria-label="Email" variants={reveal} whileHover={{ y: -3 }} data-cursor-hover><Mail size={17} /></motion.a><span className="social-divider" /><span className="social-location"><MapPin size={13} /> Erode, India</span></motion.div>
        </motion.div>
        <motion.div className="hero-visual" aria-label="Portrait of Madhankumar Vetrivel" initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ opacity: { duration: 0.9, delay: 0.75 }, scale: { duration: 1.15, delay: 0.72, ease: easing }, y: { duration: 1.15, delay: 0.72, ease: easing } }}>
          <motion.div className="portrait-halo" animate={reducedMotion ? undefined : { scale: [0.98, 1.04, 0.98], opacity: [0.48, 0.73, 0.48] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="portrait-wrap" animate={reducedMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut' }}><img className="portrait-image" src="/profile.png" alt="Madhankumar Vetrivel" /></motion.div>
          <motion.div className="portrait-spark spark-one" animate={reducedMotion ? undefined : { y: [0, -8, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>✦</motion.div><motion.div className="portrait-spark spark-two" animate={reducedMotion ? undefined : { y: [0, 7, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}>✧</motion.div>
          <motion.div className="tech-float tech-java" animate={reducedMotion ? undefined : { y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><span className="tech-symbol java-symbol">J</span><span>Java</span></motion.div><motion.div className="tech-float tech-python" animate={reducedMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}><span className="tech-symbol python-symbol">Py</span><span>Python</span></motion.div><motion.div className="tech-float tech-node" animate={reducedMotion ? undefined : { y: [0, -4, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><span className="tech-symbol node-symbol">N</span><span>Node.js</span></motion.div><motion.div className="tech-float tech-mongo" animate={reducedMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}><span className="tech-symbol mongo-symbol">M</span><span>MongoDB</span></motion.div><span className="visual-index">01 / 07</span>
        </motion.div>
        <motion.a className="scroll-cue" href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35, duration: 0.5 }} data-cursor-hover><span>Scroll to explore</span><ArrowDown size={15} /></motion.a>
      </section>

      <motion.section className="about section-shell section-pad" id="about" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}><SectionHeading number="01" eyebrow="The person behind the code" title="A little" accent="about me." /><div className="about-grid"><motion.div className="about-main" variants={reveal}><p className="about-lead">I’m a final-year Information Technology student focused on building practical software solutions and strengthening my skills in software development.</p><p className="about-detail">My foundation spans Java, Python, SQL, data structures and algorithms, and object-oriented programming. I’m also building hands-on experience with Node.js, Express.js, MongoDB, REST APIs, web development, and Python-based AI projects.</p><a className="text-link" href="#education" data-cursor-hover>More about my journey <ArrowRight size={15} /></a></motion.div><motion.div className="stats-grid" variants={stagger}><motion.div className="stat-cell" variants={reveal}><strong>01</strong><span>B.Tech IT</span></motion.div><motion.div className="stat-cell" variants={reveal}><strong>7.57</strong><span>CGPA</span></motion.div><motion.div className="stat-cell" variants={reveal}><strong>03</strong><span>Major projects</span></motion.div><motion.div className="stat-cell" variants={reveal}><strong>01</strong><span>Internship</span></motion.div></motion.div></div><motion.div className="about-meta" variants={reveal}><span><MapPin size={14} /> Perundurai, Erode, Tamil Nadu</span><span className="meta-divider" /><span>Currently pursuing · 2023—2027</span></motion.div></motion.section>

      <motion.section className="skills section-pad" id="skills" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}><div className="section-shell"><SectionHeading number="02" eyebrow="Tools of the trade" title="My working" accent="toolkit." /><motion.p className="heading-note" variants={reveal}>A growing set of skills for building, debugging, and shipping useful software.</motion.p><motion.div className="skills-grid" variants={stagger}>{skillGroups.map(({ title, icon: Icon, skills }) => <motion.article className="skill-card" key={title} variants={reveal} whileHover={reducedMotion ? undefined : { y: -5, transition: { type: 'spring', stiffness: 280, damping: 22 } }} data-cursor-hover><div className="skill-card-head"><motion.span className="skill-icon" whileHover={reducedMotion ? undefined : { rotate: -8, scale: 1.08 }}><Icon size={17} /></motion.span><span className="skill-count">{String(skills.length).padStart(2, '0')}</span></div><h3>{title}</h3><ul>{skills.map((skill) => <li key={skill}><span className="skill-bullet" />{skill}</li>)}</ul></motion.article>)}</motion.div></div></motion.section>

      <motion.section className="projects section-shell section-pad" id="projects" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}><SectionHeading number="03" eyebrow="Selected work · conceptual previews" title="Selected" accent="work." /><motion.a className="text-link project-github" href="https://github.com/Madhankumar2026" target="_blank" rel="noreferrer" variants={reveal} data-cursor-hover>Explore GitHub <ArrowUpRight size={15} /></motion.a><motion.div className="projects-grid" variants={stagger}>{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} reducedMotion={Boolean(reducedMotion)} />)}</motion.div><motion.p className="project-note" variants={reveal}>Project previews are conceptual visual representations, not screenshots. Visit GitHub for repository details and implementation.</motion.p></motion.section>

      <motion.section className="experience section-pad" id="experience" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.17 }}><div className="section-shell experience-grid"><div className="section-heading"><motion.p className="eyebrow" variants={reveal}><span className="section-number">04</span><span className="eyebrow-line" />Learning by doing</motion.p><motion.h2 variants={reveal}>Experience &amp;<br /><span>growth.</span></motion.h2><motion.span className="heading-rule" variants={reveal} /><motion.p className="experience-intro" variants={reveal}>Practical learning through internship exposure, independent projects, and consistent problem solving.</motion.p></div><motion.div className="timeline" variants={stagger}><motion.article className="timeline-item" variants={reveal}><span className="timeline-marker" /><div className="timeline-meta"><span>INTERNSHIP</span><span>01 EXPERIENCE</span></div><h3>Internship experience</h3><p>Professional exposure alongside ongoing development of software engineering skills.</p><span className="timeline-note">Role, organization, and dates not provided</span></motion.article><motion.article className="timeline-item" variants={reveal}><span className="timeline-marker" /><div className="timeline-meta"><span>PROJECT WORK</span><span>ONGOING</span></div><h3>Building practical applications</h3><p>Working across backend and web applications, REST APIs, database-driven software, and Python-based AI projects.</p><span className="timeline-note">Java · Python · Node.js · MongoDB</span></motion.article></motion.div></div></motion.section>

      <motion.section className="education section-shell section-pad" id="education" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}><SectionHeading number="05" eyebrow="The academic foundation" title="Education &" accent="focus." /><div className="education-timeline"><motion.article className="education-row" variants={reveal}><div className="education-index">01</div><div className="education-years">2023 <span>—</span> 2027</div><div className="education-details"><span className="education-label">BACHELOR OF TECHNOLOGY · INFORMATION TECHNOLOGY</span><h3>Nandha College of Technology</h3><p>Final-year student · Perundurai, Erode, Tamil Nadu</p></div><div className="education-score"><strong>7.57</strong><span>CGPA</span></div></motion.article><motion.article className="education-row" variants={reveal}><div className="education-index">02</div><div className="education-years">2022 <span>—</span> 2023</div><div className="education-details"><span className="education-label">HIGHER SECONDARY CERTIFICATE · HSC</span><h3>Karunya Vidhya Bhavan Matriculation Higher Secondary School</h3></div><div className="education-score"><strong>75.3%</strong><span>PERCENTAGE</span></div></motion.article></div><motion.div className="focus-strip" variants={reveal}><span>Current focus</span><p>Core computer science <i /> Backend development <i /> Practical problem solving <i /> AI projects</p></motion.div></motion.section>

      <motion.section className="contact section-pad" id="contact" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><div className="section-shell contact-inner"><div className="contact-copy"><motion.p className="eyebrow" variants={reveal}><span className="section-number">06</span><span className="eyebrow-line" />Have a role or project in mind?</motion.p><motion.h2 variants={reveal}>Let’s build<br /><span>something useful.</span></motion.h2><motion.p variants={reveal}>I’m open to opportunities where I can keep learning and contribute to thoughtful software.</motion.p><motion.a className="button button-primary" href={opportunityMailto} variants={reveal} whileHover={reducedMotion ? undefined : { y: -3, boxShadow: '0 10px 30px rgba(155,178,255,.23)' }} whileTap={{ scale: 0.97 }} data-cursor-hover>Start a conversation <ArrowUpRight size={16} /></motion.a></div><motion.div className="contact-details" variants={stagger}><motion.a href={`mailto:${contactEmail}`} variants={reveal} data-cursor-hover><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small>{contactEmail}</span><ArrowUpRight size={15} /></motion.a><motion.a href="tel:+916382305430" variants={reveal} data-cursor-hover><span className="contact-icon"><Phone size={17} /></span><span><small>PHONE</small>+91 63823 05430</span><ArrowUpRight size={15} /></motion.a><motion.a href="https://linkedin.com/in/madhan-kumar-a65012330/" target="_blank" rel="noreferrer" variants={reveal} data-cursor-hover><span className="contact-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small>madhan-kumar-a65012330</span><ArrowUpRight size={15} /></motion.a></motion.div></div></motion.section>
    </main>

    <footer className="site-footer section-shell"><a className="brand" href="#home" aria-label="MK, back to home" data-cursor-hover><span className="brand-mark">MK<span className="brand-mark-light" /></span></a><span>Designed with intention. Built to keep growing.</span><a href="#home" className="back-top" data-cursor-hover>Back to top <ArrowUpRight size={14} /></a></footer>
    <motion.button className="floating-back-top" type="button" aria-label="Back to top" style={{ opacity: backOpacity, y: backY, pointerEvents: scrolled ? 'auto' : 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })} data-cursor-hover><ArrowUpRight size={17} /></motion.button>
  </div>
}

export default App