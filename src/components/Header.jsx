export default function Header() {
  const date = new Date()
  const longMonth = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div>
      {longMonth}
      <h2>Protein Counter</h2>
    </div>
  )
}
