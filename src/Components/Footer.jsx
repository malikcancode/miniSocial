function Footer() {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between p-4 py-2 my-2 border-top">
      <h3>
        <a
          href="https://github.com/malikcancode"
          target="_blank"
          rel="noopener noreferrer"
        >
          developed by Yasirmalik
        </a>
      </h3>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
