function ALink(props) {
    let url = props.url
    let name = props.name
    return (
        <a href={url}>{name}</a>
    );
  }