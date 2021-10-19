import React from 'react'

const OPERATOR_QUERY = `
{
  operators {
    id
    name
    code
    color
  }
}
`

function OperatorItem(){
  const [operators, setOperators] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:4000/graphql', {
      method:"POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query: OPERATOR_QUERY })
    }).then(response => response.json())
      .then(data => setOperators(data.data.operators))
  },[])
  return(
    <div>
      <ul>
        {operators.map(operator => (
          <li>{ operator.name }</li>
        ))}
      </ul>
    </div>
  )
}

export default OperatorItem