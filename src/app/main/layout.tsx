export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="font-extrabold">Main Layout</h1>
      {children}
    </div>
  )
}
