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
  const dim = size === 'sm' ? 20 : 26
  return (
    <button
      onClick={onClick}
      title={config.label}
      style={{
        width: dim,
        height: dim,
        backgroundColor: faded ? '#ccc' : config.color,
        borderRadius: 4,
        color: '#fff',
        fontSize: size === 'sm' ? 10 : 12,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'opacity 0.15s',
        opacity: faded ? 0.4 : 1,
        border: 'none',
        flexShrink: 0,
      }}
    >
      {config.initial}
    </button>
  )
}
