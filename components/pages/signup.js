import Navbar from "../components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="bg-white p-6 rounded shadow-md w-80">
          <input type="text" placeholder="Name" className="border p-2 mb-4 w-full" />
          <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
          <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
          <button className="bg-green-500 text-white px-4 py-2 w-full">Sign Up</button>
        </form>
      </div>
    </>
  );
}
