import styles from './Post.module.css';
import { Comment } from './Comment';




export function Post({author}){
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.nome}</strong>
                        <span>{author.cargo}</span>
                    </div>
                </div>
                <time title="10 de setembro às 09:44h" dateTime="2024/09/10 09:44:00">Publicado à 1h</time>
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

<div className={styles.commentList}>
<Comment/>
<Comment/> 
<Comment/> 
</div>





        </article>

    )
}