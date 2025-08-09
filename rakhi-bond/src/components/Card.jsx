import { useState } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'

export default function Card({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className="group relative rounded-xl bg-white/80 ring-1 ring-royalblue/10 hover:ring-royalblue/30 shadow-sm hover:shadow-md transition-shadow p-4">
      <p className="text-maroon/90 leading-relaxed">{text}</p>
      <button
        onClick={handleCopy}
        aria-label="Copy message"
        className="absolute top-2 right-2 inline-flex items-center gap-1 text-royalblue/80 hover:text-maroon px-2 py-1 rounded-md bg-offwhite/80 hover:bg-saffron/20 transition-colors"
      >
        {copied ? <FiCheck /> : <FiCopy />}
        <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  )
}