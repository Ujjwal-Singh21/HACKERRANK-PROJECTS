import React from 'react'
import './Table.css'

export const Articles = ({ articles }) => {
  
  let allArticles = articles

  return (
    <table>
      <thead>
        <tr>
          <th> TITLE </th>
          <th> UPVOTES </th>
          <th> DATE </th>
        </tr>
      </thead>
      <tbody>
        {
          allArticles.map((row) => (
            <tr key={row.upvotes}>
              <td> {row.title} </td>
              <td> {row.upvotes} </td>
              <td> {row.date} </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
