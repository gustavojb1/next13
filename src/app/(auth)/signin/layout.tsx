export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="font-extrabold">Auth</h1>
      {children}
    </div>
  )
}
