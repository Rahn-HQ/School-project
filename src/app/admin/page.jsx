import React from "react";
import { getServerSession } from "next-auth";
import  { authOptions } from '../api/auth/[...nextauth]/route'
const page = async () => {
  const session =  await getServerSession(authOptions)
  console.log(session.user.role);
  if ( session.user.role !== 'admin' ){
     return <p>Access Denied!</p>
  }
  return <>
   Info about all users
  </>;
};

export default page;
