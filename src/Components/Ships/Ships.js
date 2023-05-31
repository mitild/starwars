import { ShipsContainer, ShipsCardName, ShipsCardModel, LoadingContainer } from './Styles';
import { Link } from 'react-router-dom';
import { ShipsData } from '../../Context/ShipsDataProvider';
import { useContext, useRef, useCallback } from 'react';

const Ships = () => {
  const { ships, loading, setLoading, page, setPage } = useContext(ShipsData)

  const observer = useRef()
  const lastEl = useCallback(node => {
    if(loading) return
    if(observer.current) {
      observer.current.disconnect()
    } 
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setPage( prevPage => prevPage + 1)
        }, 1000 )
      }
    }, {
      threshold: 1,
    })
    if(node) {
      observer.current.observe(node)
    }
  }, [])

  const shipsEl = ships.map(({ name, model, id }, i) => {
    const nameAsParam = name.split(' ').join('-')

    if(ships.length === i + 1) {
      return (
        <Link key={ id } to={`/ships/${ nameAsParam }`} style={{ textDecoration: 'none'}} ref={ lastEl }>
          <ShipsContainer>
            <ShipsCardName>{ name }</ShipsCardName>
            <ShipsCardModel>{ model }</ShipsCardModel>
          </ShipsContainer>
        </Link>
      ) 
      }
      else {
        return (
        <Link key={ id } to={`/ships/${ nameAsParam }`} style={{ textDecoration: 'none'}}>
          <ShipsContainer>
            <ShipsCardName>{ name }</ShipsCardName>
            <ShipsCardModel>{ model }</ShipsCardModel>
          </ShipsContainer>
        </Link>
      ) 
      }
  })
  return (
    <>
      { shipsEl }
      {loading && <LoadingContainer><p>{loading && page > 4 ? 'No more ships for the moment...' : 'Loading more ships...'}</p></LoadingContainer>} 
    </>
  )
}

export default Ships