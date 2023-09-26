import "../../style/pages/_legales.scss";

export default function page() {
  return (
    <main>
      <section className="hero-legales">
        <h1>Mentions légales</h1>
      </section>
      <section className="legales">
        <div className="proprio">
          <h3>Propriétaire du site</h3>
          <h4>Clario Cadran</h4>
          <p>33300 - Bordeaux</p>
          <p>clar.cadran@gmail.com</p>
        </div>
        <div className="hebergeur">
          <h3>Hébergeur du site</h3>
          <h4>Société Netlify</h4>
          <p>
            44 Montgomery Street, Suite 300
            <br />
            San Francisco, California 94104 <br />
            support@netlify.com
          </p>
        </div>
      </section>
    </main>
  );
}
