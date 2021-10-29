import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Head from './head'
import Header from './header'

const Home = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const history = useHistory()
  const pathName = `${value}`

  function handleClick() {
    history.push(`/${pathName}`)
  }


  return (

    <div>
      <Head title="Hello" />
      <Header />
      <div className="w-full flex items-center justify-center bg-teal-dark font-sans">
        <div className="flex bg-white rounded shadow p-3 m-2 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Search Form for Github</h1>
            <div className="flex mt-4">
              <input
                id="input-field"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write Github Login Here"
                value={value}
                onChange={onChange}
              />
              <button
                id="search-button"
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
