import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">ReactReduxFirebaseAuth</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}
export default withRouter(Nav);
