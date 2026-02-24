import ItemDetailClient from './ItemDetailClient'

export default function Page({
  params,
}: {
  params: { category: string; id: string }
}) {
  return (
    <ItemDetailClient
      category={params.category}
      id={params.id}
    />
  )
}