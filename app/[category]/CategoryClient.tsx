'use client'

import { useEffect, useState } from 'react'
import { getCategoryItems } from '@/data/portfolio'
import Link from 'next/link'

export default function CategoryClient({
  category,
}: {
  category: string
}) {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const data = getCategoryItems(category as any)
    setItems(data || [])
  }, [category])

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-4">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/${category}/${item.id}`}
          className="block p-4 border rounded-lg hover:bg-muted"
        >
          <h2 className="text-xl font-semibold">
            {item.title ??
              item.school ??
              item.company ??
              item.organization ??
              item.name ??
              'Untitled'}
          </h2>
        </Link>
      ))}
    </div>
  )
}