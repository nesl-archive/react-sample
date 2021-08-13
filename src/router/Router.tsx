import React from 'react'
import { HashRouter, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'

export default function Router(): JSX.Element {
	return (
        <HashRouter>
            <div>
                <ul>
                    <li>  <Link to="/">Home</Link>  </li>
                    <li>  <Link to="/about">About</Link>  </li>
                    <li>  <Link to="/blog/horse">Blog + horse</Link>  </li>
                    <li>  <Link to="/blog/pig">Blog + Blog</Link>  </li>
                    <li>  <Link to="/blog?queryName=123">Blog + Blog</Link>  </li>
                </ul>

                <hr />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:name" component={Blog} />
            </div>
        </HashRouter>
    )
}