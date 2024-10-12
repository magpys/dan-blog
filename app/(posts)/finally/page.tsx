export default function Page(): JSX.Element {
  return (
    <div className={"flex flex-col gap-6"}>
      <h1>Finally I&#39;m writing a blog.</h1>
      <p className={"text-gray-400 italic"}>11/10/2024</p>
      <p>
        I'm over 10 years into my career as a software developer, and I'm
        finally starting a personal website, with a blog.
      </p>
      <p>
        Why has it taken me this long to start writing it? Simple - I didn't
        feel I had anything particularly important to say.
      </p>
      <p>
        There are a lot of personal projects out there, personal websites and
        libraries from perfectly good developers that simply don't need to exist
        and I've been reticent to add to the mass that already exists. So what's
        changed that makes me want to add a blog now? A few things.
      </p>
      <p>
        First, I'm just senior enough now that I might have something useful to
        say, on occasion. And if not then I'll at least aim to entertain you
        all, imagined readers. Second, I need somewhere to post about projects
        to keep me motivated to keep working on them. I don't imagine this is
        unusual, but I am terrible at finishing projects. I hope that making
        projects more public will force me to keep them to a better standard.
        Third, and probably another common one, it's for a bit of a portfolio -
        embarrassing to not have any code samples or side projects for potential
        future employers.
      </p>
    </div>
  );
}
