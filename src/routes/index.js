import config from '~/configs';
//Layout
import {LoginLayout, BackendLayout} from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';

const publicRoutes = [
    {path:config.routes.home, component: Home},
    {path:config.routes.login, component: Login, layout: LoginLayout},
    {path:config.routes.admin, component: Login, layout: BackendLayout}
]

const privateRoutes = [

]
export { publicRoutes, privateRoutes };