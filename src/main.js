import "@/style/style.css";
import { getNode, insertLast } from "kind-tiger";
import image from "@/assets/image.png";
import styles from "@/style/style.module.css";

const app = getNode("#app");

const template = `
<figure>
    <img style="width: 300px;" src="${image}" alt="logo" />
    <figcaption>hello vite</figcaption>
</figure>
<button type="button" class="${styles.btn}">click</button>
`;

insertLast(app, template);
