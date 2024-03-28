import Avatar from "./components/Avatar";
import Card from "./components/Card";
import CardLink from "./components/CardLink";

const links = [
  {
    href: "https://github.com/aydinterzi",
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ayd%C4%B1n-terzi-a4991a170/",
    text: "LinkedIn",
  },
  {
    href: "https://www.frontendmentor.io/profile/aydinterzi",
    text: "Frontend Mentor",
  },
];
function App() {
  return (
    <div className="h-dvh bg-off-black flex items-center justify-center text-base">
      <Card>
        <Avatar src="me.jpeg" alt="me" />
        <span className="font-bold text-2xl mt-6">Aydın Terzi</span>
        <span className="text-green font-semibold mt-2">İstanbul, Türkiye</span>
        <span className="font-semibold m-5">"Frontend Developer"</span>
        <div className="flex flex-col gap-4 w-full">
          {links.map((link, index) => (
            <CardLink key={index} link={link} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
