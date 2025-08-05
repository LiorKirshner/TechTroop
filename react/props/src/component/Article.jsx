const Article = (props) => {
  return (
    <div>
      {props.info.color} {props.info.type}
    </div>
  );
};

export default Article;
