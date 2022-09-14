import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function MovieShow(props) {

  const { id } = useParams()
  console.log(id)
  return (
    <h1>TEESTT</h1>
  )
}

export default MovieShow