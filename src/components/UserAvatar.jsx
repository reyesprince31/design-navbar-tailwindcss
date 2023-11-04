function UserAvatar() {
  return (
    <div className="flex items-center">
      <img
        className="h-8 w-8 rounded-full object-cover border-2 border-gray-600"
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
        alt="Your avatar"
      />
      <span className="text-white font-semibold ml-3">Jane Doe</span>
    </div>
  );
}

export default UserAvatar;
