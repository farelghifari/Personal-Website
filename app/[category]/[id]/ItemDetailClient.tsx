'use client'

import { useEffect, useState } from 'react'
import { getCategoryItems } from '@/data/portfolio'
import { getSkeletonData } from '@/data/skeleton-data'
import { AccordionItem } from '@/components/accordion-item'

export default function ItemDetailClient({
  category,
  id,
}: {
  category: string
  id: string
}) {
  const [item, setItem] = useState<any | null>(null)
  const [isPlaceholder, setIsPlaceholder] = useState(false)

  useEffect(() => {
    let items = getCategoryItems(category as any)

    if (!items || items.length === 0) {
      items = getSkeletonData(category as any) as any[]
      setIsPlaceholder(true)
    }

    const found = items.find((i: any) => i.id === id)
    setItem(found || null)
  }, [category, id])

  if (!item) {
    return (
      <div className="px-6 py-20 text-center text-muted-foreground">
        Item not found
      </div>
    )
  }

  let details: string[] = []
  if (Array.isArray(item.details)) details = item.details
  else if (Array.isArray(item.responsibilities)) details = item.responsibilities
  else if (Array.isArray(item.impact)) details = item.impact

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <AccordionItem
        id={item.id}
        title={
          item.title ??
          item.school ??
          item.company ??
          item.organization ??
          item.name ??
          'Untitled'
        }
        subtitle={
          item.subtitle ??
          item.degree ??
          item.field ??
          item.position ??
          item.role ??
          item.issuer ??
          ''
        }
        summary={item.description ?? item.summary ?? ''}
        details={details}
        tags={item.tags || []}
        images={item.images || []}
        startDate={item.startDate || item.issueDate}
        endDate={item.endDate || item.expirationDate}
        achievements={
          Array.isArray(item.achievements) &&
          typeof item.achievements[0] === 'object'
            ? item.achievements
            : []
        }
        skills={item.skills || []}
        supportingDocuments={item.supportingDocuments || []}
        isPlaceholder={isPlaceholder}
        expandedPreview
        category={category}
      />
    </div>
  )
}