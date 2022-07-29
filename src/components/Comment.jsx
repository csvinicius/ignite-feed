import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return ( 
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/tthaisnunes.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thais Souza</strong>
                            <time title='21 de Julho de 2022' dateTime='2022-07-21'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>

                <footer>
                    <button title='Aplaudir comentário'>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}