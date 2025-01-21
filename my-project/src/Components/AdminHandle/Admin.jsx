import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>

      <aside>
        <div>
          <tr>
            <th>
              <td>
               <Link to={`/servicelist`}> 
               <button>services list</button>
               </Link>
              </td>

              <td>
               <Link to={`/projectlist`}> 
               <button>project List</button>
               </Link>
              </td>
            </th>
          </tr>
        </div>
      </aside>
    </div>
  )
}

export default Admin