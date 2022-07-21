import { Post } from './Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Vinicius Sousa" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ut debitis dolor placeat pariatur a quaerat enim cumque qui dolorum temporibus at esse, perspiciatis ducimus minima modi quasi omnis dolorem."  
          />

          <Post 
            author="Thais Souza"
            content="Outro post"
          />  
        </main>
      </div>
    </div>
  );
}