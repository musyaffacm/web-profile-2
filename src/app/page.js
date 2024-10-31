import { Poppins, Passion_One } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const passion_one = Passion_One({
  subsets: ['latin'],
  variable: '--font-passion-one',
  weight: ['400', '700', '900']
})

export default function Home() {
  return (
    <main className={`${poppins.className} ${poppins.variable} ${passion_one.variable}`}>
    </main>
  );
}
