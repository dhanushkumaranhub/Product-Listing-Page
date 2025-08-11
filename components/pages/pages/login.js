import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="bg-white p-6 rounded shadow-md w-80">
          <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
          <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
          <button className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
        </form>
      </div>
    </>
  );
}
