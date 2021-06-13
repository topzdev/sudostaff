export default function({ store, redirect }) {
  // If the user is not authenticated
  //   console.log("Is Admin Middleware", context);

  if (!store.$auth.user.isAdmin) {
    return redirect("/user/your-info");
  }

  return;
}
