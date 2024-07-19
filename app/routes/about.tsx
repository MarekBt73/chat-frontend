import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function About() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">About Us</h1>
      <p className="mt-4">This is the about page. Here you can find more information about our app and our team.</p>
    </div>
  );
}
