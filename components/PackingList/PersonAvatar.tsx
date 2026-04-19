'use client'

import { Person, PERSON_CONFIG } from '@/types'

interface Props {
  person: Person
  size?: 'sm' | 'md'
  onClick?: () => void
  faded?: boolean
}

export default function PersonAvatar({ person, size = 'sm', onClick, faded }: Props) {
  if (person === 'all') return null
  const config = PERSON_CONFIG[person]
  const dim = size === 'sm' ? 22 : 28
  return (
    <button
      onClick={onClick}
      title={config.label}
      style={{
        width: dim,
        height: dim,
        backgroundColor: faded ? 'transparent' : config.color,
        borderRadius: 6,
        color: faded ? '#bbb' : '#fff',
        fontSize: size === 'sm' ? 10 : 12,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s',
        border: faded ? '1.5px solid #e2e8f0' : 'none',
        flexShrink: 0,
        letterSpacing: '0.01em',
      }}
    >
      {config.initial}
    </button>
  )
}
