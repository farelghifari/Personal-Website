import CategoryClient from './CategoryClient'

export default function Page({
  params,
}: {
  params: { category: string }
}) {
  return <CategoryClient category={params.category} />
}