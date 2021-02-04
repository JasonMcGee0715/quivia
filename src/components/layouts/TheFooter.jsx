import ALink from '@/components/elements/ALink';

function TheFooter(props) {
    let links = props.links
    let url = props.links.url
    let linkname = props.links.linkname
    let linkMap = links.map(() => 
        <ALink url={url} name={linkname} />
    )
    return (
        <footer>
            {linkMap}
        </footer>
    );
  }