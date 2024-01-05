export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <title>Empréstimo do Caixa Tem</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }
  