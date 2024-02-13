import path from "path";

class PageController {
  static getHomePage(req, res) {
    res.sendFile(path.resolve() + `/public/html/index.html`);
  }

  static getSimplePage(req, res, fileName) {
    res.sendFile(path.resolve() + `/public/html/${fileName}.html`);
  }
}

export default PageController;