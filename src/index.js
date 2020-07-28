import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/animation.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import './script/component/my-footer.js';
import dataSource from "./script/view/data-source.js";
import dataTabel from "./script/view/data-tabel.js";
import headerSticky from "./script/animation/header-sticky";
headerSticky();
dataSource();
dataTabel();