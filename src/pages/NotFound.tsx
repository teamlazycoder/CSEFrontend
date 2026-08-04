import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="font-mono text-8xl font-bold text-gradient">
        404
      </motion.p>
      <h1 className="font-display text-2xl font-bold text-primary dark:text-white mt-4">Page not found</h1>
      <p className="text-text-muted mt-2 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <div className="flex gap-3 mt-8">
        <Link to="/"><Button><Home className="w-4 h-4" /> Go Home</Button></Link>
        <Button variant="outline" onClick={() => window.history.back()}><ArrowLeft className="w-4 h-4" /> Go Back</Button>
      </div>
    </div>
  )
}
