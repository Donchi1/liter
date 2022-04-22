import React from 'react'

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

export default function Dashboard() {
  return (
    <Card>
      <h2 className="font-extrabold text-2xl text-red-500">
        Welcome Mr Million to your admin Controller
      </h2>
      <CardContent>You can do all yo wise here with ease</CardContent>
    </Card>
  )
}
