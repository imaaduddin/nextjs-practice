import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Hello!</h1>
      <p>This is some even more text here.</p>
      <Footer />
    </div>
  )
}
