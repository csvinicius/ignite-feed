import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return ( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/csvinicius.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Sousa</strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>

                <time title='21 de Julho de 2022' dateTime='2022-07-21'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais</p> um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    <p><a href=''>vini.design/doctorcare</a></p>
                    <p>
                        <a href=''>#novoprojeto</a>{' '}
                        <a href="">#rocketseat</a>{' '}
                        <a href="">#nlw</a> 
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}