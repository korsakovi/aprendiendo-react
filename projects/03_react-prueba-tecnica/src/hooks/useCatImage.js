import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(
   `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => {
        console.log(res)
        if (!res.ok) throw new Error('Error en la carga de imagen')
        return res.json()
      })
      .then((response) => {
        console.log(response)
        const { url } = response
        setImageUrl(url)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [fact])
  return { imageUrl }
}
