import React from "react";
import { getServerSession } from "next-auth";
import  { authOptions } from '../api/auth/[...nextauth]/route'
const page = async () => {
  const session =  await getServerSession(authOptions)
  if ( session.user.role !== 'admin' ){
     return <p>You are not allowed!</p>
  }
  return <>
   Page
  </>;
};

export default page;
