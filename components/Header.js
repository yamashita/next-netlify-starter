export default function Header({ title }) {
    return(
        <>
            <h1 className="title">{title}</h1>
            <p>
              <ol>
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
              </ol>
            </p>
        </>
    );
}
