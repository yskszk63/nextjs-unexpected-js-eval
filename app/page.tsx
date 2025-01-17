/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const { href } = new URL("throw-error-on-load/throw.js", import.meta.url);
  return <a href={href}>{href}</a>;
}
