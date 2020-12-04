export const NewRibbon = (props) => {
  return (
    <div className={props.tipo === "novo" ? "ribbon new" : "ribbon sale"}>
      <div className="theribbon">{props.tipo}</div>
      <div className="ribbon-background"></div>
    </div>
  );
};
