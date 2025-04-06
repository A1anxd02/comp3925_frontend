import { useEffect } from 'react'
import axios from 'axios'

export default function TestConnection() {
  useEffect(() => {
    axios.get('/api/csv/education-level')
      .then(res => console.log('Backend connection success:', res.data))
      .catch(err => console.error('Connection failed:', err))
  }, [])

  return <div>Check browser console for connection status</div>
}