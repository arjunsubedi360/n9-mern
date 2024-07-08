export default function User({ user }) {
    return (
      <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src={user.image} alt="" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-center">This text is centered.</p>
        </div>
      </li>
    )
  }
  