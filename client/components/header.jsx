import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName }) => (
    <div className="w-full flex items-center justify-center bg-teal-dark font-sans">
        <div className="bg-white rounded shadow p-3 m-2 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4 text-indigo-800">
                <div id="repository-name">{userName}{repositoryName}</div>
                <Link id="go-back" to="/">Back</Link>
                <br />
                <Link id="go-repository-list" to={`/${userName}`}>Repository List</Link>
            </div>
        </div>
    </div>

)

Header.propTypes = {}

export default React.memo(Header)
