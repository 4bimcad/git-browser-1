import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Head from './head'
import Header from './header'

const UserName = () => {

  /* button back */
  const history = useHistory()
  function handleClick() {
    history.push('/')
  }

  /* username from route (from root) */
  const { userName } = useParams()

  /* github user */
  const url = `https://api.github.com/users/${userName}/repos`

  const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setRepo(arr)
      })
      .catch((err) => console.log(err))
  }, [])

  /* rendering */
  return (
    <div>
      <Head title="User" />
      <Header userName={userName} />
      <div className="w-full flex items-center justify-center bg-teal-dark font-sans">
        <div className="bg-white rounded shadow p-3 m-2 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <div>
              <button
                type="button"
                id="go-back"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClick}
              >Back</button>
            </div>
            <div className="flex mt-4" >
              User name: {userName}
            </div>
            <div className="flex mt-4" id="repository-name">
              Repositories:
              <br />
              <p>{repo.map((repoObj) => <div key={repoObj.node_id}><Link to={`/${userName}/${repoObj.name}`} key={repoObj.id}>{repoObj.name}</Link></div>)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

UserName.propTypes = {}

export default React.memo(UserName)
