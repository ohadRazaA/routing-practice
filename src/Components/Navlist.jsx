import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{props.heads}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">{props.main}</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/hero">{props.mostRelevant}</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/trending">{props.trending}</Link>
              </li>
            </ul>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
              </ul>
            </div>

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navlist

