import React, { useEffect } from 'react'
import './App.css'
import routes from '../../routes/routes'
import Layout from '../../components/Layout'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../../types'
import { getUserData } from '../../reducers/blog'

const App: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  // Selector
  const auth = useSelector(({ auth }: Store) => auth)
  const error = useSelector(({ blog }: Store) => blog.error)

  const loggedInUser = auth.authToken

  useEffect(() => {
    if (auth.authToken && !error) {
      dispatch(getUserData())
    }
    if (error) {
      history.push('/login')
    }

  }, [dispatch, auth.authToken, error, history])

  return (
    <div className='App'>
      <Layout history={history} hasSidebar={!!loggedInUser}>
        {routes()}
      </Layout>
    </div>
  )
}

export default App
