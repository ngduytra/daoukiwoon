
import React, {useEffect, useState} from "react";
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';
import Loading from './components/loading/Loading.component'

const LoadableLogin = Loadable({
  loader: () => import('./components/login/Login.component'),
  loading: Loading,
});

const LoadablePage1 = Loadable({
  loader: () => import('./components/page1/Page1'),
  loading: Loading,
});

const LoadablePage2 = Loadable({
  loader: () => import('./components/page2/Page2'),
  loading: Loading,
});

const LoadablePage3 = Loadable({
  loader: () => import('./components/page3/Page3'),
  loading: Loading,
});

const LoadablePage4 = Loadable({
  loader: () => import('./components/page4/Page4'),
  loading: Loading,
});

const LoadablePage5 = Loadable({
  loader: () => import('./components/page5/Page5'),
  loading: Loading,
});

const LoadablePage6 = Loadable({
  loader: () => import('./components/page6/Page6'),
  loading: Loading,
});

const LoadablePage7 = Loadable({
  loader: () => import('./components/page7/Page7'),
  loading: Loading,
});

const LoadablePage8 = Loadable({
  loader: () => import('./components/page8/Page8'),
  loading: Loading,
});

const LoadableHeader = Loadable({
  loader: () => import('./components/header/Header'),
  loading: Loading,
});

const LoadableFooter = Loadable({
  loader: () => import('./components/footer/Footer'),
  loading: Loading,
});


const App = () => {
  const [index, setIndex] = useState(true)
  const [user, setUser]  = useState({})
  const [error, setError]  = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      // We can handle lazy load for the component that don't nesscessary for first render time.
    })
  }, [])

  const handleSubmit = () => {
      fetch("https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1")
          .then((data) => data.json())
          .then((user) => setUser(user))
          .catch(() => {
              setError(true);
          });
  };
  
  return (
    <>
      {
        Object.keys(user).length === 0 ? (
          <LoadableLogin handleSubmit={handleSubmit} />
        ) : (
          <div>
          <LoadableHeader />
          <LoadablePage1/>
          <LoadablePage2/>
          <LoadablePage3/>
          <LoadablePage4/>
          <LoadablePage5/>
          <LoadablePage6/>
          <LoadablePage7/>
          <LoadablePage8/>
          <LoadableFooter />
        </div>
        )
      }
    </>
  );
}

export default hot(App);
