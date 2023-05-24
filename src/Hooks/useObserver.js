import {useRef, useCallback, useContext} from 'react';
import {ShipsData} from '../Context/ShipsDataProvider';

const useObserver = (setterOne, setterTwo) => {
  const { ships, loading, setLoading, page, setPage } = useContext(ShipsData)

  const [ one, setterOne]
  const observer = useRef()
  const lastEl = useCallback(node => {
    if(setterOne) return
    if(observer.current) {
      observer.current.disconnect()
    } 
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setterOne(true)
        setTimeout(() => {
          setterOne(false)
          setterTwo( prev => prev + 1)
        }, 1000 )
      }
    }, {
      threshold: 1,
    })
    if(node) {
      observer.current.observe(node)
    }

  }, [])
  return [ lastEl, observer ]
}

export default useObserver