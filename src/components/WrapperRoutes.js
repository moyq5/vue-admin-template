import FormBasic from "./FormBasic";
import FormWizard from "./FormWizard";
import IconMaterial from "./IconMaterial";
import IconFontawesome from "./IconFontawesome";
import PagesButtons from "./PagesButtons";
import PagesElements from "./PagesElements";
import Tables from "./Tables";

import Permission from "./Permission";

const routes = [
  { path: '/', component: FormBasic },
  { path: '/form-basic.html', component: FormBasic },
  { path: '/form-wizard.html', component: FormWizard },
  { path: '/icon-material.html', component: IconMaterial },
  { path: '/icon-fontawesome.html', component: IconFontawesome },
  { path: '/pages-buttons.html', component: PagesButtons },
  { path: '/pages-elements.html', component: PagesElements },
  { path: '/tables.html', component: Tables },
  
  { path: '/permission.html', component: Permission }
]

export default routes;
