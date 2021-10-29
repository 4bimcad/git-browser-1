import React, { useEffect, useState } from 'react'

import { useHistory, useParams,  } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Head from './head'
import Header from './header'


const Repository = () => {

  const { userName, repositoryName } = useParams()
  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((str) => {
        setText(str)
      })
      .catch((err) => console.log(err))
  })

  /* button back */
  const urlUser = `/${userName}`
  const history = useHistory()
  function handleClick() {
    history.push(`${urlUser}`)
  }

  return (
    <div>
      <Head title="Repository" />
      <Header repositoryName={repositoryName} />
      <div className="w-full flex items-center justify-center bg-teal-dark font-sans">
        <div className="bg-white rounded shadow p-3 m-2 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <div>
              <button
                type="button"
                id="back-button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClick}
              >Back</button>
            </div>
            <h1 className="text-grey-darkest font-semibold">REPOSITORY</h1>
            <div> User name: {userName}</div>
            <div> Repository name: {repositoryName}</div>
            <div id="description">Readme File:
              <ReactMarkdown>
                {text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Repository.propTypes = {}

export default React.memo(Repository)
