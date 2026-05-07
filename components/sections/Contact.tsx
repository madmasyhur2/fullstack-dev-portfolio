'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personal } from '@/data/portfolio'
import emailjs from '@emailjs/browser'

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

type FormState = 'idle' | 'loading' | 'success' | 'error'
type EmailJSError = { status?: number; text?: string; message?: string }

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setFormState('loading')
    setErrorDetail('')
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        setErrorDetail('EmailJS env vars are not set. Check .env.local.')
        setFormState('error')
        return
      }

      await emailjs.send(
        serviceId,
        templateId,
        { from_name: name, reply_to: email, message: message },
        { publicKey }
      )
      setFormState('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      const ejsErr = err as EmailJSError
      const detail =
        ejsErr?.text
          ? `${ejsErr.status ?? ''} ${ejsErr.text}`.trim()
          : ejsErr?.message ?? JSON.stringify(err)
      console.error('EmailJS error:', err)
      setErrorDetail(detail)
      setFormState('error')
    }
  }

  const inputClass =
    'w-full bg-[#111111] border border-[#222220] rounded-lg px-4 py-3 text-sm text-[#F0EEE6] placeholder:text-[#4A4844] focus:outline-none focus:border-[#E8FF57]/50 transition-colors duration-150 font-sans'

  const contactLinks = [
    { icon: <Mail size={16} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <LinkedinIcon size={16} />, label: 'LinkedIn', value: 'muhammad-bin-djafar-almasyhur', href: personal.linkedin },
    { icon: <GithubIcon size={16} />, label: 'GitHub', value: 'madmasyhur2', href: personal.github },
  ]

  return (
    <section id="contact" className="py-24 border-t border-[#222220]" aria-label="Contact section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          / 06 — Contact
        </motion.p>
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-3">Let&apos;s build something together</h2>
          <p className="text-[#8A887F] text-base max-w-lg">Open to remote full-time roles, freelance projects, and interesting collaborations. Response within 24 hours.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, delay: 0.1 }}>
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 bg-[#111111] border border-[#222220] rounded-xl p-10 text-center min-h-[300px]">
                <div className="w-14 h-14 rounded-full bg-[#E8FF57]/10 flex items-center justify-center">
                  <CheckCircle size={28} className="text-[#E8FF57]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F0EEE6] mb-2">Message sent!</h3>
                  <p className="text-[#8A887F] text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button onClick={() => setFormState('idle')} className="text-xs font-mono text-[#E8FF57] hover:text-[#B8CC3A] underline underline-offset-4 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label htmlFor="from_name" className="block text-xs font-mono text-[#8A887F] mb-2 tracking-wide">Name</label>
                  <input id="from_name" name="from_name" type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} aria-label="Your name" />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-xs font-mono text-[#8A887F] mb-2 tracking-wide">Email</label>
                  <input id="reply_to" name="reply_to" type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} aria-label="Your email address" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#8A887F] mb-2 tracking-wide">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project or opportunity..." value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} resize-none`} aria-label="Your message" />
                </div>
                {formState === 'error' && (
                  <div className="flex flex-col gap-1.5 text-red-400 text-xs font-mono bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>Failed to send. Email me directly at {personal.email}</span>
                    </div>
                    {errorDetail && (
                      <span className="pl-5 text-red-300/70 break-all">
                        Reason: {errorDetail}
                      </span>
                    )}
                  </div>
                )}
                <button type="submit" disabled={formState === 'loading'} aria-label="Send message"
                  className="flex items-center justify-center gap-2 bg-[#E8FF57] text-[#0A0A0A] font-display font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#B8CC3A] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#E8FF57]">
                  {formState === 'loading' ? (
                    <><div className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send size={14} />Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, delay: 0.2 }} className="flex flex-col gap-4">
            <div className="bg-[#111111] border border-[#222220] rounded-xl p-6 flex flex-col gap-4">
              <p className="text-xs font-mono text-[#4A4844] uppercase tracking-widest">Direct links</p>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={`${link.label}: ${link.value}`} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#222220] flex items-center justify-center text-[#8A887F] group-hover:border-[#E8FF57]/30 group-hover:text-[#E8FF57] transition-all duration-150">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#4A4844] font-mono">{link.label}</p>
                    <p className="text-sm text-[#F0EEE6] group-hover:text-[#E8FF57] transition-colors duration-150 truncate max-w-[200px]">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <a href={personal.resumeUrl} download aria-label="Download Resume PDF"
              className="flex items-center justify-center gap-3 bg-[#E8FF57] text-[#0A0A0A] font-display font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#B8CC3A] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#E8FF57]">
              <Download size={16} />Download Resume PDF
            </a>
            <div className="bg-[#111111] border border-[#222220] rounded-xl p-6">
              <p className="text-xs font-mono text-[#4A4844] uppercase tracking-widest mb-2">Availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8FF57] animate-pulse-accent" />
                <p className="text-[#F0EEE6] text-sm">{personal.availability}</p>
              </div>
              <p className="text-[#4A4844] text-xs font-mono mt-2">{personal.location} · {personal.timezone}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
