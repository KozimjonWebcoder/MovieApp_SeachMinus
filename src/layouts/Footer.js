export default function Footer() {
  return (
    <div className="MainFooter">
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Our new MovieApp</h5>
              <p class="grey-text text-lighten-4">
                Loremlo Loremlo Loremlomlo Loremlomlo Loremlomlo Loremlomlo Loremlomlo Loremlomlo Loremlomlo Loremlomlo Loremlo
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Info</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Tel:+99890 770-48-75
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Email:@kozimjonmalikov154@gmail.com
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    UserName:@k_malikov
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Job:Web developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © {new Date().getUTCFullYear()} Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
