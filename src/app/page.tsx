import api from "./api"

export default async function Home() {

  const restaurants = await api.list();
  return (
      <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <div className="md:mx-32 md:my-10 mx-10 my-5">
          <h1>¡Hola!</h1>
          <p>Esta es mi feria Americana para ayudarnos a solventarnos en nuestra mudanza.</p>
        </div>
        <section className="container grid grid-cols-1 gap-12 md:grid-cols-2 md:mb-16 mb-10">
          {
            restaurants.map((restaurant) => {
              return (
                <article key={restaurant.id}>
                  <img 
                    alt={restaurant.name}
                    className="mb-3 h-[300px] w-full object-cover"
                    src={restaurant.image}
                  />
                  <h2 className="inline-flex gap-2 text-lg font-bold">
                    <span>{restaurant.name}</span>
                    <small className="inline-flex gap-1">
                      <span>🌟</span>
                      <span>{restaurant.score}</span>
                      <span className="fot-normal opacity-75">({restaurant.ratings})</span>
                    </small>
                  </h2>
                  <p className="opacity-90">{restaurant.description}</p>
                </article>
              )
            })
          }
        </section>
      </main>
    )
}