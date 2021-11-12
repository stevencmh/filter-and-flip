import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SortedArray from '../components/SortedArray'
import { Flipper } from 'react-flip-toolkit'


const originalArray = [
  { id: "aghew", title: "1", bodyCopy: "Lorem ipsum dolord sit met, consectetur adpiscing elit", category: "one", image: '/imgs/1.gif' },
  { id: "harwe", title: "2", bodyCopy: "ula qus mauris arcu. Doec ac euismod and keaba leia", category: "two" },
  { id: "ntrty", title: "3", bodyCopy: "Morbi laciania sollicitudin leo quis fermentum", category: "three" },
  { id: "iowet", title: "2", bodyCopy: "Morbi elit risus, bibenddum vitae commodo viverra, interdum", category: "two" },
  { id: "no8dsw", title: "2", bodyCopy: "Pellenesque in puus vitvae ane lacinia egestas", category: "two" },
  { id: "sery", title: "3", bodyCopy: "Aliquam finibus suscipit tinczidunt integer", category: "three" },
  { id: "biruw", title: "1", bodyCopy: "Praesent vitae placerat enim. Nunc lobortis turepis vitae finibus vehicula", category: "one" },
  { id: "soiuer", title: "3", bodyCopy: "Integer lobortis dagna ac imperdiet accumsan duis", category: "three" },
  { id: "agh6ew", title: "1", bodyCopy: "Lor ipsum dolor sit amet, consectetur adipiscinvg elit", category: "one" },
  { id: "haarwe", title: "2", bodyCopy: "ulla quis mauris arcu. Donec ac euiszmod and keiba leia", category: "two" },
  { id: "ntrvty", title: "3", bodyCopy: "Morbi lacinia soliciteudin leo uis fermntum", category: "three" },
  { id: "iow2et", title: "2", bodyCopy: "Morbi elibt risus, biendum vitae comdo viverra, interdum", category: "two" },
  { id: "no8udsw", title: "4", bodyCopy: "Pellentesdque in purus vitae ante lacinia egestas", category: "four" },
]

const categories = [...new Set(originalArray.map(o => o.category))];


export default function Home() {
  const [categorySelect, setCategorySelect] = useState('all')
  const [sortedArray, setSortedArray] = useState(originalArray)

  useEffect(() => {
    setSortedArray(categorySelect === "all" ? [...originalArray] : [...originalArray.filter(i => i.category === categorySelect)])
  }, [categorySelect])


  return (
    <div className={styles.container}>
      <Head>
        <title>Filter and Flip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filter and Flip
        </h1>

        <div className={styles.filter}>
          {categories && categories.map((s) => {

            return (
              <button
                type="button"
                key={s}
                value={s}
                onClick={(e) => { setCategorySelect(e.target.value) }}
              >
                {s}
              </button>
            )
          })}
          <button
            type="button"
            key={'all'}
            value={'all'}
            onClick={(e) => { setCategorySelect(e.target.value) }}
          >
            ALL
          </button>
        </div>

        <div className={styles.grid}>
          <Flipper
            flipKey={`${categorySelect}-${JSON.stringify(sortedArray)}`}
          >
            <SortedArray data={sortedArray} />
          </Flipper>

        </div>
      </main>

    </div>
  )
}