import React from 'react'
import jsonp from 'fetch-jsonp'

const getJSON = async uri => {
  const result = await fetch(uri).then(res => res.json)
  return result
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: {} }
  }
  componentDidMount () {
    getJSON(
      'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/players?team=Arsenal'
    ).then(json => this.setState({ items: json }))
  }
  render () {
    console.log(this.state)
    return <div>test</div>
  }
}
export default App
