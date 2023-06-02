import { ShipsContainer, ShipsCardName, ShipsCardModel, LoadingContainer } from './Styles';
import { Link } from 'react-router-dom';
import { ShipsData } from '../../Context/ShipsDataProvider';
import { useContext, useRef, useCallback } from 'react';

const Ships = () => {
  // All elements provided by USerContext
  const { ships, loading, setLoading, page, setPage } = useContext(ShipsData)

  // Make use of IntersectionOberver API to dynamically add a ref to the last element from the list of ships and then act to generate infinite scrolling
  const observer = useRef()
  const lastEl = useCallback(node => {
    // If it's loading just wait
    if(loading) return

    // If there's already an element intersecting and being observed, disconnect it
    if(observer.current) {
      observer.current.disconnect()
    } 

    // Else create a new entry to be observed
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        // When last element is fully visible load more 
        setLoading(true)
        setTimeout(() => {
          // After 1 second set loading to false and increment the page state to fetch more data
          setLoading(false)
          setPage( prevPage => prevPage + 1)
        }, 1000 )
      }
    }, {
      threshold: 1,
    })
    if(node) {
      // Observe the created entry or element
      observer.current.observe(node)
    }
  }, [])

  // Map over the ships array and find the last one
  const shipsEl = ships.map(({ name, model, id }, i) => {

    // Clean up the ship name to display it as a parameter in the URL
    const nameAsParam = name.split(' ').join('-')

    // If it is the last element return a link with theobserver ref
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
      // If it is not the last ship in the ships array return a link without the ref
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