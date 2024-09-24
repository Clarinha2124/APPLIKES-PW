import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src="https://github.com/Clarinha2124.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Clara Cavalheiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 de setembro às 09:44h"datetime="2024/09/10 09:44:00">Publicado à 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera!!</p>
                <p>Amanhã teremos viagem a bienal</p>
                <p>
                    <a href="#">#bienaldolivro</a>{''}
                    <a href="#">#eteccidadedolivro</a>{''}
                    <a href="#">#vempraetec </a>{''}
                </p>
            </div>

            <form className={styles.commentForm}>
             <strong>Deixe deu feedback</strong>

             <textarea placeholder='deixe um comentário'></textarea>


           <footer>
             <button type='submit'> Publicar </button>
             </footer>
            </form>

<div>
<Comment/>
<Comment/> 
<Comment/> 
</div>





        </article>

    )
}