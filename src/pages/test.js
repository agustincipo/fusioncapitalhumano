import React from "react"
import Service1 from "../content/service1.yaml"

const TestPage = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{Service1.title}</h1>
    <ul>
      {Service1.modal.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.section.title}</li>
      })}
    </ul>
  </div>
)
export default TestPage