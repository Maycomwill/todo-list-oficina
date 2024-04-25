export default function Home() {
  function Button(){
    return (<button className="py-2 px-4 bg-blue-500">Clique</button>)
  }
  
  return (
    <div>
      <h1>Home</h1>
      <Button />
      <Button />
      <Button />
    </div>
  );
}
