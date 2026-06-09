import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
// import Business from './Business.jsx';
// import Entertainment  from './Entertainment.jsx'
// import General from './General.jsx'
// import Health from './Health.jsx'
// import Science from './Science.jsx'
// import Sport from './Sport.jsx'
// import Technology from './Technology.jsx'
import { Mycontext_provider } from './Main_data_container.jsx';

import { Page_context_provider } from './page/Show_news_or_News_details_page.jsx';





// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<App/>,
//       children:[
//         {
//             path:"/Business",
//         element:<Business/>,
//         },
//         {
//             path:"/Entertainment",
//         element:<Entertainment/>,
//         },
//         {
//             path:"/General",
//         element:<General/>,
//         },
//         {
//             path:"/Health",
//         element:<Health/>,
//         },
//         {
//             path:"/Science",
//         element:<Science/>,
//         },
//         {
//             path:"/Sport",
//         element:<Sport/>,
//         },
//         {
//             path:"/Technology",
//         element:<Technology/>,
//         },
//       ]
//     }
//   ]
// )

createRoot(document.getElementById('root')).render(
<Mycontext_provider>
      
   <Page_context_provider>
  <App/>
        </Page_context_provider>
</Mycontext_provider> 
)


