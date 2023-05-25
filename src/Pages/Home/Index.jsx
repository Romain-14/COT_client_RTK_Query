import React from 'react'

function Home({data: {tea}}) {


  return (
    <>
      {tea.map((t,i) => {
        return i < 3 && (
          <article key={t.id}>
            <h2>{t.mainTitle}</h2>
          </article>
        )
      })}
    </>
  )
}

export default Home