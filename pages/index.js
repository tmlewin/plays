import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { useState,useEffect } from 'react'


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return {
    props: {
      todos: data
      
    },
  }
}

export default function Home({ todos }) {

  // This was a test showing the draw backs of not using server side rendering. There is a rendering penalty in terms of speed. Now i would show u how to use the ssr feature of nextjs to eliminate  this perf bottleneck entirely and make it super fast.
// const [todos, setTodos] = useState([]);

// useEffect(() => {
//   setTimeout(async() => {
//     const fetchData = async () => {
//       const result = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await result.json();
//         console.log(data);
//         setTodos(data);
//       };
//       fetchData();
//   }, 3000); 
  
// }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       {/* body of test code written here  */}

       {todos?.length === 0 ? (
         <div>Loading...</div>
        ) : (
          todos?.map(todo => (
            <div key={todo.id}>
              <p>{todo.id}  : {todo.title}</p>
            </div>
          ))
        )}


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
