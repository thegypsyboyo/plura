import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) return redirect('/sign-in')
  return (
    <div>Ageny</div>
  )
}

export default Page