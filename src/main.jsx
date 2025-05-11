import CreditEntryForm from './CreditEntryForm'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CreditUtilizationTable from './CreditUtilizationTable'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <div className="p-4 space-y-6">
    <CreditEntryForm />
    <CreditUtilizationTable />
  </div>
</React.StrictMode>
)
