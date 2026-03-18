export type DeadlineStatus = 'upcoming' | 'urgent' | 'overdue'

export interface Deadline {
  title: string
  date: Date
  days_until: number
  status: DeadlineStatus
  description: string
}

export interface DeadlineProfile {
  visa_type: string
  program_start_date: string
  program_end_date: string
  opt_start_date?: string | null
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function daysUntil(date: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(date)
  target.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

function statusFor(days: number): DeadlineStatus {
  if (days < 0) return 'overdue'
  if (days <= 30) return 'urgent'
  return 'upcoming'
}

function make(title: string, date: Date, description: string): Deadline {
  const days = daysUntil(date)
  return { title, date, days_until: days, status: statusFor(days), description }
}

function nextMarch1(): Date {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const thisYear = new Date(today.getFullYear(), 2, 1) // March = index 2
  return thisYear >= today ? thisYear : new Date(today.getFullYear() + 1, 2, 1)
}

export function calculateDeadlines(profile: DeadlineProfile): Deadline[] {
  const deadlines: Deadline[] = []
  const { visa_type, program_end_date } = profile

  // Resolve the effective OPT start date:
  // explicit opt_start_date > fall back to program_start_date for OPT/STEM-OPT types
  const optStartRaw =
    profile.opt_start_date ||
    (['OPT', 'STEM-OPT'].includes(visa_type) ? profile.program_start_date : null)
  const optStart = optStartRaw ? new Date(optStartRaw) : null
  const programEnd = new Date(program_end_date)

  if (visa_type === 'F-1') {
    deadlines.push(make(
      'I-20 Expiration',
      programEnd,
      'Your authorized period of study ends. Ensure your program is complete or your I-20 is extended.',
    ))
    deadlines.push(make(
      'OPT Application Window Opens',
      addDays(programEnd, -90),
      'You can begin filing your OPT application with USCIS 90 days before your program end date.',
    ))
    deadlines.push(make(
      'OPT Application Window Closes',
      addDays(programEnd, 60),
      'Last day to submit your OPT application. Missing this permanently forfeits OPT eligibility.',
    ))
    deadlines.push(make(
      '60-Day Grace Period Ends',
      addDays(programEnd, 60),
      'Your authorized US stay ends. You must depart, change status, or have a pending OPT application.',
    ))
    if (optStart) {
      deadlines.push(make(
        'STEM OPT Extension Application Window',
        addDays(optStart, 120),
        'Earliest point your DSO can recommend you for a 24-month STEM OPT extension.',
      ))
    }
  }

  if (visa_type === 'OPT' || visa_type === 'STEM-OPT') {
    if (optStart) {
      deadlines.push(make(
        'OPT End Date',
        addDays(optStart, 365),
        'Your OPT work authorization expires. Have an approved STEM extension or new status by this date.',
      ))
      deadlines.push(make(
        'STEM Extension Application Deadline',
        addDays(optStart, 270),
        'Apply for your STEM OPT extension by this date — at least 90 days before your OPT expires.',
      ))
    }

    const h1bDate = nextMarch1()
    if (daysUntil(h1bDate) <= 180) {
      deadlines.push(make(
        'H-1B Cap Registration Window',
        h1bDate,
        'USCIS opens H-1B cap registration in March. You need an employer sponsor to be registered.',
      ))
    }
  }

  return deadlines.sort((a, b) => a.date.getTime() - b.date.getTime())
}

/** Returns a Tailwind color set based on days_until */
export function deadlineColors(days_until: number): {
  border: string
  badge: string
  badgeText: string
  pill: string
  pillText: string
} {
  if (days_until < 0) {
    return {
      border: 'border-l-red-500',
      badge: 'bg-red-100',
      badgeText: 'text-red-700',
      pill: 'bg-red-100',
      pillText: 'text-red-700',
    }
  }
  if (days_until <= 30) {
    return {
      border: 'border-l-red-400',
      badge: 'bg-red-100',
      badgeText: 'text-red-700',
      pill: 'bg-red-100',
      pillText: 'text-red-700',
    }
  }
  if (days_until <= 90) {
    return {
      border: 'border-l-amber-400',
      badge: 'bg-amber-100',
      badgeText: 'text-amber-700',
      pill: 'bg-amber-100',
      pillText: 'text-amber-700',
    }
  }
  return {
    border: 'border-l-green-500',
    badge: 'bg-green-100',
    badgeText: 'text-green-700',
    pill: 'bg-green-100',
    pillText: 'text-green-700',
  }
}

export function formatDeadlineDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
