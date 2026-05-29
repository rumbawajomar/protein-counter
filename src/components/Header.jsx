export default function Header() {
  const date = new Date()
  const longMonth = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div>
      <time className="text-sm">{longMonth}</time>
      <h2 className="text-2xl font-medium">Protein Counter</h2>
    </div>
  )
}
