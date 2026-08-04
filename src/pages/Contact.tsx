import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Add a short subject'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
})
type FormData = z.infer<typeof schema>

const CONTACTS = [
  { icon: MapPin, label: 'Address', value: 'Vishnupuri, Nanded, Maharashtra 431606' },
  { icon: Mail, label: 'Email', value: 'cse@sggs.ac.in' },
  { icon: Phone, label: 'Phone', value: '+91 2462 229 500' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 9:30 AM – 5:30 PM' },
]

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 900))
    toast.success('Message sent — we\'ll respond within 2 business days.')
    reset()
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to the department." description="Admissions questions, collaboration proposals, or press inquiries — reach us directly." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr,1.2fr] gap-10">
        <div className="space-y-5">
          {CONTACTS.map((c) => (
            <Card key={c.label} className="p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center shrink-0">
                <c.icon className="w-4.5 h-4.5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-text-muted">{c.label}</p>
                <p className="text-sm font-medium text-primary dark:text-white mt-0.5">{c.value}</p>
              </div>
            </Card>
          ))}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-56">
            <iframe
              title="Department location map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.28%2C19.13%2C77.36%2C19.19&layer=mapnik"
            />
          </div>
        </div>

        <Card className="p-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input id="contact-name" label="Full Name" {...register('name')} error={errors.name?.message} />
              <Input id="contact-email" label="Email" type="email" {...register('email')} error={errors.email?.message} />
            </div>
            <Input id="contact-subject" label="Subject" {...register('subject')} error={errors.subject?.message} />
            <div>
              <label htmlFor="contact-message" className="text-xs font-semibold text-primary dark:text-white">Message</label>
              <textarea
                id="contact-message"
                {...register('message')}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-sm outline-none focus:border-secondary resize-none dark:text-white"
              />
              {errors.message && <p id="contact-message-error" className="text-xs text-danger mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </section>
    </>
  )
}
