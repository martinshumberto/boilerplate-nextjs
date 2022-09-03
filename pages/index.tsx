import type { NextLayoutPage } from 'next'

const Home: NextLayoutPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="font-bold">Boilerplate NextJS</h1>
      <ul className="mt-4 text-center text-sm">
        <li>Radix Premitives</li>
        <li>TailwindCSS</li>
        <li>Eslint</li>
        <li>Prettier</li>
        <li>Lint stage</li>
        <li>Husky</li>
        <li>Axios</li>
        <li>Layout Pattern</li>
      </ul>
    </div>
  )
}

Home.getInitialProps = () => {
  return {
    layout: 'blank',
  }
}

export default Home
