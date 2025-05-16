import HeaderComponent from "../components/HeaderComponent";

function BlogPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("El formulario se ha enviado");
  };

  return (
    <>
      <HeaderComponent />

      <div className="blog-container">
        <h1 className="form-title">Tu opinión nos importa</h1>

        <form className="opinion-form" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Nombre:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Escribe tu nombre"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="comentario">Comentario:</label>
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Escribe tu comentario"
              rows="4"
              required
            ></textarea>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default BlogPage;
