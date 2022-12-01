import "./Presentation.scss";

const Presentation = () => {
  return (
    <section className="section__one">
      <div className="section__one__cart">
        <h1 className="section__one__cart__title">Нумеролог</h1>
        <p className="section__one__cart__subtTitle">Юлия Спирина</p>
        <p className="section__one__cart__help">
          Разобраться в себе, чтобы понять свои скрытые
          <br />
          способности и найти своё призвание в жизни
        </p>
      </div>
      <div className="section__one__background">
        <div className="section__one__background__img"></div>
      </div>
    </section>
  );
};

export default Presentation;
