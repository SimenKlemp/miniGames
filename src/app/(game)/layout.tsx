export default function GameLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section className='px-16 py-16'>
            {children}
        </section>
    )
}