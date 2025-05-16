import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomething = () => {
    console.log("Di Algo");
    alert("Ahora");
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr></hr>
      <button onClick={saySomething}>Pulsa aquí</button>
    </>
  )
}

export default HomePage