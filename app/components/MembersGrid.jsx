import React from 'react'
import Profilecard from './Profilecard'
import { Details4yr, Details3yr } from '../data/members'

const MembersGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">4th Year Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Details4yr.map((member) => (
          <Profilecard key={member.id} member={member} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center my-8">3rd Year Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Details3yr.map((member) => (
          <Profilecard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default MembersGrid 