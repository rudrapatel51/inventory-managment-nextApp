import Link from "next/link";
import React, { use } from "react";

interface User {
  id : number,
  firstname : string,
}


const page = async () => {
  const response = await fetch('https://jsonplaceholder.org/users')
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.firstname}</li>)}
      </ul>
      {/* This is the Users Page
      <ul>
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">User 4</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default page;
