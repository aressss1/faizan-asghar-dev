import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/koolkishan/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Inspired by Kishan Sheth.</span>
      </Link>
    </footer>
  );
}

export default Footer;
