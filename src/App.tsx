import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';


interface postProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
  publishedAt: Date;
}

const posts : postProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/csvinicius.png',
      name: 'Vinicius Sousa',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'vini.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-29 19:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tthaisnunes.png',
      name: 'Thais Souza',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'vini.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-31 19:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}