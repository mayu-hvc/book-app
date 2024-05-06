import "./bootstrap";
import { createApp } from "vue";
import { FontAwesomeIcon } from "./fontawesome";
import CKEditorPlugin from "@ckeditor/ckeditor5-vue";
import Top from "@components/Top.vue";

const myApp = createApp(Top);

myApp.component("Fa", FontAwesomeIcon).use(CKEditorPlugin).mount("#app");
