import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import './global.css';


//author: {avatarUrl: "", nome: "", cargo: ""}
//dataPublicacao: Date
//content: string



const posts = [
{
  id:1,
  author:{
    avatarUrl:'https://github.com/Clarinha2124.png',
    nome: 'Clara Cavalheiro',
    cargo: 'Aluna da Etec'
  },
  content: [
    {type: 'paragraph', content: 'Fala Galera!!'},
    {type: 'paragraph', content: 'Amanhã teremos viagem a bienal'},
    {type: 'link', content: 'uol.com.br'}
  ],
  dataPublicacao: new Date('2024/09/10 09:44:00')
},

{
  id:2,
  author:{
    avatarUrl:'https://github.com/Eduardapac.png',
    nome: 'Eduarda Leite',
    cargo: 'Aluna da Etec'
  },
  content: [
    {type: 'paragraph', content: 'Fala Galerinha!!'},
    {type: 'paragraph', content: 'Amanhã teremos viagem a bienal'},
    {type: 'link', content: 'g1.com.br'}
  ],
  dataPublicacao: new Date('2024/11/5 10:26:00')
}

]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
         {posts.map(post => {
          return(
          <Post
          author={post.author}
          content={post.content}
          dataPublicacao={post.dataPublicacao}
          />
          )
         })}
        </main>
      </div>
    </div>
  )
}
