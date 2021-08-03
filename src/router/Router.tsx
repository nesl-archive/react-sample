import React from 'react'
import { HashRouter, Route, Link} from 'react-router-dom'

export default function Router(): JSX.Element {
	return (
        <HashRouter>
            <div>
                <ul>
                    <li>  <Link to="/">Home</Link>  </li>
                    <li>  <Link to="/about">About</Link>  </li>
                    <li>  <Link to="/blog">Blog</Link>  </li>
                </ul>

                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={blog} />
            </div>
        </HashRouter>
    )
}