import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Contact() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Contact Us</h1>
      <p className="mt-4">This is the contact page. You can reach us at contact@myremixapp.com.</p>
    </div>
  );
}
